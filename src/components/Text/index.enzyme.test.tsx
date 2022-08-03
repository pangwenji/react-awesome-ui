import React from 'react'
import {mount} from 'enzyme'
import 'jest-enzyme'
import {DEFAULT_LOCALE} from '@welab/welab-ts-common'

import {Color} from '../../color'

import {FONT_FAMILY, FontFamilyVariant, FontWeight, TextTypes} from './type'

import {Text} from '.'

describe('Text', () => {
  it('Text component content', () => {
    const wrapper = mount(<Text>text</Text>)
    expect(wrapper.text()).toBe('text')
  })
  it('Text component style variant', () => {
    const wrapper = mount(<Text type={TextTypes.Header1}>text</Text>)
    const RNText = wrapper
      .findWhere(node => node.prop('testID') === 'text')
      .first()
    expect(RNText).toExist()
    const [style] = RNText.prop('style')
    const defaultType = TextTypes.Header1
    expect(style.fontFamily).toBe(
      `${FONT_FAMILY}-${FontFamilyVariant(defaultType.fontWeight)}`,
    )
    expect(style.fontSize).toBe(defaultType.fontSize[DEFAULT_LOCALE])
    expect(style.fontWeight).toBe(defaultType.fontWeight)
    expect(style.lineHeight).toBe(defaultType.lineHeight)
    expect(style.color).toBe(Color.DarkGrey)
  })
  it('FontFamilyVariant', () => {
    expect(FontFamilyVariant(FontWeight.regular)).toBe('Regular')
    expect(FontFamilyVariant(FontWeight.medium)).toBe('Medium')
    expect(FontFamilyVariant(FontWeight.bold)).toBe('Bold')
    expect(FontFamilyVariant(undefined as any)).toBe('Regular')
  })
})
