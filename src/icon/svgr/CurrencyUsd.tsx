import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCurrencyUsd(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M6.111 15.119c1.475 0 2.72-1.137 2.72-2.484V9.353a.584.584 0 00-1.168 0v3.282c0 .721-.765 1.315-1.552 1.315-.823 0-1.545-.614-1.545-1.315V9.353a.584.584 0 00-1.168 0v3.282c0 1.347 1.242 2.484 2.713 2.484zm5.944.084c.904 0 1.434-.328 1.722-.608.35-.341.543-.804.543-1.303 0-.404-.138-.978-.792-1.418-.376-.253-.881-.44-1.59-.589h-.002c-1.147-.25-1.147-.675-1.107-.982.043-.337.333-.533 1.092-.493.03.004.06.006.092.006h.004c.306.025.695.159 1.157.398a.582.582 0 00.787-.25.584.584 0 00-.25-.788c-.62-.32-1.151-.493-1.624-.527h-.002c-.1-.007-.202-.01-.303-.011-1.255 0-2.119.6-2.15 1.895-.01.41.12.989.799 1.424.318.204.718.353 1.258.47h.001l.002.001h.003c1.456.305 1.456.711 1.456.864a.64.64 0 01-.19.466c-.186.181-.498.276-.906.276h-.034l-.038-.001c-.709-.02-1.211-.287-1.65-.574a.585.585 0 00-.64.977c.555.364 1.258.74 2.263.765h.004l.095.002zM17.961 15h.016c1.665-.02 2.915-1.357 2.915-3.127 0-1.769-1.25-3.106-2.913-3.127h-2.32a.584.584 0 00-.584.585v5.084c0 .323.262.585.585.585h2.301zm-.02-1.17h-1.697V9.915h1.697c1.033 0 1.782.824 1.782 1.958s-.75 1.958-1.782 1.958v-.001zm-5.926 9.927c-3.064 0-6.087-1.19-8.338-3.442-4.59-4.59-4.59-12.057 0-16.648 4.59-4.59 12.056-4.59 16.647 0 4.59 4.59 4.59 12.057 0 16.648a.75.75 0 11-1.06-1.06c4.005-4.006 4.005-10.523 0-14.527C15.257.722 8.74.722 4.736 4.728.73 8.733.73 15.249 4.736 19.254a10.3 10.3 0 0011.63 2.034.75.75 0 01.637 1.358 11.723 11.723 0 01-4.989 1.111h.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCurrencyUsd