import { NavigationContainer } from "@react-navigation/native";

import TabNav from "../app/AppTabs";
import AppStack from "../stack/AppStack";
import AuthNav from "../auth/AuthNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
