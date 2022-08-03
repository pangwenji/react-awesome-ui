import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgWelabLogo(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.41 5C0 5 0 5.41 0 5.41v3.963c0 .41.41.41.41.41h3.963c.41 0 .41-.41.41-.41V5.41c0-.41-.41-.41-.41-.41H.41zm9.53.01s-.41 0-.7.288L.29 14.232s-.29.29-.29.698v3.965s0 .409.41.409h3.963s.41 0 .699-.29l8.952-8.932s.289-.289.289-.698V5.419s0-.41-.41-.41H9.94v.001z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.485 5.01s-.409 0-.698.288L9.82 14.241s-.29.289-.29.698v3.964s0 .41.41.41h3.964s.409 0 .699-.29l8.966-8.942s.29-.289.29-.698V5.419s0-.41-.41-.41h-3.964v.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgWelabLogo
