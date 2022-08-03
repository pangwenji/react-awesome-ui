import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgProfile(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.606 1c1.32 0 2.387 1.094 2.394 2.443v14.208c0 1.35-1.075 2.443-2.394 2.443h-2.06c-.022.015-.037.03-.06.038l-9.463 3.484a2.354 2.354 0 01-.808.143 2.41 2.41 0 01-2.267-1.612L1.145 8.786a2.483 2.483 0 01.074-1.858 2.38 2.38 0 011.35-1.26l3.764-1.386a.7.7 0 01.912.427.722.722 0 01-.43.922L3.05 7.018a.955.955 0 00-.541.51c-.11.243-.12.52-.03.77l4.81 13.355c.185.517.741.794 1.245.607l5.884-2.166h-4.21c-1.318 0-2.393-1.094-2.393-2.443V3.443C7.815 2.094 8.89 1 10.21 1h10.396zm0 1.439H10.21c-.526 0-.964.45-.964 1.004v14.208c0 .555.43 1.004.964 1.004h10.397c.526 0 .964-.45.964-1.004V3.443c0-.555-.43-1.004-.964-1.004h-.001zM19.37 16.172c.335 0 .597.34.597.76 0 .418-.268.758-.597.758h-.324c-.33 0-.597-.34-.597-.759s.268-.759.597-.759h.324zm-2.396 0c.395 0 .717.34.717.76 0 .418-.322.758-.717.758H11.58c-.396 0-.717-.34-.717-.759s.321-.759.717-.759h5.394zm2.274-2.275c.404 0 .719.34.719.758 0 .419-.322.759-.719.759H11.58c-.396 0-.718-.34-.718-.759s.322-.758.718-.758h7.668zm-3.454-9.863c1.234 0 2.232.969 2.232 2.15 0 .47-.163.898-.429 1.254.96.57 1.61 1.58 1.61 2.741v1.517a.697.697 0 01-.708.683.697.697 0 01-.71-.683v-1.517c0-1.018-.864-1.851-1.921-1.851h-.14c-1.064 0-1.922.833-1.922 1.851v1.517a.697.697 0 01-.709.683.708.708 0 01-.717-.683v-1.517c0-1.168.65-2.179 1.611-2.741-.276-.36-.427-.8-.428-1.253 0-1.19 1.005-2.15 2.231-2.15v-.001zm0 1.368c-.443 0-.805.348-.805.776 0 .427.362.776.805.776.443 0 .806-.35.806-.776 0-.428-.363-.776-.806-.776z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgProfile
