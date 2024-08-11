import FontProvider from "./src/Providers/FontProvider";
import StoreProvider from "./src/Providers/StoreProvider";
import AppNavigator from "./src/Navigators/AppNavigator";
import BottomSheetProvider from "./src/Providers/BottomSheetProvider";
import SnackBarProvider from "./src/Providers/SnackBarProvider";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <FontProvider>
      <StoreProvider>
        <BottomSheetProvider>
          <PaperProvider>
            <SnackBarProvider>
              <AppNavigator />
            </SnackBarProvider>
          </PaperProvider>
        </BottomSheetProvider>
      </StoreProvider>
    </FontProvider>
  );
}
