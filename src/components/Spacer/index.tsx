import React from 'react'
import {View, ViewProps} from 'react-native'

import type {Spacing} from '../../spacing'

export type SpacerProps = {
  x?: Spacing
  y?: Spacing
} & ViewProps

export const Spacer: React.FC<SpacerProps> = ({x, y, style, ...restProps}) => {
  return (
    <View
      style={[
        {
          width: x,
          height: y,
        },
        style,
      ]}
      {...restProps}
    />
  )
}
