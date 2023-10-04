import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemSeprator = ({width,height}) => {
  return (
    <View style={{width,height}}>
      <Text>ItemSeprator</Text>
    </View>
  )
}


ItemSeprator.defaultProps = {
    width:0,
    height:0
}

export default ItemSeprator

const styles = StyleSheet.create({})