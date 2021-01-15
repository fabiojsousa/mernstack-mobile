import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar/>
      <Routes/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
