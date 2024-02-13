import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "./screens/Home/Home.jsx";
import Doctors from "./screens/Doctors/Doctors.jsx";
import Notifications from "./screens/Notifications/Notifications.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import InfoDoctor from "./screens/Doctors/InfoDoctor.jsx";
import Cita from './screens/Doctors/Appointment.jsx'
import Category from './screens/Doctors/Category.jsx'
import Login from "./screens/Login/Login.jsx";
import ForgotPassword from "./screens/Login/ForgotPassword.jsx";
//icons
import {
  Entypo,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import Register from "./screens/Login/Register.jsx";
import VerifyCode from "./screens/Login/VerifyCode.jsx";
import RecoverPassword from "./screens/Login/RecoverPassword.jsx";

const DoctorStack = createStackNavigator();
const LoginStack = createStackNavigator();

// stack
function StackLogin(){
  return(
    <LoginStack.Navigator initialRouteName="Iniciar sesion">
      <LoginStack.Screen
        name="Iniciar sesion"
        component={Login}
      ></LoginStack.Screen>
      <LoginStack.Screen
        name="Olvidé mi contraseña"
        component={ForgotPassword}
      >
      </LoginStack.Screen>
      <LoginStack.Screen
        name="Registrarse"
        component={Register}
      >
      </LoginStack.Screen>
      <LoginStack.Screen
        name="Código de verificación"
        component={VerifyCode}
      ></LoginStack.Screen>
      <LoginStack.Screen
        name="Restablecer contraseña"
        component={RecoverPassword}
      >

      </LoginStack.Screen>
    </LoginStack.Navigator>
  )
}

//StackCreado
function StackDoctor() {
  return (
    <DoctorStack.Navigator initialRouteName="Categorias">
      <DoctorStack.Screen
        name="Categorias"
        component={Category}
        options={{
        }}
      />
      <DoctorStack.Screen
        name="Doctores"
        component={Doctors}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <DoctorStack.Screen
        name="Detalles del doctor"
        component={InfoDoctor}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#18A0FB",
          },
          headerTintColor: "#fff",
        }}
      />
      <DoctorStack.Screen
        name="Agendar cita"
        component={Cita}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#18A0FB",
          },
          headerTintColor: "#fff",
        }}
      />
    </DoctorStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Doctors"
      screenOptions={{
        tabBarActiveTintColor: "#18A0FB",
      }}
    >
      <Tab.Screen
        name="Login"
        component={StackLogin}
        options={{ tabBarIcon: ({ color, size }) => (<Entypo name="login" size={size} color={color} />) }}
      >

      </Tab.Screen>
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
        component={StackDoctor}
        options={{
          headerShown: false,
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
