import {Spacing} from '@welab/welab-rn-ui'
import * as React from 'react'
import {ScrollView, Text, View} from 'react-native'

const Item: React.FC<{name: string}> = ({name}) => {
  return (
    <View style={{paddingVertical: 8}}>
      <Text style={{textAlign: 'center'}}>{name}</Text>
      <View style={{height: Spacing[name], backgroundColor: 'black'}} />
      <Text style={{textAlign: 'center'}}>{Spacing[name]}</Text>
    </View>
  )
}

export default function SpacingTab(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
      <Item name="xxxs" />
      <Item name="xxs" />
      <Item name="xs" />
      <Item name="s" />
      <Item name="m" />
      <Item name="l" />
      <Item name="xl" />
      <Item name="xxl" />
    </ScrollView>
  )
}
