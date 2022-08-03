import {mount} from 'enzyme'
import React from 'react'
import 'jest-enzyme'

import {Icon} from '.'

describe('Icon', () => {
  it('Icon component', () => {
    const wrapper = mount(<Icon name="bank" />)
    expect(wrapper).toMatchSnapshot()
  })
})
