import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCheckboxOn(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4.428 7.324a1 1 0 00-.622.396l-5.57 7.673-2.144-2.144-.094-.083a1 1 0 00-1.32 1.497l2.973 2.973.09.08a1 1 0 001.426-.2l6.258-8.621.067-.106a1 1 0 00-1.064-1.465z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCheckboxOn
