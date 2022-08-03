import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgRocket(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M9.811 5.788c3.19-3.694 8.172-5.443 13.007-4.565a.752.752 0 01.605.604c.546 3.013.11 6.042-1.26 8.76a.75.75 0 11-1.34-.677 12.304 12.304 0 001.207-7.294c-4.149-.569-8.354.992-11.083 4.152-1.109 1.288-4.357 6.487-4.588 6.944a.273.273 0 00.055.313l3.703 3.701c.213.212.376.375.495.513l.008-.008c.084.085.21.104.315.054a32.591 32.591 0 006.867-4.52c.544-.47 1.048-.984 1.506-1.537a.751.751 0 011.157.956 14.393 14.393 0 01-1.686 1.718c-.1.086-.207.163-.309.248l.12.345a4.176 4.176 0 01-.862 4.163l-3.284 3.612a1.416 1.416 0 01-1.546.38 1.419 1.419 0 01-.93-1.294l-.09-2.873c-.095.048-.187.103-.283.15a1.779 1.779 0 01-2.036-.34l-.03-.035-.374-.372-.098-.098-3.704-3.702a1.776 1.776 0 01-.23-2.23L2.38 12.77a1.417 1.417 0 01-1.293-.93 1.42 1.42 0 01.381-1.547L5.08 7.01a4.173 4.173 0 014.163-.859l.221.075c.127-.167.247-.32.347-.437v-.001zM7.076 20.842a.75.75 0 111.061 1.06l-1.382 1.382a.746.746 0 01-1.223-.243.75.75 0 01.163-.817l1.381-1.382zm-1.455-2.88a.75.75 0 111.06 1.06l-3.016 3.016a.743.743 0 01-.53.22.749.749 0 01-.53-1.28l3.016-3.016zm11.586-1.795a34.267 34.267 0 01-3.852 2.532l.107 3.423 3.157-3.474a2.663 2.663 0 00.588-2.48v-.001zm-14.466.34a.751.751 0 011.06 1.06L2.42 18.95a.75.75 0 11-1.06-1.06l1.381-1.383zm5.792-8.983a2.658 2.658 0 00-2.443.595l-3.474 3.158 3.404.106c.813-1.302 1.65-2.589 2.513-3.859zm5.72-1.286c1.155-1.154 3.053-1.127 4.153-.028.576.577.878 1.31.878 2.09 0 .78-.302 1.513-.851 2.062a2.916 2.916 0 01-2.09.88c-.778 0-1.51-.3-2.057-.848l-.023-.023a2.9 2.9 0 01-.861-2.07c0-.782.302-1.514.85-2.063h.001zm2.09.62c-.38 0-.735.147-1.001.412-.581.58-.581 1.48-.028 2.032l.028.027c.53.532 1.472.532 2.003 0 .58-.58.58-1.479.027-2.03a1.431 1.431 0 00-1.03-.44l.001-.001z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgRocket