import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgLock(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#lock_svg__clip0)">
        <Path
          d="M12 13.441a.75.75 0 110 1.5.75.75 0 010-1.499v-.001zm0 5.085a.75.75 0 00.75-.75v-1.473a2.248 2.248 0 001.5-2.112 2.252 2.252 0 00-2.25-2.25 2.252 2.252 0 00-2.25 2.25c0 .977.629 1.801 1.5 2.112v1.473c0 .416.336.75.75.75zM8.202 5.305a3.8 3.8 0 013.795-3.795 3.8 3.8 0 013.795 3.795v1.679h-7.59v-1.68.001zM19.2 6.984h-1.908v-1.68A5.301 5.301 0 0011.997.01a5.3 5.3 0 00-5.295 5.295v1.68H4.8a2.753 2.753 0 00-2.75 2.75v11.52a2.754 2.754 0 002.75 2.75h9.39a.75.75 0 100-1.5H4.8c-.69 0-1.25-.56-1.25-1.25V9.733c0-.69.56-1.25 1.25-1.25h14.4c.69 0 1.25.56 1.25 1.25v11.52c0 .69-.56 1.25-1.25 1.25h-1.183a.75.75 0 100 1.5H19.2a2.754 2.754 0 002.75-2.75V9.733a2.753 2.753 0 00-2.75-2.75v.001z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="lock_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgLock
