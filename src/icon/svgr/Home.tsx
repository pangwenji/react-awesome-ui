import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgHome(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M15.72 23.785a1.39 1.39 0 01-1.388-1.387v-7.862H9.666v7.862c0 .765-.622 1.387-1.386 1.387H2.772a1.388 1.388 0 01-1.387-1.387V9.436c0-.42.186-.812.512-1.077L11.123.862a1.388 1.388 0 011.752 0l9.228 7.497c.326.265.512.658.512 1.077v5.78a.75.75 0 11-1.5 0v-5.78L12 2.084l-9.159 7.44.042 12.761h5.282v-7.86a1.39 1.39 0 011.389-1.389h4.89c.765 0 1.387.622 1.387 1.388v7.861h5.284v-3.012a.75.75 0 111.5 0v3.125a1.39 1.39 0 01-1.389 1.387H15.72z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgHome
