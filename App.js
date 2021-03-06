import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Header from './src/components/Header'

export default function App() {

    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);

    // Add todo item to todo list
    const addTodoList = () => {
        setTodoList([...todoList, todoItem]);
        console.log(todoList);
    }

    return (
        <View>
            <Header title="Todo List"/>
            <View style={styles.container}>
                <View>
                    
                    <TextInput style={styles.textInput} 
                    placeholder="Enter Todo item"
                    onChangeText={text => setTodoItem(text)}
                    value={todoItem}
                    />
                    <Button title="Add Todo" 
                    onPress={addTodoList}/>
                </View>
                <ScrollView>
                    {todoList.map(todo => 
                        <View key={todo} style={styles.todoItem}>
                            <Text>{todo}</Text> 
                        </View>)}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  textInput: {
      padding: 10,
      borderColor: '#000000',
      marginBottom: 10,
      borderWidth: 1
  },
  todoItem: {
      marginTop: 10,
      padding: 20,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray'
  }
});