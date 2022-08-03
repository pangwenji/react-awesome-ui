import {Formatter} from '@welab/welab-ts-common'
import * as React from 'react'
import {ScrollView, Text, View} from 'react-native'

const Item: React.FC<{
  functionName: string
  input: string
  output: string
}> = ({functionName, input, output}) => {
  return (
    <View style={{paddingVertical: 8}}>
      <Text style={{lineHeight: 20, fontFamily: 'monospace'}}>
        {`ƒ\t\t\t\t\t${functionName}\n`}
        {`in\t\t\t\t${input}\n`}
        {`out\t\t\t${output}`}
      </Text>
    </View>
  )
}

export default function FormatterTab(): JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
      }}>
      <Item
        functionName="capNumber"
        input="123"
        output={Formatter.capNumber(123, 100)}
      />
      <Item
        functionName="formatAccountNumber"
        input="1234567890"
        output={Formatter.formatAccountNumber('1234567890')}
      />
      <Item
        functionName="formatCurrency"
        input="123"
        output={Formatter.formatCurrency('123')}
      />
      <Item
        functionName="formatDate"
        input="2021-01-01"
        output={Formatter.formatDate('2021-01-01')}
      />
      <Item
        functionName="formatDaysLeft"
        input="2021-01-01, 2021-01-10, day"
        output={Formatter.formatDaysLeft('2021-01-01', '2021-01-10', 'day')}
      />
      <Item
        functionName="formatEmail"
        input="HIM.CHAN@WELAB.CO"
        output={Formatter.formatEmail('HIM.CHAN@WELAB.CO')}
      />
      <Item
        functionName="formatFirstName"
        input="chun him"
        output={Formatter.formatFirstName('chun him')}
      />
      <Item
        functionName="formatHkPhoneNumber"
        input="67896789"
        output={Formatter.formatHkPhoneNumber('67896789')}
      />
      <Item
        functionName="formatInterestRate"
        input="10"
        output={Formatter.formatInterestRate('10')}
      />
      <Item
        functionName="formatLastName"
        input="chan"
        output={Formatter.formatLastName('chan')}
      />
      <Item
        functionName="formatNumber"
        input="12345"
        output={Formatter.formatNumber(12345)}
      />
      <Item
        functionName="formatNumericDate"
        input="2021-01-01"
        output={Formatter.formatNumericDate('2021-01-01')}
      />
      <Item
        functionName="formatPrefixCurrency"
        input="12345"
        output={Formatter.formatPrefixCurrency('$', 12345)}
      />
      <Item
        functionName="formatUsername"
        input="123"
        output={Formatter.formatUsername('him.chan')}
      />
      <Item
        functionName="pluralize"
        input="day, 123"
        output={Formatter.pluralize('day', 123)}
      />
      <Item
        functionName="shortenNumber"
        input="12345"
        output={Formatter.shortenNumber(12345)}
      />
    </ScrollView>
  )
}
