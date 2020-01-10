import Chat from './Chat';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { theme } from 'store/ducks/settings/selectors';

const mapStateToProps = createStructuredSelector({
    mainTheme: theme
});

export default connect(
    mapStateToProps,
)(Chat);