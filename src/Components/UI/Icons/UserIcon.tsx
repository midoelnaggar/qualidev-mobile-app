import Svg, { SvgProps, G, Path } from "react-native-svg";
const UserIcon = (props: SvgProps) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <G fill="#FF7019">
      <Path d="M13 10.833a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.666Z" />
      <Path
        d="M21.667 18.958c0 2.692 0 4.875-8.667 4.875s-8.667-2.183-8.667-4.875 3.88-4.875 8.667-4.875c4.786 0 8.667 2.183 8.667 4.875Z"
        opacity={0.5}
      />
    </G>
  </Svg>
);
export default UserIcon;
