import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowLeft(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M16.207 2.793a1 1 0 01.083 1.32l-.083.094L8.415 12l7.792 7.793a1 1 0 01-1.32 1.497l-.094-.083-8.5-8.5a1 1 0 010-1.414l8.5-8.5a1 1 0 011.414 0z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowLeft
