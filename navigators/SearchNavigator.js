import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from '../pages/MovieDetail';
import Search from '../pages/Search';


  
const Stack = createStackNavigator();

function SearchNavigator(){
    return(
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoxOffice" component={Search}  />
        <Stack.Screen name="MovieDetail" component={MovieDetail}  />
      </Stack.Navigator>
    
    )
}

export default SearchNavigator;