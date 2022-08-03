import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgTransferFx(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M21.84 16.725c0 .2-.1.4-.2.5l-6.7 6.4c-.3.3-.7.3-1 0l-6.7-6.4c-.2-.2-.3-.5-.2-.8 0-.2.3-.4.6-.4l3.6-.1v-8.8c0-.2.1-.4.2-.5.1-.1.3-.2.5-.2h2.4l-4.8-4.6-4.9 4.6h2.4c.4 0 .8.3.8.8v6.4c0 .4-.3.7-.8.7s-.7-.3-.7-.8v-5.6h-3.6c-.3 0-.6-.2-.7-.5-.1-.3 0-.6.2-.8l6.7-6.4c.3-.3.7-.3 1 0l6.7 6.4c.2.2.3.5.2.8-.1.3-.4.5-.7.5l-3.5-.1v8.8c0 .4-.3.7-.7.8h-2.5l4.9 4.6 4.8-4.6h-2.4c-.4 0-.8-.3-.8-.8v-6.4c0-.4.3-.8.8-.8.4 0 .8.3.8.8v5.8h3.5c.3 0 .6.2.7.5 0 .1.1.2.1.2z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgTransferFx
