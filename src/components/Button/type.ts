import type {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native'
import type {IconName} from 'src/icon'

import {Color} from '../../color'
import {TextType, TextTypes} from '../Text/type'
import {Spacing} from '../../spacing'
import type {StatedAttribute} from '../state'

export type ButtonIcon = StatedAttribute<IconName>

export type ButtonPressEvent = StatedAttribute<
  (ev: GestureResponderEvent) => void
>

export type ButtonSize = {
  height?: number
  paddingHorizontal?: number
  textType?: TextType
  iconSize?: number
  iconPadding?: number
}
export type ButtonSizeKey = 'Normal' | 'Small'
export const ButtonSizes: {[key in ButtonSizeKey]: ButtonSize} = {
  Normal: {
    height: 46,
    paddingHorizontal: Spacing.s,
    textType: TextTypes.Subheader2,
    iconSize: 24,
    iconPadding: Spacing.xs,
  },
  Small: {
    height: 29,
    paddingHorizontal: Spacing.xs,
    textType: TextTypes.Body2,
    iconSize: 16,
    iconPadding: Spacing.xxs,
  },
}

export type ButtonTheme = {
  textColor?: StatedAttribute<Color>
  buttonStyle?: StatedAttribute<StyleProp<ViewStyle>>
}
export type ButtonThemeKey = 'Primary' | 'Secondary' | 'Tertiary' | 'TopNav'
export const ButtonThemes: {[key in ButtonThemeKey]: ButtonTheme} = {
  Primary: {
    textColor: Color.White,
    buttonStyle: {
      enabled: {
        backgroundColor: Color.DarkPurple,
        borderRadius: 4,
        shadowColor: Color.Alabaster,
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 8,
        shadowOpacity: 0.5,
        elevation: 4,
      },
      disabled: {
        backgroundColor: Color.Mischka,
        borderRadius: 4,
      },
    },
  },
  Secondary: {
    textColor: {
      enabled: Color.DarkGrey,
      disabled: Color.Alto,
    },
    buttonStyle: {
      enabled: {
        borderColor: Color.DarkGrey,
        borderRadius: 4,
        borderStyle: 'solid',
        borderWidth: 1,
      },
      disabled: {
        borderColor: Color.Alto,
        borderRadius: 4,
        borderWidth: 1,
      },
    },
  },
  Tertiary: {
    textColor: {
      enabled: Color.LightPurple,
      disabled: Color.Alto,
    },
  },
  TopNav: {
    textColor: {
      enabled: Color.DarkGrey,
      disabled: Color.Alto,
    },
  },
}
