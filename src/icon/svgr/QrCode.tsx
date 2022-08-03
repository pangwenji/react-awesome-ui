import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgQrCode(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M17.438 6.318a.25.25 0 01.25.25v2.685a.25.25 0 01-.25.25h-2.685a.251.251 0 01-.25-.25V6.568a.25.25 0 01.25-.25h2.685zm1.75 2.935V6.568c0-.965-.785-1.75-1.75-1.75h-2.685c-.964 0-1.75.785-1.75 1.75v2.685c0 .964.786 1.75 1.75 1.75h2.684c.965 0 1.75-.786 1.75-1.75h.001zm-9.94 5.244a.25.25 0 01.25.25v2.684a.25.25 0 01-.25.25H6.563a.25.25 0 01-.25-.25v-2.684a.25.25 0 01.25-.25h2.685zm1.75 2.934v-2.684c0-.965-.787-1.75-1.75-1.75H6.563c-.965 0-1.75.785-1.75 1.75v2.684c0 .965.785 1.75 1.75 1.75h2.685c.963 0 1.75-.785 1.75-1.75zM9.248 6.318a.25.25 0 01.25.25v2.685c0 .137-.114.25-.25.25H6.563a.25.25 0 01-.25-.25V6.568a.25.25 0 01.25-.25h2.685zm1.75 2.935V6.568c0-.965-.787-1.75-1.75-1.75H6.563c-.965 0-1.75.785-1.75 1.75v2.685c0 .964.785 1.75 1.75 1.75h2.685c.963 0 1.75-.786 1.75-1.75zm11.972 10.86V17.44a.75.75 0 10-1.5 0v2.673a1.29 1.29 0 01-1.29 1.29h-2.74a.75.75 0 100 1.5h2.74a2.791 2.791 0 002.79-2.79zm0-13.554V3.885a2.793 2.793 0 00-2.79-2.79h-2.74a.75.75 0 100 1.5h2.74c.712 0 1.29.579 1.29 1.29v2.674a.75.75 0 101.5 0zM7.31 22.153a.75.75 0 00-.75-.75H3.82a1.29 1.29 0 01-1.29-1.29V17.44a.75.75 0 10-1.5 0v2.673a2.792 2.792 0 002.79 2.79h2.74a.75.75 0 00.75-.75zM1.78 7.309a.75.75 0 01-.75-.75V3.885a2.793 2.793 0 012.79-2.79h2.74a.75.75 0 010 1.5H3.82c-.712 0-1.29.579-1.29 1.29v2.674a.75.75 0 01-.75.75z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgQrCode
