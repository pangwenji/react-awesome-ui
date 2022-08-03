import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgSecurity(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11.398 14.643a.75.75 0 00.534-.224l3.729-3.786a.75.75 0 00-1.07-1.052l-3.194 3.244-1.521-1.539a.75.75 0 00-1.067 1.054l2.055 2.08a.75.75 0 00.534.223zM12 23.868a.752.752 0 01-.384-.105L7.823 21.51a10.464 10.464 0 01-5.095-8.954V3.601a.75.75 0 01.974-.715l.153.048A6.836 6.836 0 0011.395.44c.282-.386.929-.386 1.21 0a6.83 6.83 0 007.543 2.494l.15-.047a.751.751 0 01.975.715v8.954c0 .353-.018.703-.053 1.05a.75.75 0 11-1.492-.151 8.96 8.96 0 00.045-.899v-7.98A8.334 8.334 0 0112 2.061a8.339 8.339 0 01-7.773 2.514v7.98A8.953 8.953 0 008.59 20.22L12 22.246l3.41-2.027a8.883 8.883 0 003.479-3.794.75.75 0 111.352.652 10.39 10.39 0 01-4.064 4.432l-3.793 2.254a.751.751 0 01-.383.105H12z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgSecurity
