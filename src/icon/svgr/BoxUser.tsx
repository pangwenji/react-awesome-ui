import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgBoxUser(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M16.768 18.514v-4.27c0-1.147-.73-2.855-2.745-2.855H9.977c-1.104 0-2.746.761-2.746 2.855v4.27a.75.75 0 101.5 0v-4.27c0-1.233.959-1.349 1.245-1.355h4.047c1.136 0 1.24 1.042 1.245 1.355v4.27a.75.75 0 101.5 0zm-3.774-11.85c.276.276.428.643.428 1.033 0 .39-.152.757-.428 1.033-.551.552-1.514.552-2.066 0a1.464 1.464 0 01.473-2.383c.177-.074.367-.111.559-.111.391 0 .758.152 1.034.428zm1.06 3.126c.56-.559.868-1.302.868-2.093a2.94 2.94 0 00-.867-2.094c-1.118-1.118-3.069-1.119-4.188 0a2.963 2.963 0 003.228 4.831 2.94 2.94 0 00.96-.644h-.001zm6.126 13.114h-1.143a.75.75 0 110-1.5h1.143c.712 0 1.29-.579 1.29-1.29V3.886c0-.71-.578-1.29-1.29-1.29H3.82c-.712 0-1.29.58-1.29 1.29v16.228c0 .711.579 1.29 1.29 1.29h11.39a.75.75 0 110 1.5H3.82a2.793 2.793 0 01-2.79-2.79V3.886a2.792 2.792 0 012.79-2.79h16.36a2.792 2.792 0 012.79 2.79v16.228a2.793 2.793 0 01-2.79 2.79z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgBoxUser