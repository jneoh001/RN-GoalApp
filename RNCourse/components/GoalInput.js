import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
import { useState } from "react";

let GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  let goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  let addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(" ");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Goal.."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
             <Button title="Add Goal" onPress={addGoalHandler} color="yellow"/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
          </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 8,
    textDecorationColor: 'white',
  },

  buttonContainer:{
    flexDirection: 'row',
    marginTop: 16,
  },

  button:{
    width:100,
    marginHorizontal: 8,
  },

  image:{
    width: 150,
    height: 150,
    margin: 20,
  }
});
