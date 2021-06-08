import React, {useState, useCallback} from 'react';
import {Image, Platform, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
    addTask: (task: string) => void;
    isDarkMode: boolean;
}

export function Input({addTask, isDarkMode}: TodoInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        addTask(task);
        clearInput();
    }

    const clearInput = useCallback(() => setTask(''), []);

    return (
        <View
            style={[
                styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
                { backgroundColor: isDarkMode ? '#212136' : '#F5F4F8' }
            ]}>
            <TextInput
                style={[styles.input, { backgroundColor: isDarkMode ? '#212136' : '#F5F4F8', color: isDarkMode ? '#E1E1E6' : '#A09CB1'}]}
                placeholder="Adicionar novo todo..."
                placeholderTextColor={ isDarkMode ? '#E1E1E6' : '#A09CB1'}
                returnKeyType="send"
                value={task}
                onChangeText={text => setTask(text)}
                onSubmitEditing={() => handleAddNewTask()}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={[styles.addButton, { backgroundColor: isDarkMode ? '#565BFF' : '#3FAD27' }]}
                onPress={handleAddNewTask}
            >
                <Image source={checkIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 5,
        marginTop: -25,
        marginHorizontal: 40,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingLeft: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    inputIOSShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    inputAndroidShadow: {
        elevation: 5
    },
    addButton: {
        height: 50,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
});
