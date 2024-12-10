import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@/src/screens/SplashScreen';
import EmailSignupScreen from '@/src/screens/EmailSignup';
import MobileNumberScreen from '@/src/screens/PhoneNumberSignup';
import VerifyPhoneScreen from '@/src/screens/VerificationPhoneScreen'
import SecureAccessScreen from '@/src/screens/SecureAccessScreen';
import CreatePasscodeScreen from '@/src/screens/CreatePasscodeScreen';
import RepeatPasscodeScreen from '@/src/screens/RepeatPasscodeScreen';
import PersonalInfoScreen from '@/src/screens/PersonalInfoScreen';
import AddressInfoScreen from '@/src/screens/AddressInfoScreen'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="EmailSignup" 
          component={EmailSignupScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PhoneNumberSignup" 
          component={MobileNumberScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="VerifyPhoneScreen" 
          component={VerifyPhoneScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SecureAccessScreen" 
          component={SecureAccessScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CreatePasscodeScreen" 
          component={CreatePasscodeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="RepeatPasscodeScreen" 
          component={RepeatPasscodeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PersonalInfoScreen" 
          component={PersonalInfoScreen} 
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="AddressInfoScreen" 
          component={AddressInfoScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}