import { View,Text,StyleSheet,Platform,Image} from "react-native";

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}){
    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}> ❤️{hp}</Text>
            </View>
       
       <Image source={image} 
       style={styles.imageedit}

        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain" />   
        
        <View >
            <Text style={styles.type} >🔥{type}</Text>
        </View>
          <View>
            <Text>
                Moves:{moves.join ( " , ")}
            </Text>
          </View>
          <View>
            <Text>Weaknesses: {weaknesses.join (" , " ) }</Text>
          </View>
        </View>
    )
} 

const styles=StyleSheet.create({
  card:{
    backgroundColor:"white",
    borderRadius:20,
    borderWidth:3,
    padding:16,
    margin:16,
    ...Platform.select({
        android:{
                elevation:50
        }
    })
  },
  nameContainer: { 
flexDirection:"row",
justifyContent:"space-between",
marginBottom:32

  },
  name : {
    fontSize:30,
    fontWeight:"bold"
  },
  hp: { 
    fontSize:22,
  },
  imageedit : {
    height:200,
    width: " 100%"
  },
  type:{ 
    fontSize:25,
    fontWeight:"bold",
    marginLeft:90,
    marginTop:10,
    marginBottom:10
  }
})