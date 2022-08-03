import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgOthers(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#others_svg__clip0)">
        <Path
          d="M8.873 8.837l1.976-4.313H3.637L1.65 8.837h7.224-.001zm13.48 0L20.4 4.575l-7.247-.047 1.973 4.309H22.353zM3.89 19.582c0 .056.021.096.03.105l7.357-.022V7.096l-1.135 2.476c-.223.486-.662.787-1.145.787H3.89v9.223zm-.044 1.605c-.772 0-1.4-.72-1.4-1.605V10.36h-1.41c-.362 0-.692-.203-.883-.545a1.281 1.281 0 01-.04-1.133l2.183-4.769C2.554 3.35 3.058 3 3.613 3h16.774c.553 0 1.058.35 1.317.911l2.184 4.771c.163.355.148.79-.041 1.132-.19.341-.52.545-.884.545h-1.409v4.53c0 .42-.323.76-.722.76-.399 0-.723-.34-.723-.76v-4.53h-5.107c-.483 0-.922-.301-1.144-.787l-1.135-2.476v12.568h7.388c-.013-.012-.002-.041-.002-.082v-1.165c0-.42.324-.761.723-.761.399 0 .722.34.722.761v1.165c0 .885-.628 1.605-1.4 1.605H3.846z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="others_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgOthers
