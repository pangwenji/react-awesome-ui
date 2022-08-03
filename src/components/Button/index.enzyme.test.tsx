import {mount} from 'enzyme'
import React from 'react'
import 'jest-enzyme'

import {Button} from '.'

describe('Button', () => {
  it('Button component', () => {
    const wrapper = mount(<Button />)
    expect(wrapper).toExist()
  })
})
