import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowDown(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M5.215 8.246a1 1 0 011.32-.083l.094.083L12 13.617l5.37-5.37a1 1 0 011.32-.084l.095.083a1 1 0 01.083 1.32l-.083.095-6.078 6.077a1 1 0 01-1.32.083l-.094-.083-6.078-6.077a1 1 0 010-1.415z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowDown
