import Svg, { SvgProps, G, Path } from "react-native-svg";
const CalenderIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#FF7019">
      <Path
        d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9ZM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
        opacity={0.5}
      />
      <Path d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3Z" />
    </G>
  </Svg>
);
export default CalenderIcon;
