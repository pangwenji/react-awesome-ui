import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgMinusCircle(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M17.004 12a.75.75 0 00-.75-.75H7.69a.75.75 0 100 1.5h8.564a.75.75 0 00.75-.75zm-5.016 11.757a11.79 11.79 0 01-8.339-3.442c-4.59-4.59-4.59-12.058 0-16.648 4.59-4.589 12.057-4.589 16.647 0 4.59 4.59 4.59 12.058 0 16.648a.75.75 0 11-1.06-1.061c4.004-4.004 4.004-10.521 0-14.526C15.23.723 8.713.723 4.708 4.728.704 8.733.704 15.25 4.71 19.254a10.299 10.299 0 0011.63 2.035.75.75 0 01.638 1.357 11.724 11.724 0 01-4.989 1.111"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgMinusCircle
