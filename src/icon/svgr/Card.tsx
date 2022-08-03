import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgCard(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#card_svg__clip0)">
        <Path
          d="M21.214 2a2.794 2.794 0 012.79 2.79v14.399a2.793 2.793 0 01-2.79 2.79h-1.143a.75.75 0 110-1.5h1.143c.711 0 1.29-.579 1.29-1.29v-7.984H1.5v7.984c0 .667.509 1.217 1.158 1.283l.132.007h13.39a.75.75 0 110 1.5H2.79A2.792 2.792 0 010 19.189V4.79A2.793 2.793 0 012.79 2h18.424zM18.5 14a2.5 2.5 0 11-1.5 4.5 2.5 2.5 0 110-4 2.48 2.48 0 011.5-.5zm-9.99 2.705a.75.75 0 110 1.5H3.601a.75.75 0 110-1.5H8.51zm9.99-1.745c-.316 0-.61.095-.854.258.225.376.354.814.354 1.282 0 .468-.129.906-.353 1.28a1.54 1.54 0 10.853-2.82zm4.004-7.45H1.5v2.195h21.004V7.51zm-1.29-4.01H2.79c-.711 0-1.29.579-1.29 1.29v1.226h21.004V4.79c0-.711-.579-1.29-1.29-1.29z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="card_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgCard
