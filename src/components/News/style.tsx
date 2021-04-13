import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, 
    paddingVertical: 10, 
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  avatar: {
    borderRadius: 10, 
    width: '100%'
  },
  title: {
    fontSize: 18, 
    textAlign: 'center', 
    marginVertical: 12, 
    letterSpacing: 0.5 
  },
  timeContainer:{
    flexDirection :'row', 
    alignItems: 'center'
  }, 
  timeText: {
    fontSize: 14, 
    marginLeft: 10
  }
});

export default styles;