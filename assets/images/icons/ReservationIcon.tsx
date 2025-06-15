import * as React from 'react'
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg'

const ReservationIcon = (props: SvgProps) => (
  <Svg
    // @ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
      <G fill={props.color} clipPath="url(#a)">
          <Path
            d="M27.816 1.141h-2.707V.966a.966.966 0 0 0-1.933 0v.175h-5.583V.966a.967.967 0 0 0-1.933 0v.175h-5.584V.966a.966.966 0 0 0-1.933 0v.175H5.434a4.814 4.814 0 0 0-4.809 4.81v21.056a4.814 4.814 0 0 0 4.81 4.81h22.38a4.814 4.814 0 0 0 4.81-4.81V5.95a4.814 4.814 0 0 0-4.81-4.809ZM16.625 23.413c-3.785 0-6.866-3.079-6.866-6.864a6.873 6.873 0 0 1 6.866-6.864 6.873 6.873 0 0 1 6.866 6.864c0 3.785-3.081 6.864-6.866 6.864Z"/>
          <Path
            d="M16.625 11.617a4.938 4.938 0 0 0-4.932 4.932 4.937 4.937 0 0 0 4.932 4.932 4.938 4.938 0 0 0 4.932-4.932 4.937 4.937 0 0 0-4.932-4.932Zm2.613 4.68-2.88 2.32a.96.96 0 0 1-.716.207.965.965 0 0 1-.65-.363l-1.133-1.443a.968.968 0 0 1 1.52-1.194l.529.673 2.117-1.705a.967.967 0 1 1 1.213 1.505Z"/>
      </G>
      <Defs>
          <ClipPath id="a">
              <Path fill={props.color} d="M.625 0h32v32h-32z"/>
          </ClipPath>
      </Defs>
  </Svg>
)
export default ReservationIcon
