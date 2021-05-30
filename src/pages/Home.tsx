import React, { useState } from 'react';

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

          let taskfilter = tasks.filter(function (e) {
              return e.id === id;
          });

          const newData = {
              id: taskfilter[0].id,
              title: taskfilter[0].title,
              done: !taskfilter[0].done,
          }

          setTasks(oldState => [...oldState, newData])
      }
  }

  function handleRemoveTask(id: number) {
      setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  return (
    <>
      <Header />
      <Input addTask={handleAddTask} />
      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
