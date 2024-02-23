import { Pressable, Text } from "react-native";
import { MenuBottomProps } from "./menu-bottom";

import { styles } from "./styles";
import { theme } from "@/theme";

import { FontAwesome } from "@expo/vector-icons";

export function MenuButton({ title, icon }: MenuBottomProps) {
    return(
        <Pressable style={styles.container}>
            <FontAwesome
                name={icon}
                size={32}
                color={theme.colors.white}
                style={styles.icon}
            />
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}