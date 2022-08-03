import * as React from 'react'
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg'

function SvgMyAccount(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <G clipPath="url(#my_account_svg__clip0)">
        <Path
          d="M22.042 22.303a.75.75 0 01-.75.75h-8.139a.75.75 0 110-1.5h8.139a.75.75 0 01.75.75zm0-3.229a.75.75 0 01-.749.751l-8.139.01h-.001a.75.75 0 01-.001-1.5l8.139-.01h.001a.75.75 0 01.75.75v-.001zm-5.731-7.698H5.542c-.337.005-2.042.133-2.042 2.195v9.037a.75.75 0 01-1.5 0v-9.037c0-2.923 2.317-3.695 3.542-3.695h10.769c2.8 0 3.541 2.417 3.541 3.695v1.533l1.439-.002h.001a.75.75 0 01.001 1.5l-8.139.01h-.001a.75.75 0 01-.001-1.5l5.2-.006v-1.535c-.004-.364-.121-2.195-2.041-2.195zM8.182 2.4c.601-.6 1.39-.9 2.179-.9a3.08 3.08 0 110 6.16 3.088 3.088 0 01-2.849-1.9 3.063 3.063 0 01-.233-1.18c0-.824.321-1.598.903-2.18zm2.179 6.76a4.566 4.566 0 003.24-1.34 4.553 4.553 0 001.342-3.24 4.545 4.545 0 00-1.342-3.24 4.586 4.586 0 00-7.476 1.485 4.546 4.546 0 00-.346 1.755c0 1.223.476 2.374 1.342 3.24a4.568 4.568 0 003.24 1.34z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="my_account_svg__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgMyAccount