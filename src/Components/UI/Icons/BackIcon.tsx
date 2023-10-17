import Svg, { SvgProps, Rect, Path } from "react-native-svg";

const BackIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Rect
      width={37}
      height={37}
      x={37}
      fill="#fff"
      rx={18.5}
      transform="rotate(90 37 0)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.437}
      d="m21.25 24-5.5-5.5 5.5-5.5"
    />
    <Rect
      width={36}
      height={36}
      x={36.5}
      y={0.5}
      stroke="#000"
      strokeOpacity={0.1}
      rx={18}
      transform="rotate(90 36.5 .5)"
    />
  </Svg>
);
export default BackIcon;
