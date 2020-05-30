import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal(' ');

    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='enter studies goal'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancle' color='red' onPress={props.onCancle} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>

    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        textDecorationColor: 'black'
    },
    buttonContainer: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    },

});
export default GoalInput;