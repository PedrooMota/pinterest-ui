import { Pressable, PressableProps, Text } from "react-native";
import { filterProps } from "./filter";
import { styles } from "./styles";

export function Filter({ 
    filter, 
    selected, 
    ...rest 
}: PressableProps & filterProps) {

    return (
        <Pressable style={[styles.pressable, selected && styles.pressableSelected]} {...rest}>
            <Text style={styles.text}>{filter}</Text>
        </Pressable>
    )
}