import { mapValues } from "lodash";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 150, 
    backgroundColor: 'white', 
    flexDirection:'row',
    alignItems: 'center',
    marginLeft: 25
  },
  mainContainer: {
   paddingVertical: 40,
    borderTopWidth:1,
    borderBottomWidth: 1,
    marginBottom: 25
  }, 
  containerStyle: {
    width: '60%', 
    paddingLeft: 25, 
    backgroundColor: 'transparent'
  },
  textStyle: {
    textAlign: 'left',
     color: 'black' 
  }
});

export default styles;