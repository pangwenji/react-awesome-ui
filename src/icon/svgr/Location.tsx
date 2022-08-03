import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgLocation(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M14.375 9.156A2.377 2.377 0 0112 11.53a2.377 2.377 0 01-2.374-2.374A2.377 2.377 0 0112 6.782a2.377 2.377 0 012.374 2.374h.001zm1.499 0A3.879 3.879 0 0012 5.282a3.879 3.879 0 00-3.874 3.874A3.88 3.88 0 0012 13.03a3.88 3.88 0 003.874-3.874zM12 23.884c-.53 0-1.03-.234-1.37-.643-2.36-2.846-7.86-9.897-7.86-13.895C2.77 4.256 6.91.115 12 .115c5.09 0 9.232 4.14 9.232 9.23 0 1.663-.928 3.997-2.76 6.939a.751.751 0 01-1.274-.793c2.095-3.363 2.534-5.198 2.534-6.145 0-4.263-3.468-7.731-7.731-7.731S4.27 5.083 4.27 9.345c0 3.609 5.753 10.815 7.516 12.937.147.177.284.177.429 0a75 75 0 002.875-3.687.75.75 0 011.212.884 77.036 77.036 0 01-2.932 3.762c-.34.409-.84.643-1.37.643z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgLocation
