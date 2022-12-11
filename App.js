import React from 'react';
import { store } from './src/redux/store'
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Routes from './src/routes';
import { toastConfig } from './src/components/toast';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state' ]);

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
}

export default App;