import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCurrencyEur(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M7.806 15a.585.585 0 100-1.17H5v-1.373h2.309a.584.584 0 100-1.168H5V9.915h2.806a.584.584 0 100-1.169h-3.39a.584.584 0 00-.584.585v5.084c0 .323.261.585.584.585h3.39zm3.944.119c1.475 0 2.721-1.137 2.721-2.484V9.353a.585.585 0 00-1.169 0v3.282c0 .721-.765 1.315-1.552 1.315-.823 0-1.544-.614-1.544-1.315V9.353a.585.585 0 10-1.17 0v3.282c0 1.347 1.243 2.484 2.714 2.484zm8.152-.12a.585.585 0 00.462-.942l-1.058-1.367a2.072 2.072 0 00-.891-3.943h-2.447a.584.584 0 00-.585.584v5.084a.585.585 0 001.169 0v-1.527h1.43l1.457 1.885a.584.584 0 00.463.227v-.001zm-1.487-3.28h-1.863V9.915h1.863a.903.903 0 010 1.804zm-6.4 12.038c-3.064 0-6.087-1.19-8.338-3.442-4.59-4.59-4.59-12.057 0-16.648 4.59-4.59 12.056-4.59 16.647 0 4.59 4.59 4.59 12.057 0 16.648a.75.75 0 11-1.06-1.06c4.005-4.006 4.005-10.523 0-14.527C15.257.722 8.74.722 4.736 4.728.73 8.733.73 15.249 4.736 19.254a10.3 10.3 0 0011.63 2.034.75.75 0 01.637 1.358 11.723 11.723 0 01-4.989 1.111h.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCurrencyEur
