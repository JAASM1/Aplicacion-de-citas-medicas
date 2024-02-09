import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import Home from "./screens/Home/Home.jsx";
import Doctors from "./screens/Doctors/Doctors.jsx";
import Notifications from "./screens/Notifications/Notifications.jsx";
import Profile from "./screens/Profile/Profile.jsx";

//icons
import {
  Entypo,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "#18A0FB" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={Doctors}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
