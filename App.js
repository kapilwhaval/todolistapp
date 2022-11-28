import React from 'react';
import { View } from 'react-native';
import TodoList from './src/screens/todolist';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
}

export default App;