import React from 'react'
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native'

import {Text} from '../Text'
import {Icon} from '../Icon'
import {resolveAttribute} from '../state'

import {
  ButtonIcon,
  ButtonPressEvent,
  ButtonSize,
  ButtonSizes,
  ButtonTheme,
  ButtonThemes,
} from './type'

export type ButtonProps = {
  text?: string
  icon?: ButtonIcon
  disabled?: boolean
  theme?: ButtonTheme
  size?: ButtonSize
  onPress?: ButtonPressEvent
  style?: StyleProp<ViewStyle>
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  disabled,
  theme,
  size,
  onPress,
  style,
  children,
}) => {
  const buttonTheme = theme ?? ButtonThemes.Primary
  const buttonStyle = resolveAttribute(buttonTheme.buttonStyle, disabled)
  const textColor = resolveAttribute(buttonTheme.textColor, disabled)

  const buttonDefaultSize = ButtonSizes.Normal
  const buttonSize = size ?? buttonDefaultSize
  const buttonHeight = buttonSize.height ?? buttonDefaultSize.height
  const buttonPaddingHorizontal =
    buttonSize.paddingHorizontal ?? buttonDefaultSize.paddingHorizontal
  const buttonTextType = buttonSize.textType ?? buttonDefaultSize.textType
  const buttonIconSize = buttonSize.iconSize ?? buttonDefaultSize.iconSize
  const buttonIconPadding =
    buttonSize.iconPadding ?? buttonDefaultSize.iconPadding

  const _icon = resolveAttribute(icon, disabled)

  const _onPress = resolveAttribute(onPress, disabled)

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      onPress={_onPress}
      style={[
        {
          height: buttonHeight,
          paddingHorizontal: buttonPaddingHorizontal,
        },
        styles.button,
        buttonStyle,
        style,
      ]}>
      {_icon && (
        <Icon
          name={_icon}
          color={textColor}
          size={buttonIconSize}
          style={{marginEnd: buttonIconPadding}}
        />
      )}
      {text ? (
        <Text
          type={buttonTextType}
          numberOfLines={1}
          ellipsizeMode="clip"
          style={{color: textColor}}>
          {text}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
