import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCardQuestion(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.386 19.81a.684.684 0 01-.68.685.684.684 0 01-.685-.68c0-.376.303-.682.68-.685.376 0 .683.304.685.68zm-.69-1.034a.75.75 0 01-.75-.746c-.002-.961.454-1.86 1.252-2.466a.854.854 0 00.312-.89.847.847 0 00-1.354-.45.847.847 0 00-.318.667.75.75 0 01-.748.752h-.002a.75.75 0 01-.75-.749 2.355 2.355 0 012.885-2.296c.863.193 1.55.877 1.749 1.737a2.337 2.337 0 01-.866 2.424c-.42.318-.66.78-.66 1.266a.748.748 0 01-.747.751h-.002zm-.011 4.88a6.96 6.96 0 01-4.913-2.032c-2.732-2.712-2.747-7.144-.032-9.875 2.712-2.732 7.142-2.747 9.874-.032 2.591 2.574 2.75 6.756.36 9.52a.746.746 0 01-1.056.076.748.748 0 01-.076-1.057 5.502 5.502 0 00-.286-7.476 5.49 5.49 0 00-7.752.026 5.441 5.441 0 00-1.582 3.882 5.447 5.447 0 001.606 3.873 5.47 5.47 0 005.988 1.165.749.749 0 01.58 1.382c-.879.37-1.8.549-2.711.549zM1.834 4.333V2.856c0-.558.453-1.012 1.011-1.012h16.8c.558 0 1.012.454 1.012 1.012v1.476H1.834zm17.81-3.99h-16.8a2.516 2.516 0 00-2.51 2.514v12.44a2.516 2.516 0 002.511 2.513h5.088a.75.75 0 10.001-1.5h-5.09a1.014 1.014 0 01-1.012-1.013V7.974h18.824v1.248a.75.75 0 001.5 0V2.855A2.515 2.515 0 0019.644.342z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCardQuestion
