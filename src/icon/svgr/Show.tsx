import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgShow(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11.935 5c5.025 0 9.253 3.702 11.325 5.908.813.867.81 2.225-.005 3.093a24.396 24.396 0 01-2.106 1.99.75.75 0 01-.963-1.149 23.369 23.369 0 001.976-1.869.76.76 0 00.004-1.039C20.631 10.3 16.562 6.5 11.935 6.5c-4.63 0-8.698 3.801-10.232 5.436a.762.762 0 000 1.031c1.534 1.635 5.602 5.437 10.232 5.437 1.708 0 3.502-.515 5.332-1.53a.75.75 0 11.729 1.31c-2.056 1.142-4.095 1.72-6.061 1.72-5.028 0-9.255-3.702-11.326-5.909a2.26 2.26 0 010-3.086C2.68 8.702 6.907 5 11.935 5zm0 2.817a4.64 4.64 0 014.635 4.635 4.64 4.64 0 01-4.635 4.635A4.64 4.64 0 017.3 12.452a4.64 4.64 0 014.635-4.635zm0 1.5A3.138 3.138 0 008.8 12.452a3.139 3.139 0 003.135 3.135 3.14 3.14 0 003.135-3.135 3.138 3.138 0 00-3.135-3.135z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgShow