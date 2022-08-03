import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgPlay(props: SvgProps) {
  return (
    <Svg width={21} height={24} fill="none" {...props}>
      <Path
        d="M18 12L3 21V3l15 9z"
        fill={props.color}
        stroke={props.color}
        strokeWidth={4.5}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgPlay
