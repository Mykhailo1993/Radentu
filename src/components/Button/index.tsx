import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import MediumText from "../MediumText";

interface IButton {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle; 
  textStyle?: TextStyle;
}

const Button: React.FC<IButton> = ({ label, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} activeOpacity={0.5} onPress={onPress}>
        <MediumText style={[styles.label, textStyle]}>{label}</MediumText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 20,
  },
  label: {
    fontSize: 16,
    color: "white",
    fontWeight: '600',
    textAlign: 'center',
  }
})

export default Button;