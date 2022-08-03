import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgTransferRed(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.778 8.37a.65.65 0 01.2-.467L9.758 2.4a.644.644 0 01.889 0l5.777 5.503a.644.644 0 01-.435 1.112l-3.071.046v7.623a.646.646 0 01-.655.646l-2.046-.031 4.14 3.944 4.164-3.968h-2.093a.646.646 0 01-.646-.646v-5.504a.645.645 0 011.29 0v4.86h3.062a.646.646 0 01.445 1.112L14.8 22.6a.644.644 0 01-.89 0l-5.777-5.503a.644.644 0 01.455-1.113l3.039.046V8.426c0-.353.283-.64.635-.646l2.129-.031-4.19-3.99-4.165 3.966H8.13c.356 0 .645.29.645.646v5.504a.645.645 0 11-1.29 0v-4.86H4.423a.644.644 0 01-.645-.644"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.37 19.82l3.257 2.279a1 1 0 001.573-.82v-4.558a1 1 0 00-1.573-.82l-3.257 2.28a1 1 0 000 1.638v.001z"
        fill="#E02020"
      />
    </Svg>
  )
}

export default SvgTransferRed
