import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCalendarClock(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M21.539 18.61a3.395 3.395 0 00-3.392-3.392 3.395 3.395 0 00-3.392 3.392 3.395 3.395 0 003.392 3.392 3.395 3.395 0 003.392-3.392zm1.5 0a4.897 4.897 0 01-4.892 4.892 4.897 4.897 0 01-4.892-4.892 4.897 4.897 0 014.892-4.892 4.897 4.897 0 014.892 4.892zM17.75 7.166a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-1.5-2.111V1.24a.75.75 0 111.5 0v3.814a2.246 2.246 0 011.5 2.112A2.252 2.252 0 0117 9.416a2.253 2.253 0 01-2.25-2.25c0-.976.63-1.801 1.5-2.111zm-8.496 2.11a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM6.25 5.056V1.24a.75.75 0 111.5 0v3.813a2.246 2.246 0 011.504 2.113 2.252 2.252 0 01-2.25 2.25 2.253 2.253 0 01-2.25-2.25c0-.975.627-1.8 1.496-2.11zm5.927 16.953H3.82c-.712 0-1.29-.58-1.29-1.29v-8.496h18.94v.66a.75.75 0 101.5 0V4.778a2.793 2.793 0 00-2.79-2.791h-.67a.75.75 0 100 1.5h.67c.712 0 1.29.579 1.29 1.29v5.947H2.53V4.777c0-.712.579-1.291 1.29-1.291h.68a.75.75 0 000-1.5h-.68a2.793 2.793 0 00-2.79 2.79V20.72a2.793 2.793 0 002.79 2.79h8.357a.75.75 0 100-1.5v-.001zM9.5 3.486h4.99a.75.75 0 000-1.5H9.5a.75.75 0 100 1.5zm10.66 15.178a.5.5 0 01-.5.5h-1.616a.5.5 0 01-.5-.5v-2.48a.5.5 0 011 0v1.98h1.117a.5.5 0 01.5.5"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCalendarClock
