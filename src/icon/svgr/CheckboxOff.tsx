import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCheckboxOff(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11z"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgCheckboxOff
