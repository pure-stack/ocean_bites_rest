import {WebView as RNWebView} from 'react-native-webview'
import {StyleSheet} from 'react-native'
import {Colors} from '@/constants/Colors'
import {getRandomId} from '@/utils/getRandomId'

interface IWebViewProps {
    uri: string;
}

const WebView = (props: IWebViewProps) => {
    const {uri} = props

    return (
      <RNWebView
        key={getRandomId()}
        style={styles.container}
        source={{uri}}
        allowUniversalAccessFromFileURLs={true}
      />
    )
}

export default WebView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    }
})
