/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import {requestUserPermission, NotificationListner} from './src/Notification';
const App = () => {
  useEffect(() => {
      requestUserPermission();
      NotificationListner();
    },
    []);
  return (
    <View style={{backgroundColor: 'blue', height: '100%', width: '100%'}} />
  );
};

export default App;
