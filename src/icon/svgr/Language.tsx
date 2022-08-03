import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgLanguage(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M17.326 14.02a9.025 9.025 0 01-1.003-1.67h2.005a9.023 9.023 0 01-1.002 1.67zm2.713-3.17h-1.963v-.697a.75.75 0 10-1.5 0v.697H14.61a.75.75 0 100 1.5h.093c.191.552.644 1.61 1.614 2.83-.41.41-.888.83-1.449 1.24a.75.75 0 10.888 1.21c.555-.406 1.08-.853 1.569-1.337.45.445.965.896 1.569 1.338a.75.75 0 00.887-1.21c-.515-.376-1-.79-1.45-1.241.97-1.22 1.424-2.278 1.614-2.83h.093a.75.75 0 100-1.5h.001zm1.845 9.944c0 .712-.579 1.29-1.29 1.29h-9.178c-.091 0-.175-.03-.26-.049l2.447-3.265c.037-.047.052-.104.075-.157.014-.032.036-.061.045-.096a.723.723 0 00.022-.303v-.002l-1.84-12.585h8.69c.71 0 1.29.579 1.29 1.29v13.878l-.001-.001zm-10.38-1.724l-1.372 1.831-.205-1.83h1.577v-.001zm-9.387-2.79V3.206c0-.71.578-1.29 1.29-1.29h5.325c.636 0 1.184.474 1.277 1.103l2.127 14.553h-8.73c-.712 0-1.29-.58-1.29-1.29l.001-.002zM20.595 4.127h-8.908l-.194-1.325A2.806 2.806 0 008.732.415H3.407a2.792 2.792 0 00-2.79 2.79V16.28a2.793 2.793 0 002.79 2.79h5.01l.228 2.035a2.787 2.787 0 002.771 2.48h9.178a2.795 2.795 0 002.79-2.79V6.915a2.794 2.794 0 00-2.79-2.79l.001.002zm-14.88 6.168l.535-2.778c.045-.226.43-.226.473 0l.538 2.778H5.715zm.772-4.473c-.833 0-1.551.594-1.708 1.41l-1.145 5.927a.75.75 0 00.594.879.756.756 0 00.878-.596l.319-1.647H7.55l.317 1.647a.751.751 0 001.474-.284L8.195 7.232a1.742 1.742 0 00-1.708-1.41z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgLanguage
