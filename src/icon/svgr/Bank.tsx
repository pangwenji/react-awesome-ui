import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgBank(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M8.227 1.643a8.701 8.701 0 016.566 0l7.761 3.19a.749.749 0 01.465.692V8.56a.75.75 0 01-.75.75h-1.161v9.457h1.161a.75.75 0 01.75.75v2.648a.75.75 0 01-.75.75h-1.973a.75.75 0 110-1.5h1.223v-1.148H1.5v1.148h15.01a.75.75 0 110 1.5H.75a.75.75 0 01-.75-.75v-2.648a.75.75 0 01.75-.75h1.162V9.31H.75A.75.75 0 010 8.56V5.525c0-.304.184-.578.465-.693l7.762-3.189zM4.912 9.31h-1.5v9.458h1.5V9.31zm14.696 0h-1.5v9.457h1.5V9.31zm-3 0H6.412v9.457h10.196V9.31zm-5.066.928c.33 0 .597.267.597.597v.09c.847.24 1.465.975 1.465 1.843a.598.598 0 01-1.195 0c0-.404-.389-.732-.867-.732s-.867.328-.867.732c0 .403.389.731.867.731 1.137 0 2.062.864 2.062 1.926 0 .868-.618 1.604-1.465 1.844v.038a.597.597 0 11-1.194 0v-.038c-.846-.24-1.464-.976-1.464-1.844a.597.597 0 111.194 0c0 .404.389.732.867.732s.867-.328.867-.732c0-.403-.389-.732-.867-.732-1.136 0-2.061-.863-2.061-1.925 0-.868.618-1.604 1.464-1.844v-.089c0-.33.267-.597.597-.597zm2.681-7.207a7.187 7.187 0 00-5.426 0L1.5 6.028V7.81h20.019V6.028l-1.713-.703-5.583-2.294zm-2.713.124c1.154 0 2.094.94 2.094 2.094s-.94 2.093-2.094 2.093A2.096 2.096 0 019.416 5.25c0-1.155.939-2.094 2.094-2.094v-.001zm0 1.5a.595.595 0 000 1.187.595.595 0 000-1.187z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgBank
