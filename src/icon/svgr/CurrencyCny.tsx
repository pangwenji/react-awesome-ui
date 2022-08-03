import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgCurrencyCny(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M6.241 15.112c.823 0 1.607-.31 2.207-.873a.585.585 0 00-.8-.852 2.06 2.06 0 01-3.463-1.5 2.059 2.059 0 013.482-1.482.583.583 0 10.81-.843 3.21 3.21 0 00-2.236-.9 3.229 3.229 0 00-3.225 3.225 3.23 3.23 0 003.225 3.225zm7.813-.167l.02.008.025.01.015.005a.598.598 0 00.034.01l.016.004.035.008.013.002c.015.003.03.005.046.006h.01l.018.001h.034c.01 0 .02 0 .03-.002l.016-.001a.511.511 0 00.035-.006h.003l.006-.001.02-.005.022-.006a.486.486 0 00.082-.031l.014-.006a.543.543 0 00.032-.017l.002-.002.01-.006a.584.584 0 00.062-.044l.015-.012.018-.016.014-.013a.535.535 0 00.024-.026l.016-.018c.004-.006.009-.01.013-.017l.013-.018a.492.492 0 00.024-.035l.01-.015a.614.614 0 00.024-.048l.003-.006.01-.024.006-.015a.492.492 0 00.009-.024l.004-.015a.6.6 0 00.008-.026l.002-.01a.561.561 0 00.01-.056l.001-.01a.413.413 0 00.003-.027v-.007l.001-.022v-.027l-.002-.028v-5.03a.585.585 0 00-1.169 0v3.492l-3.278-3.864a.584.584 0 00-1.035.403v5.054a.584.584 0 101.169 0V10.92l3.28 3.867-.006-.008.02.024c.002 0 .003.002.004.003l.019.02.002.002c.02.02.04.036.058.05l.006.005.02.014.001.001.02.014.017.01.014.008.013.007h.001l.005.003.005.003.008.003h.005-.002l-.003-.001zm4.324.055a.583.583 0 00.585-.585v-1.65l2.246-3.09a.584.584 0 10-.945-.688l-1.886 2.594-1.885-2.594a.585.585 0 00-.946.687l2.247 3.09v1.651c0 .323.262.585.584.585zm-6.362 8.757c-3.065 0-6.088-1.19-8.34-3.442-4.59-4.59-4.59-12.057 0-16.648 4.59-4.59 12.057-4.59 16.648 0 4.59 4.59 4.59 12.057 0 16.648a.75.75 0 01-1.06-1.06c4.005-4.006 4.005-10.523 0-14.527C15.257.722 8.74.722 4.736 4.728.73 8.733.73 15.249 4.736 19.254a10.3 10.3 0 0011.63 2.034.75.75 0 01.637 1.358 11.723 11.723 0 01-4.989 1.111h.002z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgCurrencyCny
