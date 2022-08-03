import {Text, TextTypes} from 'welab-rn-ui'
import * as React from 'react'
import {ScrollView} from 'react-native'

export default function TextTab(): JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      {Object.keys(TextTypes).map((key, index) => (
        <Text key={index} type={TextTypes[key]}>
          {key}
        </Text>
      ))}
    </ScrollView>
  )
}
