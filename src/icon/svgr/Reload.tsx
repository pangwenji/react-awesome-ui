import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgReload(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.026 1a.798.798 0 00-.798.798v2.84l-.641-.604c-.401-.38-.832-.732-1.277-1.044A10.954 10.954 0 0011.998 1c-1.617 0-3.18.347-4.647 1.03a11.03 11.03 0 00-6.31 9.01 11.026 11.026 0 004.65 9.969A10.856 10.856 0 0011.976 23c.645 0 1.295-.057 1.934-.17A10.983 10.983 0 0023 12a.797.797 0 10-1.595.002 9.377 9.377 0 01-5.065 8.335 9.435 9.435 0 01-4.342 1.063 9.369 9.369 0 01-5.392-1.697 9.342 9.342 0 01-3.863-6.07 9.338 9.338 0 011.553-7.026A9.423 9.423 0 0112.013 2.6c1.933 0 3.795.587 5.38 1.696a9.425 9.425 0 011.739 1.57l.541.627h-4.142a.8.8 0 000 1.596h5.495c.44 0 .797-.358.797-.798V1.798A.798.798 0 0021.026 1z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgReload