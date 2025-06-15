import PageWithHeader from '@/components/PageWithHeader'
import Text from '@/components/ui/Text'

interface IIdeasProps {

}

const Reservation = (props: IIdeasProps) => {
    const {} = props

    // const [assets, error] = useAssets(require('../../assets/pdf/ideas.pdf'))

    return (
      <PageWithHeader title={'navbar.ideas'} disablePagePadding>
          <Text text={'bla lbla'}/>
          {/*<WebView uri={assets?.[0].uri ?? ''}/>*/}
      </PageWithHeader>
    )
}

export default Reservation
