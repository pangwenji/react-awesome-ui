import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgTransfer(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M7.198 21.88a.75.75 0 01-.543-.232L.257 14.93a.75.75 0 010-1.034L6.655 7.18A.747.747 0 017.471 7c.284.11.473.382.477.687l.053 3.57h8.862a.75.75 0 01.75.76l-.036 2.38 4.585-4.812-4.613-4.842v2.434a.75.75 0 01-.75.75H10.4a.75.75 0 110-1.5h5.65v-3.56a.75.75 0 011.292-.516l6.398 6.717a.75.75 0 010 1.034l-6.398 6.717a.75.75 0 01-1.293-.53l.053-3.532h-8.84a.75.75 0 01-.75-.74l-.037-2.473-4.639 4.87 4.612 4.842v-2.434a.75.75 0 01.75-.75h6.4a.75.75 0 110 1.5h-5.65v3.559a.75.75 0 01-.75.75"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgTransfer
