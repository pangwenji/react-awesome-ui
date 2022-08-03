import React from 'react'
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native'

import type {IconName} from '../../icon'
import type {Spacing} from '../../spacing'
import {Icon} from '../Icon'
import {resolveAttribute} from '../state'

import {
  IconButtonColor,
  IconButtonColors,
  IconButtonPressEvent,
  IconButtonSize,
  IconButtonSizes,
} from './type'

export type IconButtonProps = {
  icon: IconName
  disabled?: boolean
  color?: IconButtonColor
  size?: IconButtonSize
  padding?: Spacing
  onPress?: IconButtonPressEvent
  style?: StyleProp<ViewStyle>
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  disabled,
  color,
  size,
  padding,
  onPress,
  style,
}) => {
  const _size = size ?? IconButtonSizes.Normal
  const _color = resolveAttribute(color ?? IconButtonColors.Default, disabled)
  const _onPress = resolveAttribute(onPress, disabled)
  const _padding = padding ?? _size.padding ?? 0

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={_onPress}
      style={[
        {
          padding: _padding,
        },
        styles.icon,
        style,
      ]}>
      <Icon name={icon} color={_color} size={_size.size} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
