import React from 'react'
import {View, ViewProps} from 'react-native'

import type {Spacing} from '../../spacing'

export type PaddingAllProps = {size: Spacing}
export type PaddingOnlyProps = {
  left?: Spacing
  top?: Spacing
  right?: Spacing
  bottom?: Spacing
}
export type PaddingSymmetricProps = {horizontal?: Spacing; vertical?: Spacing}

const PaddingAll: React.FC<PaddingAllProps & ViewProps> = ({
  size,
  style,
  children,
  ...restProps
}) => {
  return (
    <View style={[{padding: size}, style]} {...restProps}>
      {children}
    </View>
  )
}

const PaddingOnly: React.FC<PaddingOnlyProps & ViewProps> = ({
  left,
  top,
  right,
  bottom,
  style,
  children,
  ...restProps
}) => {
  const _left = left ?? 0
  const _top = top ?? 0
  const _right = right ?? 0
  const _bottom = bottom ?? 0
  return (
    <View
      style={[
        {
          paddingStart: _left,
          paddingTop: _top,
          paddingEnd: _right,
          paddingBottom: _bottom,
        },
        style,
      ]}
      {...restProps}>
      {children}
    </View>
  )
}

const PaddingSymmetric: React.FC<PaddingSymmetricProps & ViewProps> = ({
  horizontal,
  vertical,
  style,
  children,
  ...restProps
}) => {
  const _horizontal = horizontal ?? 0
  const _vertical = vertical ?? 0
  return (
    <View
      style={[
        {
          paddingStart: _horizontal,
          paddingTop: _vertical,
          paddingEnd: _horizontal,
          paddingBottom: _vertical,
        },
        style,
      ]}
      {...restProps}>
      {children}
    </View>
  )
}

export const Padding = {
  All: PaddingAll,
  Only: PaddingOnly,
  Symmetric: PaddingSymmetric,
}
