import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgClock(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M16.952 12.134a.75.75 0 00-.75-.75H12.66V5.551a.75.75 0 10-1.5 0v6.583c0 .414.336.75.75.75h4.292a.75.75 0 00.75-.75zm-4.937 11.623a11.793 11.793 0 01-8.34-3.443c-4.59-4.59-4.59-12.058 0-16.648s12.058-4.59 16.648 0 4.59 12.058 0 16.648a.75.75 0 11-1.06-1.06c4.004-4.006 4.004-10.522 0-14.527C15.258.722 8.74.722 4.736 4.727.73 8.732.73 15.248 4.736 19.253a10.296 10.296 0 0011.63 2.034.75.75 0 01.638 1.358 11.73 11.73 0 01-4.99 1.112"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgClock
