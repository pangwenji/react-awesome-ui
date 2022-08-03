import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowLeftCircle(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM13.033 6.154l-.106.086-5.495 5.22a.743.743 0 00-.083.986l.083.093 5.495 5.222a.877.877 0 001.206 0 .856.856 0 00.088-1.146l-.088-.097-4.602-4.373a.198.198 0 01-.04-.236l.04-.053 4.602-4.373a.856.856 0 000-1.243.877.877 0 00-1.1-.086z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowLeftCircle
