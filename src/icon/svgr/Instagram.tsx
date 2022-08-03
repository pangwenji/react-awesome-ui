import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgInstagram(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20 5.5a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0120 5.5zm-8 11A4.505 4.505 0 017.5 12c0-2.481 2.019-4.5 4.5-4.5 2.48 0 4.5 2.019 4.5 4.5s-2.02 4.5-4.5 4.5zM12 6a6 6 0 100 12 6 6 0 000-12zm9.5 12c0 1.93-1.57 3.5-3.5 3.5H6c-1.931 0-3.5-1.57-3.5-3.5V6c0-1.93 1.569-3.5 3.5-3.5h12c1.93 0 3.5 1.57 3.5 3.5v12zM18 1H6a5 5 0 00-5 5v12a5 5 0 005 5h12a5 5 0 005-5V6a5 5 0 00-5-5z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgInstagram
