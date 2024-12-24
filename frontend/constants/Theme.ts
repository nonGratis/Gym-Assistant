import type { Theme } from "@react-navigation/native/lib/typescript/src/types";
import { Colors, tintColorDark } from "./Colors";
const AppTheme: Theme = {
  dark: true,
  colors: {
    primary: tintColorDark,
    background: Colors.default.background,
    card: Colors.default.backgroundLight,
    text: Colors.default.text,
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

export default AppTheme;
