import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgFnb(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#fnb_svg__clip0)">
        <Path
          d="M22.012 8.61c-.49-3.435-3.389-6.01-6.787-6.01H8.689c-3.4 0-6.296 2.575-6.787 6.01h20.11zM.943 10.232A.948.948 0 010 9.283C0 4.56 3.731 1 8.68 1h6.545c4.913 0 8.649 3.525 8.69 8.2.008.202-.013.564-.244.805-.145.153-.348.23-.6.23L.943 10.233v-.001zM2 14.59c-.556 0-1.008-.378-1.008-.845 0-.467.452-.846 1.008-.846h13.584c.556 0 1.007.379 1.007.846 0 .467-.45.845-1.007.845H1.999 2zm17.684 0a.846.846 0 010-1.691h2.479a.847.847 0 110 1.691h-2.48.001zm-17.47 4.326c.38 1.635 1.505 2.607 3.028 2.607h13.9c1.526 0 2.653-.972 3.034-2.607H2.212h.002zm2.814 4.102C2.114 23.017 0 21.077 0 18.4c0-.523.423-.947.943-.947h22.113c.52 0 .944.424.944.947-.046 2.676-2.18 4.616-5.073 4.616h-13.9l.001.002z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="fnb_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgFnb
