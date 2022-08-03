import {mount} from 'enzyme'
import React from 'react'
import 'jest-enzyme'

import {IconButton} from '.'

describe('IconButton', () => {
  it('IconButton component', () => {
    const wrapper = mount(<IconButton icon="bank" />)
    expect(wrapper).toExist()
  })
})
