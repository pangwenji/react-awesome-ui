import {mount} from 'enzyme'
import React from 'react'
import 'jest-enzyme'

import {Spacing} from '../../spacing'

import {Padding} from '.'

describe('Padding', () => {
  it('Padding.All component', () => {
    const wrapper = mount(<Padding.All size={Spacing.m} />)
    expect(wrapper).toExist()
  })
  it('Padding.Only component', () => {
    const wrapper = mount(<Padding.Only />)
    expect(wrapper).toExist()
  })
  it('Padding.Symmetric component', () => {
    const wrapper = mount(<Padding.Symmetric />)
    expect(wrapper).toExist()
  })
})
