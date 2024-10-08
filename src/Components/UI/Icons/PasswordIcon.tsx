import Svg, { SvgProps, G, Path } from "react-native-svg";

const PasswordIcon = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G fill="none">
      <Path
        stroke="#FF7019"
        strokeWidth={1.5}
        d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
      />
      <Path
        stroke="#FF7019"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 10V8a6 6 0 1 1 12 0v2"
        opacity={0.5}
      />
      <Path
        fill="#FF7019"
        d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        opacity={0.5}
      />
    </G>
  </Svg>
);

export default PasswordIcon;
