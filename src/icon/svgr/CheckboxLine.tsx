import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCheckboxLine(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M22 10a2 2 0 01.233 3.987L22 14H2a2 2 0 01-.233-3.987L2 10h20z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCheckboxLine
