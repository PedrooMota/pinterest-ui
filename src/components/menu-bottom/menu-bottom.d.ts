import { FontAwesome } from "@expo/vector-icons"

export type MenuBottomProps = {
    title: string;
    icon: keyof typeof FontAwesome.glyphMap
}