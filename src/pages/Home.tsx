import React, { useState, useEffect } from 'react';
import {View, useColorScheme} from "react-native";

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { Input } from '../components/Input';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const colorScheme = useColorScheme();

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle){
        const data = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false,
        }

        setTasks(oldState => [...oldState, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
      if(id){
          const taskChanged = tasks.filter(task => task.id === id).map(doneStatus => {
              doneStatus.done = !doneStatus.done;
              return doneStatus
          })
          setTasks(oldTasks => oldTasks.filter(task => [task.id !== id, taskChanged]))
      }
  }

  function handleRemoveTask(id: number) {
      setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  useEffect(() => {
      if(colorScheme === 'light'){
          setIsDarkMode(false);
      } else {
          setIsDarkMode(true);
      }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#10101E' : '#FFF'}}>
      <Header isDarkMode={isDarkMode}/>
      <Input isDarkMode={isDarkMode} addTask={handleAddTask} />
      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        isDarkMode={isDarkMode}
      />
    </View>
  )
}
