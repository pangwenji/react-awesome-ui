import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgArrowRightCircle(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.867 6.24a.877.877 0 011.1-.086l.106.086 5.495 5.22c.278.266.306.69.083.986l-.083.093-5.495 5.222a.877.877 0 01-1.206 0 .856.856 0 01-.088-1.146l.088-.097 4.602-4.373a.198.198 0 00.04-.236l-.04-.053-4.602-4.373a.856.856 0 010-1.243z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgArrowRightCircle
