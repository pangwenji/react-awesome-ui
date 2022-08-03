import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgEmail(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#email_svg__clip0)">
        <Path
          d="M14.411 10.932a7.176 7.176 0 01-4.817 0L1.5 8.04V4.8c0-.711.579-1.29 1.29-1.29h18.424c.712 0 1.29.579 1.29 1.29v3.24l-8.093 2.89v.002zm6.803-8.921H2.79A2.794 2.794 0 000 4.8v14.4a2.794 2.794 0 002.79 2.79h13.391a.75.75 0 100-1.5H2.79c-.711 0-1.29-.58-1.29-1.29V9.635l7.589 2.709a8.684 8.684 0 005.827.001l7.588-2.71V19.2c0 .71-.578 1.29-1.29 1.29h-1.143a.75.75 0 100 1.5h1.143a2.793 2.793 0 002.79-2.79V4.8a2.793 2.793 0 00-2.79-2.79v.001z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="email_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgEmail
