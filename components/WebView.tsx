import {Colors} from '@/constants/Colors'
import {getRandomId} from '@/utils/getRandomId'
import React from 'react'
import {StyleSheet} from 'react-native'
import {WebView as RNWebView} from 'react-native-webview'

interface IWebViewProps {
    uri: string
}

const WebView = (props: IWebViewProps) => {
    const {uri} = props
    // const [isLoading, setIsLoading] = useState(true)
    //
    // const isFocused = useIsFocused()
    //
    // useEffect(() => {
    //     if (isFocused) {
    //         setIsLoading(true)
    //     }
    // }, [isFocused])
    //
    // useEffect(() => {
    //     if (uri) {
    //         setIsLoading(true)
    //     }
    // }, [uri])
    //
    // const handleLoad = () => {
    //     setIsLoading(false)
    // }
    //
    // const handleError = () => {
    //     setIsLoading(false)
    // }
    //
    // const showLoader = !uri || isLoading

    return (
      // <View style={styles.container}>
      //     {showLoader && (
      //     	<View style={styles.loadingContainer}>
      //     		<ActivityIndicator size='large' color={Colors.light.primary} />
      //     	</View>
      //     )}
      <RNWebView
        key={getRandomId()}
        style={styles.container}
        source={{uri}}
        allowUniversalAccessFromFileURLs={true}
        onMessage={() => {
        }}
        bounces={false}
      />
      // </View>
    )
}

WebView.displayName = 'WebView'

export default WebView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    webview: {
        flex: 1,
        backgroundColor: Colors.light.background
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.background,
        zIndex: 1
    }
})
