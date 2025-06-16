import {CameraView, useCameraPermissions} from 'expo-camera'
import {Button, StyleSheet,  TouchableOpacity, View} from 'react-native'
import Text from '@/components/ui/Text'

interface ICameraViewProps {
    handleGoBack: () => void;
}

const CameraViewComponent = (props: ICameraViewProps) => {
    const {handleGoBack} = props
    const [permission, requestPermission] = useCameraPermissions()

    if (!permission) {
        // Camera permissions are still loading.
        return <View/>
    }

    // if (!permission.granted) {
    //     return (
    //       <View style={styles.container}>
    //           <Text style={styles.message} />
    //           <Button onPress={requestPermission} title="grant permission"/>
    //       </View>
    //     )
    // }

    return (
      <View style={styles.container}>
          <CameraView style={styles.camera} facing={'back'}>
              <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={handleGoBack}>
                    <Text text={'button.backToApp'} styles={styles.text} />
                  </TouchableOpacity>
              </View>
          </CameraView>
      </View>
    )
}

export default CameraViewComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10
    },
    camera: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})
