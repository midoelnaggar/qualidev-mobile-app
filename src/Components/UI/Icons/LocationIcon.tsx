import Svg, { SvgProps, Path } from "react-native-svg";

const LocationIcon = (props: SvgProps) => (
  <Svg  fill="none" {...props}>
    <Path
      fill="#FF7019"
      d="M12 1.5a8.26 8.26 0 0 0-8.25 8.25c0 7.06 7.5 12.39 7.82 12.614a.75.75 0 0 0 .86 0c.32-.223 7.82-5.555 7.82-12.614A8.26 8.26 0 0 0 12 1.5Zm0 5.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
  </Svg>
);
export default LocationIcon;
