import { forwardRef } from "react";

import { Text, View } from "react-native";

import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

import BottomSheet from "@gorhom/bottom-sheet";

import { MenuProps } from "./menu";
import { theme } from "@/theme";
import { MenuButton } from "../menu-bottom";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
    return(
        <BottomSheet
          ref={ref}
          index={0}
          snapPoints={[0.01, 230]}
          backgroundStyle={styles.container}
          handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
    )
})