import React from "react";
import { Text, TextStyle, TextProps } from "react-native";

type IProps = {
  style?: TextStyle;
}

const MediumText: React.FC<IProps & TextProps> = ({style, children, ...rest }) => {
  return (
    <Text style={[{ fontFamily: 'Ubuntu_500Medium' }, style]} {...rest}>
      {children}
    </Text>
  )
};

export default MediumText;