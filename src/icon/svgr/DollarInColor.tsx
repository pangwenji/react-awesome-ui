import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgDollarInColor(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G
        clipPath="url(#dollar_in_color_svg__clip0)"
        fillRule="evenodd"
        clipRule="evenodd">
        <Path
          d="M11.96 11.393c-.72 0-1.308-.495-1.308-1.104 0-.608.587-1.103 1.308-1.103.721 0 1.308.495 1.308 1.103a.9.9 0 001.801 0c0-1.309-.932-2.417-2.209-2.779v-.135a.9.9 0 10-1.8 0v.135c-1.277.362-2.209 1.47-2.209 2.78 0 1.601 1.395 2.904 3.11 2.904.72 0 1.307.495 1.307 1.104 0 .608-.587 1.103-1.308 1.103-.72 0-1.308-.495-1.308-1.103a.9.9 0 00-1.8 0c0 1.31.931 2.418 2.207 2.78v.057a.9.9 0 001.801 0v-.057c1.277-.362 2.21-1.47 2.21-2.78 0-1.602-1.396-2.905-3.11-2.905z"
          fill={props.color}
        />
        <Path
          d="M15.623 1.269a.751.751 0 11-.457 1.428c-3.71-1.186-7.707-.23-10.433 2.495-4.004 4.004-4.004 10.52 0 14.526 4.005 4.005 10.522 4.005 14.527 0a10.363 10.363 0 002.93-8.504.75.75 0 011.399-.458c.048.086.08.18.091.278.056.462.083.925.083 1.387 0 3.106-1.237 6.152-3.443 8.357-4.59 4.59-12.057 4.59-16.647 0-4.59-4.59-4.59-12.057 0-16.647 3.123-3.124 7.703-4.221 11.95-2.862z"
          fill={props.color}
        />
        <Path
          d="M23.582 5.427l-3.256-2.28a1 1 0 00-1.574.82v4.558a1 1 0 001.574.82l3.256-2.28a1 1 0 000-1.638z"
          fill="#6DD400"
        />
      </G>
      <Defs>
        <ClipPath id="dollar_in_color_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgDollarInColor
