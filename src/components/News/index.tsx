import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Avatar from "../Avatar";
import MediumText from "../MediumText";
import { Foundation } from '@expo/vector-icons';
import styles from "./style";

interface INews {
  uri: string;
  title: string;
  time: string;
  onPress: () => void;
};

const News:React.FC<INews> = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Avatar uri={props.uri} style={styles.avatar}/>
      <MediumText style={styles.title}>{props.title}</MediumText>
      <View style={styles.timeContainer}>
        <Foundation name="web" size={25}/>
        <MediumText style={styles.timeText}>{props.time} monts ago</MediumText>
      </View>
    </TouchableOpacity>
  );
};

export default News;