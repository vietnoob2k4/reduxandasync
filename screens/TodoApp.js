import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TodoApp</Text>
      <TextInput
        label="Enter todo"
        value={todo}
        onChangeText={setTodo}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo} style={styles.button}>
        Add Todo
      </Button>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.text}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
  },
});

export default TodoApp;
