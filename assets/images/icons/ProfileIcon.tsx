import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
  <Svg
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
      <Path
        fill={props.color}
        d="M16.125 0c-8.836 0-16 7.163-16 16 0 8.836 7.164 15.999 16 15.999 8.837 0 16-7.163 16-16 0-8.836-7.163-15.999-16-15.999Zm0 4.784a5.292 5.292 0 1 1 0 10.585 5.292 5.292 0 0 1 0-10.585Zm-.003 23.032a11.742 11.742 0 0 1-7.647-2.82 2.255 2.255 0 0 1-.791-1.714c0-2.964 2.398-5.336 5.363-5.336h6.158a5.33 5.33 0 0 1 5.354 5.336 2.25 2.25 0 0 1-.79 1.713 11.738 11.738 0 0 1-7.647 2.82Z"
      />
  </Svg>
)
export default ProfileIcon
