import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgClose(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M2.793 2.793a1 1 0 011.414 0L12 10.585l7.793-7.792a1 1 0 011.497 1.32l-.083.094L13.415 12l7.792 7.793.083.094a1 1 0 01-1.497 1.32L12 13.415l-7.793 7.792a1 1 0 01-1.497-1.32l.083-.094L10.585 12 2.793 4.207l-.083-.094a1 1 0 01.083-1.32z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgClose
