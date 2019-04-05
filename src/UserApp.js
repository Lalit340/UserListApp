
import UsersList from './User' ;
import Operation from './UserOperation' ;
import { createStackNavigator, createAppContainer } from 'react-navigation'



const UseApp = createStackNavigator({
    UserOperation: { screen: Operation },
    User  : { screen: UsersList },
  },
   {
      initialRouteName: 'UserOperation'
    });
  
    const Container = createAppContainer(UseApp);
    export default Container;  