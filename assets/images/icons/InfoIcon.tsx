import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const InfoIcon = (props: SvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
      <G fill="#0C9630" clipPath="url(#a)">
          <Path d="M12 0C5.368 0 0 5.367 0 12c0 6.632 5.367 12 12 12 6.632 0 12-5.367 12-12 0-6.632-5.367-12-12-12Zm0 22.326C6.306 22.326 1.674 17.694 1.674 12 1.674 6.306 6.306 1.674 12 1.674c5.694 0 10.326 4.632 10.326 10.326 0 5.694-4.633 10.326-10.326 10.326Z" />
          <Path d="M12 10.003c-.71 0-1.216.3-1.216.742v6.019c0 .379.505.758 1.216.758.68 0 1.232-.38 1.232-.758v-6.019c0-.442-.552-.742-1.232-.742Zm0-3.712c-.726 0-1.295.521-1.295 1.121S11.274 8.55 12 8.55c.711 0 1.28-.537 1.28-1.138 0-.6-.569-1.121-1.28-1.121Z" />
      </G>
      <Defs>
          <ClipPath id="a">
              <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
      </Defs>
  </Svg>
)
export default InfoIcon
