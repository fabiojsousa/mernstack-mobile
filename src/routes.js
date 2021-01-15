import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Account from "./pages/Account";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Main",
        },
      },
      Account: {
        screen: Account,
        navigationOptions: {
          title: "Account",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#e5e6F0",
        },
      },
    }
  )
);

export default Routes;
