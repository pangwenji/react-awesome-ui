import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgFundGreen(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 12c.834-6.666 4.166-10 10-10-.834 5-4.166 8.334-10 10z"
        fill="#6DD400"
      />
      <Path
        d="M2.66 2.531c4.564.369 8.217 4.018 8.592 8.596-4.565-.368-8.218-4.017-8.593-8.596zm18.712.002c-.369 4.565-4.018 8.218-8.597 8.592.37-4.565 4.018-8.218 8.597-8.592zm1.405 18.845c-2.956-2.187-6.395-3.397-9.987-3.552v-5.208c5.642-.4 10.113-5.107 10.112-10.867A.768.768 0 0022.133 1c-4.592 0-8.52 2.862-10.119 6.891C10.417 3.862 6.488 1 1.896 1l-.019.001a.768.768 0 00-.75.769c0 5.754 4.488 10.467 10.163 10.849v5.205c-3.589.145-7.028 1.344-9.985 3.517a.75.75 0 00.89 1.209c2.896-2.129 6.292-3.254 9.821-3.254 3.55 0 6.961 1.137 9.868 3.288a.75.75 0 00.893-1.206z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgFundGreen
