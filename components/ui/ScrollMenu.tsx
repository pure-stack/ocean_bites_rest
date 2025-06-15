import React from 'react'
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'

interface IScrollMenuProps {
    menuItems: {
        id: string;
        title: string;
    }[]
    label?: string;
    active: string;
    handleChange: (id: string) => void;
}

const ScrollMenu = (props: IScrollMenuProps) => {
    const {menuItems, label, handleChange, active} = props

    return (
      <View style={styles.container}>
          {label && <Text text={label} styles={{
              paddingHorizontal: 16
          }}/>}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollContainer}
          >
              {menuItems.map((item, index) => (
                <TouchableOpacity key={index} style={{
                    ...styles.menuItem,
                    borderWidth: active === item.id ? 1 : 0,
                    borderColor: active ? Colors.light.white : ''
                }} activeOpacity={0.8}
                                  onPress={() => handleChange(item.id)}>
                    <Text text={item.title} styles={[styles.menuText, active === item.id && styles.whiteColor]}/>
                </TouchableOpacity>
              ))}
          </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    scrollContainer: {
        paddingHorizontal: 16
    },
    menuItem: {
        padding: 10,
        marginRight: 10,
        backgroundColor: Colors.light.blueDark,
        borderRadius: 10
    },
    menuText: {
        fontSize: 16,
        color: Colors.light.text
    },
    whiteColor: {
        color: Colors.light.white
    }
})

export default ScrollMenu
