
import {  StyleSheet, Text, View,Platform,SafeAreaView } from 'react-native';
import PokemonCard from './components/PokemonCards';
export default function App() {

  const charmanderData = {
    name:"Charmander",
    image:require("./assets/charmander.jpg"),
    type:"fire",
    hp:39,
    moves:["scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"]
  };

  return (

    <SafeAreaView style={styles.container}>
        <PokemonCard {...charmanderData} />
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:Platform.OS=="android" ? 35: 0
 
  },
});
