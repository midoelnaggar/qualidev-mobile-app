import FontProvider from "./src/Providers/FontProvider";
import StoreProvider from "./src/Providers/StoreProvider";
import AppNavigator from "./src/Navigators/AppNavigator";
import BottomSheetProvider from "./src/Providers/BottomSheetProvider";


export default function App() {
  return (
    <FontProvider>
      <StoreProvider>
        <BottomSheetProvider>
        <AppNavigator />
        </BottomSheetProvider>
      </StoreProvider>
    </FontProvider>
  );
}
