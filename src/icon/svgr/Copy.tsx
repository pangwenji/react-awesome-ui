import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCopy(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M18.696 11.188h2.341l-2.34-2.49v2.49h-.001zm-8.25-3.632L10.414 22l11.03.032.028-9.344h-3.526a.75.75 0 01-.75-.75V7.565l-6.75-.009zm10.997 15.976H10.446A1.534 1.534 0 018.914 22V7.588c0-.844.688-1.532 1.532-1.532h3.137V2L2.554 1.968l-.032 14.444 4.721.032a.75.75 0 110 1.5H2.554a1.533 1.533 0 01-1.532-1.532V2c0-.844.687-1.532 1.532-1.532h10.997c.845 0 1.532.688 1.532 1.532v4.056h2.525c.42 0 .827.175 1.115.482l3.837 4.08c.268.287.416.66.416 1.05V22c0 .845-.688 1.532-1.533 1.532z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCopy
