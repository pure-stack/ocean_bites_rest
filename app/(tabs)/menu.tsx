import PageWithHeader from '@/components/PageWithHeader'
import WebView from '@/components/WebView'
import {useAssets} from 'expo-asset'

export default function TabTwoScreen() {
    const [assets, error] = useAssets(require('../../assets/pdf/menu.pdf'))

    return (
      <PageWithHeader title={'navbar.menu'} disablePagePadding>
          <WebView uri={assets?.[0].uri ?? ''}/>
      </PageWithHeader>
    )
}
