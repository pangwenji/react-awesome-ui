import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCheck(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M18.554 6.359a.353.353 0 01.261-.098c.109 0 .207.033.293.098l.913.946c.087.065.13.152.13.261a.402.402 0 01-.13.293l-9.783 9.783a.353.353 0 01-.261.098.474.474 0 01-.293-.098l-4.337-4.37a.309.309 0 01-.13-.261c0-.109.043-.207.13-.293l.913-.913a.405.405 0 01.293-.13.31.31 0 01.261.13l3.163 3.163 8.576-8.609h.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCheck
