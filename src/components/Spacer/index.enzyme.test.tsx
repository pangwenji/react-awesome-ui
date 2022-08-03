import {mount} from 'enzyme'
import React from 'react'
import 'jest-enzyme'

import {Spacer} from '.'

describe('Spacer', () => {
  it('Spacer component', () => {
    const wrapper = mount(<Spacer />)
    expect(wrapper).toExist()
  })
})
