import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgWithdraw(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#withdraw_svg__clip0)">
        <Path
          d="M12.034 13.358c-.636 0-1.154-.437-1.154-.974 0-.536.518-.973 1.154-.973.637 0 1.154.437 1.154.973a.795.795 0 001.59 0c0-1.155-.823-2.133-1.949-2.453v-.118a.795.795 0 00-1.589 0v.118c-1.127.32-1.949 1.298-1.949 2.453 0 1.414 1.23 2.564 2.743 2.564.637 0 1.154.437 1.154.973 0 .538-.517.975-1.154.975-.636 0-1.154-.437-1.154-.975a.795.795 0 00-1.589 0c0 1.156.822 2.135 1.949 2.454v.051a.795.795 0 001.589 0v-.05c1.126-.32 1.949-1.299 1.949-2.455 0-1.413-1.231-2.563-2.744-2.563zm5.455 8.54H6.515a.25.25 0 01-.25-.25V6.341h11.474v15.305c0 .137-.113.25-.25.25v.002zM21.214.603h-1.143a.75.75 0 100 1.5h1.143c.711 0 1.29.578 1.29 1.29v4.398c0 .712-.579 1.29-1.29 1.29h-1.975V6.342h.689a.75.75 0 100-1.5H4.076a.75.75 0 000 1.5h.689v2.74H2.79a1.29 1.29 0 01-1.29-1.29v-4.4c0-.712.578-1.29 1.29-1.29h13.455a.75.75 0 100-1.5H2.79A2.792 2.792 0 000 3.393v4.398a2.792 2.792 0 002.79 2.79h1.975v11.066c0 .964.785 1.75 1.75 1.75h10.974c.964 0 1.75-.786 1.75-1.75V10.581h1.975a2.793 2.793 0 002.79-2.79V3.393a2.793 2.793 0 00-2.79-2.79z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="withdraw_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgWithdraw
