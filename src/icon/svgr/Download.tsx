import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgDownload(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M22.476 18.8a.75.75 0 01.75.75v3.538a.75.75 0 01-.75.75H1.523a.75.75 0 01-.75-.75V19.55a.75.75 0 011.5 0v2.79h19.453v-2.79a.75.75 0 01.75-.75zM14.74.16c.965.001 1.75.787 1.75 1.751v1.815a.75.75 0 01-1.5 0V1.911a.25.25 0 00-.25-.25H9.26a.251.251 0 00-.25.25v9.672a.75.75 0 01-.75.75H5.007L12 18.936l6.993-6.603h-3.254a.75.75 0 01-.75-.75v-4.19a.75.75 0 011.5 0v3.44h4.39a.75.75 0 01.516 1.295l-8.88 8.385a.745.745 0 01-1.03 0l-8.88-8.385a.749.749 0 01.516-1.295h4.39V1.911c0-.964.785-1.75 1.75-1.75h5.478z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgDownload
