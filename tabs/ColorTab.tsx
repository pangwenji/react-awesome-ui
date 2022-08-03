import {Color} from 'welab-rn-ui'
import * as React from 'react'
import {ScrollView, Text} from 'react-native'

const ColorItem: React.FC<{name: string}> = ({name}) => {
  type RGB = {r: number; g: number; b: number}
  type Brightness = 'light' | 'dark'

  function rgb(hex: string): RGB {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result?.length == 4
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : {r: 255, g: 255, b: 255}
  }

  function brightness(rgb: RGB): Brightness {
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186
      ? 'dark'
      : 'light'
  }

  const color = Color[name]

  return (
    <Text
      selectable
      style={{
        height: 30,
        color: brightness(rgb(color)) == 'dark' ? 'black' : 'white',
        backgroundColor: color,
        textAlign: 'center',
        textAlignVertical: 'center',
      }}>
      {name} {color}
    </Text>
  )
}

export default function ColorTab(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {Object.keys(Color).map((color, index) => (
        <ColorItem key={index} name={color} />
      ))}
    </ScrollView>
  )
}
