import React from 'react'
import {Text as RNText, TextProps as RNTextProps} from 'react-native'
import {DEFAULT_LOCALE} from '@welab/welab-ts-common'

import {Color} from '../../color'

import {FontFamilyVariant, FONT_FAMILY, TextType, TextTypes} from './type'

export type TextProps = {
  type?: TextType
  color?: Color
} & RNTextProps

export const Text: React.FC<TextProps> = ({
  type,
  color = Color.DarkGrey,
  style,
  children,
  testID = 'text',
  ...reset
}) => {
  const _type = type ?? TextTypes.Body1
  return (
    <RNText
      testID={testID}
      style={[
        {
          fontFamily: `${FONT_FAMILY}-${FontFamilyVariant(_type.fontWeight)}`,
          fontSize: _type.fontSize[DEFAULT_LOCALE],
          fontWeight: _type.fontWeight,
          lineHeight: _type.lineHeight,
          color: color,
        },
        style,
      ]}
      {...reset}>
      {children}
    </RNText>
  )
}
