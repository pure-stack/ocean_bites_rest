import {PropsWithChildren, useState} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {ThemedView} from '@/components/ThemedView'
import {IconSymbol} from '@/components/ui/IconSymbol'
import {Colors} from '@/constants/Colors'
import Text from '@/components/ui/Text'

export function Collapsible({children, title, moneySpend, total, isLast = false}: PropsWithChildren & {
    title: string, moneySpend: string, total: string, isLast?: boolean
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <View style={{...styles.container, paddingBottom: isLast ? 10 : 0}}>
          <TouchableOpacity
            style={styles.heading}
            onPress={() => setIsOpen((value) => !value)}
            activeOpacity={0.8}>
              <Text text={title} styles={{
                  width: '55%',
                  maxWidth: '55%',
                  minWidth: '55%'
              }}/>
              <View style={styles.money}>
                  <View style={styles.moneyContainer}>
                      <Text text={moneySpend} textColor={Colors.light.green} styles={{
                          width: 'auto'
                      }}/>
                      <Text text={`/ ${total}`} styles={{
                          width: 'auto'
                      }}/>
                  </View>
                  <IconSymbol
                    name="chevron.right"
                    size={18}
                    weight="medium"
                    color={Colors.light.icon}
                    style={{
                        width: '10%',
                        minWidth: '10%',
                        transform: [{rotate: isOpen ? '270deg' : '90deg'}]
                    }}
                  />
              </View>

          </TouchableOpacity>
          {isOpen && <View style={styles.content}>{children}</View>}
          {!isLast && <View style={styles.divider}/>}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 10
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4
    },
    content: {
        marginTop: 12
    },
    moneyContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 4
    },
    money: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        width: '45%',
        minWidth: '45%',
        maxWidth: '45%'
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#2F96F066',
        marginTop: 10
    }
})
