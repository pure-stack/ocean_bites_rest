import PageWithHeader from '@/components/PageWithHeader'
import WebView from '@/components/WebView'
import {useAssets} from 'expo-asset'
import Text from '@/components/ui/Text'

export default function TabTwoScreen() {
    const [assets, error] = useAssets(require('../../assets/pdf/menu.pdf'))
    const uri = assets?.[0]?.uri ?? ''
    return (
      <PageWithHeader title={'navbar.menu'} disablePagePadding>
          {uri && !error && <WebView uri={uri}/>}
          {error && <Text text={'Menu is empty'}/>}
      </PageWithHeader>
    )
}
