import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgStarted(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M16.624 12.109a2.606 2.606 0 00-5.209-.091 2.606 2.606 0 005.209.091zm-4.375-.076a1.774 1.774 0 011.801-1.74 1.774 1.774 0 011.74 1.801 1.774 1.774 0 01-1.801 1.74 1.775 1.775 0 01-1.74-1.801zm-3.746 6.96l.035-2.012c1.111.158 2.522.183 4.284.213 5.358.094 9.697-3.862 9.717-4.981.02-1.119-4.139-5.225-9.537-5.317-1.762-.031-3.173-.058-4.29.056l.037-2.145-3.541-.065-.018 1.043 2.501.044-.023 1.296c-1.736.431-2.483 1.541-2.609 4.263l-2.675-.047-.018 1.043 2.675.047c.032 2.703.742 3.839 2.458 4.339l-.023 1.308-2.501-.044-.018 1.043 3.541.059.004-.143h.001zm12.321-7.615c.365.384.553.662.636.814-.088.149-.287.422-.67.794a9.544 9.544 0 01-1.032.863l.081-.06a13.516 13.516 0 01.057-3.255c.41.328.717.622.928.844zm-1.761 2.94zm.413-.271c.092-.015.181-.028.265-.047-.083.019-.174.033-.265.047zm.164-.083c.058-.015.125-.016.181-.029-.056.012-.112.025-.181.029zM7.187 15.528c-.398-.218-.644-.514-.818-.994-.18-.495-.276-1.182-.288-2.088l2.533.044.018-1.043-2.533-.044c.044-.908.162-1.593.358-2.083.188-.471.436-.76.835-.962.992-.506 2.911-.471 5.566-.426l.124.002a10.61 10.61 0 013.268.592c.942.324 1.852.772 2.707 1.328.096.064.191.126.281.189l-.1-.068c-.12.686-.191 1.416-.203 2.171-.013.754.032 1.481.127 2.168a12.469 12.469 0 01-2.956 1.357 10.5 10.5 0 01-3.266.478c-2.703-.043-4.656-.077-5.653-.62v-.001zm12.725-4.949a.942.942 0 00-.18-.035c.056.015.123.02.18.035zm-.101-.111c-.083-.018-.169-.04-.261-.055.093.015.178.036.261.055zm-.154-.103l-.201-.014a.688.688 0 01.201.014zm-.119-.105z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgStarted
