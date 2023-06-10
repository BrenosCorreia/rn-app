import { Text,View } from "react-native";



export function TextIns({name,dado}){
    return(
        <View>
            <Text>{name}:{dado}</Text>

        </View>

    );
}