import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowUp(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11.293 8.293a1 1 0 011.32-.083l.094.083 6.157 6.158a1 1 0 01-1.32 1.497l-.094-.083L12 10.414l-5.45 5.45a1 1 0 01-1.32.084l-.094-.083a1 1 0 01-.084-1.32l.084-.095 6.157-6.157z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowUp
