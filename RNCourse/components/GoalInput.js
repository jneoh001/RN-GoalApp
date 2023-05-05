import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from "react";

let GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    let goalInputHandler = (enteredText) => {
      setEnteredGoalText(enteredText);
    };

    let addGoalHandler = () =>{
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

  <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your Course Goal"
      onChangeText={goalInputHandler}
    />
    <Button title="Add Goal" onPress={addGoalHandler} />
  </View>;
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
