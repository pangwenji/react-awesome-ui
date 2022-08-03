import type {GestureResponderEvent} from 'react-native'

import {Color} from '../../color'
import type {StatedAttribute} from '../state'

export type IconButtonColor = StatedAttribute<Color>
export type IconButtonColorKey = 'Default'
export const IconButtonColors: {[key in IconButtonColorKey]: IconButtonColor} =
  {
    Default: {
      enabled: Color.DarkGrey,
      disabled: Color.Alto,
    },
  }

export type IconButtonPressEvent = StatedAttribute<
  (ev: GestureResponderEvent) => void
>

export type IconButtonSize = {
  size: number
  padding: number
}
export type IconButtonSizeKey = 'Normal' | 'Small'
export const IconButtonSizes: {[key in IconButtonSizeKey]: IconButtonSize} = {
  Normal: {
    size: 24,
    padding: 0,
  },
  Small: {
    size: 16,
    padding: 0,
  },
}
