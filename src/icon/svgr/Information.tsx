import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgInformation(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM12.483 8.613A1.222 1.222 0 0112 8.7c-.353 0-.65-.12-.89-.36a1.21 1.21 0 01-.36-.89c0-.373.116-.674.346-.904.23-.231.531-.346.904-.346s.674.116.904.346c.231.23.346.531.346.904a1.224 1.224 0 01-.767 1.163zm.619 8.985c0 .127-.063.19-.19.19h-1.868c-.127 0-.191-.063-.191-.191v-6.795c0-.127.064-.19.191-.19h1.868c.127 0 .19.063.19.191v6.795z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgInformation
