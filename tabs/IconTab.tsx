import {Icon, IconName, SvgrIconNames} from 'welab-rn-ui'
import * as React from 'react'
import {ScrollView, Text, View} from 'react-native'

const Item: React.FC<{name: IconName}> = ({name}) => {
  return (
    <View style={{padding: 8, alignItems: 'center'}}>
      <Icon name={name} />
      <Text>{name}</Text>
    </View>
  )
}

export default function IconTab(): JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {
        // @ts-ignore
        SvgrIconNames.map((name, index) => (
          <Item key={index} name={name} />
        ))
      }
    </ScrollView>
  )
}
