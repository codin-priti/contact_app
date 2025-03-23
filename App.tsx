import React, { useEffect } from "react";
import { Provider } from  "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./src/redux/store";
import { initDB } from "./src/database/database";
import ContactListScreen from "./src/screens/ContactListScreen";
import ContactFormScreen from "./src/screens/ContactFormScreen";

const stack = createStackNavigator();

const App = () =>{
  useEffect(() =>{
    initDB();
  },[]);
   return(
    <Provider store = {store}>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Contact List" component={ContactListScreen} />
          <Stack.Screen name="Contact Form" component={ContactFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
   );
};
export default App;
