import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}> 
      <Text>Camera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container:{
    flex: 1,
  },
  absoluteFill:{
    flex: 1
  }
});

export default App;
