import _ from 'lodash'
import React from 'react'
import type {StyleProp, ViewStyle} from 'react-native'

import {Color} from '../../color'
import type {IconName} from '../../icon'
import * as Icons from '../../icon/svgr'
import {Spacer} from '../Spacer'

export type IconProps = {
  name: IconName
  color?: Color
  size?: number
  style?: StyleProp<ViewStyle>
}

export const Icon: React.FC<IconProps> = ({name, color, size, style}) => {
  const _size = size ?? 24
  const _name = name
    ?.split('_')
    ?.map(i => _.capitalize(i))
    ?.join('')
  const Icon = _.get(Icons, _name)
  return Icon ? (
    <Icon
      width={_size}
      height={_size}
      viewBox="0 0 24 24"
      style={style}
      color={color ?? Color.DarkPurple}
    />
  ) : (
    <Spacer x={_size} y={_size} style={style} />
  )
}
