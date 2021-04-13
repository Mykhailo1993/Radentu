import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200
  },
  logo: {
    fontSize: 30, 
    alignSelf: 'center',
  },
  input: { 
    width: '80%',
    marginHorizontal: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 7,
    fontSize: 18
  },
  toastContainer:{
    height: 60, 
    width: '90%', 
    backgroundColor: 'pink', 
    marginHorizontal: 30, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  toasMessage: {
    fontSize: 16
  }
});

export default styles;