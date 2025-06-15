import {StyleSheet, View} from 'react-native'
import Text from '@/components/ui/Text'
import React from 'react'
import {Dropdown as RNDropdown} from 'react-native-element-dropdown'
import {Colors} from '@/constants/Colors'

interface IDropdownProps {
    value: any;
    options: any;
    placeholder: string;
    field: string;
    labelText: string;
    handleChange: (value: string, field: string) => void;
}

const Dropdown = (props: IDropdownProps) => {
    const {value, handleChange, options, placeholder, field, labelText} = props

    const renderItem = (item: any) => {
        return <View style={styles.item}>
            <Text text={item.label} styles={styles.textItem}/>
        </View>
    }

    return (
      <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          paddingHorizontal: 16
      }}>
          <Text text={labelText}/>
          <RNDropdown value={value}
                      labelField={'label'}
                      valueField={'label'}
                      placeholder={placeholder}
                      data={options}
                      onChange={(value) => {
                          handleChange(value.label, field)
                          handleChange(value.value, 'restaurantId')
                      }}
                      style={styles.dropdown}
                      placeholderStyle={styles.placeholder}
                      itemContainerStyle={styles.itemContainer}
                      containerStyle={styles.container}
                      selectedTextStyle={styles.selected}
                      renderItem={renderItem}
                      activeColor={Colors.light.background}
          />
      </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 44,
        borderRadius: 10,
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.text,
        paddingHorizontal: 12
    },
    container: {
        borderWidth: 0,
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.text,
        borderRadius: 10
    },
    placeholder: {
        color: Colors.light.text
    },
    itemContainer: {
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.text,
        borderRadius: 10
    },
    selected: {
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.white
    },
    item: {
        borderWidth: 0,
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.text
    },
    textItem: {
        backgroundColor: Colors.light.blueDark,
        color: Colors.light.text
    }
})

export default Dropdown
