import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgLimit(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#limit_svg__clip0)">
        <Path
          d="M19.976 5.904L5.904 19.976c-.045.044-.07.098-.1.15-.458-.327-.894-.69-1.301-1.097a10.34 10.34 0 01-1.037-1.232c.053-.032.11-.058.155-.102L17.694 3.622c.046-.046.072-.103.104-.155.428.312.845.65 1.232 1.036.409.409.765.85 1.09 1.304-.049.031-.102.054-.143.096l-.001.001zM4.504 4.503c3.25-3.25 8.152-3.862 12.026-1.837L2.665 16.529C.641 12.655 1.254 7.753 4.503 4.503h.001zm15.586-1.06c-4.59-4.59-12.057-4.59-16.648 0-4.59 4.59-4.59 12.057 0 16.648a11.793 11.793 0 008.34 3.441c1.693 0 3.396-.363 4.988-1.11a.75.75 0 10-.636-1.358 10.298 10.298 0 01-9.041-.157L20.909 7.091c1.969 3.86 1.346 8.713-1.88 11.938a.75.75 0 001.06 1.061c4.59-4.59 4.59-12.057 0-16.648"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="limit_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgLimit