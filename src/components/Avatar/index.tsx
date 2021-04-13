import React from "react";
import { Image, StyleProp, StyleSheet, ImageStyle } from "react-native";

type IAvatar = {
  uri: string;
  style?: StyleProp<ImageStyle>; 
}

const Avatar: React.FC<IAvatar> = ({ uri, style }) => {
  return <Image source={{ uri }} style={[styles.image, style]}/>
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});

export default Avatar;