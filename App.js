import React from 'react';
import { store } from './src/redux/store'
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux'
import Routes from './src/routes';
import { toastConfig } from './src/components/toast';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Toast config={toastConfig} />
    </Provider>
  );
}

export default App;