import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import { GiftedChat, InputToolbar, Composer } from 'react-native-gifted-chat';
import { Layout, withStyles, } from 'react-native-ui-kitten';
import { withTranslation } from 'react-i18next';
import type { IChatMessage } from 'react-native-gifted-chat/lib/types.js.flow';

import CustomActions from './CustomActions'
import CustomView from './CustomView'
import messagesData from './data/messages'

const styles = StyleSheet.create({
  container: { flex: 1, },

})

const filterBotMessages = message =>
  !message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => message => message._id === step

const user = {
  _id: 1,
  name: 'Developer',
}

const otherUser = {
  _id: 2,
  name: 'React Native',
  avatar: 'https://facebook.github.io/react/img/logo_og.png',
}

class ChatScreen extends Component {
  static navigationOptions = ({
    tabBarLabel: 'Title',
  })
  state = {
    inverted: false,
    step: 0,
    messages: [],
    typingText: null,
    isLoadingEarlier: false,
  }

  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    // init with only system messages
    this.setState({
      messages: messagesData, // messagesData.filter(message => message.system),
      appIsReady: true,
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }


  onSend = (messages = []) => {
    const step = this.state.step + 1
    this.setState(previousState => {
      const sentMessages = [{ ...messages[0], sent: true, received: true }]
      return {
        messages: GiftedChat.append(
          previousState.messages,
          sentMessages,
          Platform.OS !== 'web',
        ),
        step,
      }
    })
    // for demo purpose
    // setTimeout(() => this.botSend(step), Math.round(Math.random() * 1000))
  }

  renderCustomView(props) {
    return <CustomView {...props} />
  }

  onSendFromUser = (messages = []) => {
    const createdAt = new Date()
    const messagesToUpload = messages.map(message => ({
      ...message,
      user,
      createdAt,
      _id: Math.round(Math.random() * 1000000),
    }))
    this.onSend(messagesToUpload)
  }

  renderCustomActions = props =>
    Platform.OS === 'web' ? null : (
      <CustomActions {...props} onSend={this.onSendFromUser} />
    )

  render() {
    const { mainTheme, theme, t } = this.props
    console.log('t(tabs:feed)', t('tabs:feed'));

    return (
      <Layout
        style={styles.container}
        accessible
        accessibilityLabel='main'
        testID='main'
      >
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          isLoadingEarlier={this.state.isLoadingEarlier}
          user={user}
          scrollToBottom
          keyboardShouldPersistTaps='never'
          renderInputToolbar={props => (
            <InputToolbar {...props}
              containerStyle={{ backgroundColor: 'transparent' }}
              primaryStyle={{ backgroundColor: 'transparent' }}
            />
          )}
          renderComposer={props => (
            <Composer {...props}
              textInputStyle={{
                color: mainTheme === 'light' ? theme['color-basic-800'] : theme['color-basic-100']
              }}
            />
          )}
          renderActions={this.renderCustomActions}
          renderCustomView={this.renderCustomView}
          inverted={Platform.OS !== 'web'}
          timeTextStyle={{ left: { color: 'red' }, right: { color: 'yellow' } }}
        />
      </Layout>
    )
  }
}

const ChatScreenwithTranslation = withTranslation()(ChatScreen)
export default withStyles(ChatScreenwithTranslation);