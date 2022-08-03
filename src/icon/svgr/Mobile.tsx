import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgMobile(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M6.616 2.588h10.769v-.103c0-.474-.47-.86-1.044-.86H7.66c-.576 0-1.044.386-1.044.86v.103zm0 17.923v.839c0 .473.468.859 1.044.859h8.68c.576 0 1.045-.386 1.045-.86v-.838H6.615h.001zm9.725 3.198H7.66c-1.403 0-2.544-1.06-2.544-2.36V2.486c0-1.301 1.14-2.36 2.544-2.36h8.68c1.403 0 2.545 1.059 2.545 2.36v10.9a.75.75 0 11-1.5 0V4.088H6.615V19.01h10.77V17.3a.75.75 0 111.5 0v4.049c0 1.3-1.142 2.359-2.544 2.359v.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgMobile
