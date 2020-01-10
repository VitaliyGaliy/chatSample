import ImagePicker from 'react-native-image-picker';
import { Alert, } from 'react-native';
import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default async function getPermissionAsync(permission) {

    try {
        const status = request(
            Platform.select({
                android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            }),
        );

        console.log('status', status);


        if (status !== 'granted') {
            const permissionName = permission.toLowerCase().replace('_', ' ')
            Alert.alert(
                'Cannot be done 😞',
                `If you would like to use this feature, you'll need to enable the ${permissionName} permission in your phone settings.`,
                [
                    {
                        text: "Let's go!",
                        onPress: () => Linking.openURL('app-settings:'),
                    },
                    { text: 'Nevermind', onPress: () => { }, style: 'cancel' },
                ],
                { cancelable: true },
            )
            return false
        }
        return true
    } catch (err) {
        console.warn(err);
    }
}

export async function getLocationAsync(onSend) {
    console.log('PERMISSIONS', PERMISSIONS);
    try {
        const status = await request(
            Platform.select({
                android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            }))
        if (status) {
            await Geolocation.getCurrentPosition(location => {
                if (location) {
                    onSend([{ location: location.coords }])
                }
            });
        }
        return
    } catch (error) {
        console.log('error', error);
    }
}

export async function pickImageAsync(onSend) {
    try {
        const status = await request(
            Platform.select({
                android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
            }))
        if (status) {
            ImagePicker.showImagePicker(options, (response) => {

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.uri };

                    onSend([{ image: source.uri }])
                    return source.uri

                }
            });
        }
    } catch (error) {

    }
}