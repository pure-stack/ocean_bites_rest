import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {StyleSheet, View} from 'react-native'
import {ReactNode} from 'react'
import Text from '@/components/ui/Text'
import TextButton from '@/components/ui/TextButton'

interface IPageWithHeaderProps {
    leftBtn?: ReactNode;
    leftBtnText?: string;
    rightBtnText?: string;
    title: string;
    rightBtn?: ReactNode;
    onPressLeftBtn?: () => void;
    onPressRightBtn?: () => void;
    disablePagePadding?: boolean;
    children: ReactNode;
}

const PageWithHeader = (props: IPageWithHeaderProps) => {
    const {
        leftBtn, leftBtnText, rightBtnText, title, rightBtn, onPressLeftBtn = () => {
        }, onPressRightBtn = () => {
        }, disablePagePadding = false, children
    } = props
    const insets = useSafeAreaInsets()

    return (
      <View style={{
          paddingHorizontal: disablePagePadding ? 0 : 16,
          height: '100%',
          paddingTop: insets.top,
          paddingBottom: disablePagePadding ? 0 : insets.bottom
      }}>

          <View style={{...styles.header, marginHorizontal: disablePagePadding ? 16 : 0}}>
              {leftBtnText && <View style={{...styles.buttonContainer, ...styles.leftButton}}>
                  <TextButton text={leftBtnText} onPress={onPressLeftBtn}/>
              </View>}
              <Text text={title} styles={styles.titleContainer}/>

              {rightBtnText && <View style={{...styles.buttonContainer, ...styles.rightButton}}>
                  <TextButton text={rightBtnText} onPress={onPressRightBtn}/>
              </View>}
          </View>

          {children}

      </View>
    )
}

export default PageWithHeader

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        position: 'absolute'
    },
    leftButton: {
        left: 0
    },
    rightButton: {
        right: 0
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
