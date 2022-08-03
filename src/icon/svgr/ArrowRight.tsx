import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowRight(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M8.24 18.77a1 1 0 01-.08-1.32l.083-.095 5.382-5.36-5.36-5.38a1 1 0 01-.08-1.32l.082-.096a1 1 0 011.32-.08l.095.083 6.065 6.09a1 1 0 01.08 1.32l-.083.094-6.089 6.066a1 1 0 01-1.415-.003z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowRight
