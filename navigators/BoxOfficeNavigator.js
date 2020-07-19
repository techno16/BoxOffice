import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from '../pages/MovieDetail';
import BoxOffice from '../pages/BoxOffice';


  
const Stack = createStackNavigator();

function BoxOfficeNavigator(){
    return(
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoxOffice" component={BoxOffice}  />
        <Stack.Screen name="MovieDetail" component={MovieDetail}  />
      </Stack.Navigator>
    
    )
}

export default BoxOfficeNavigator;