import { StyleSheet } from "react-native";

import { COLORS } from "../../globals/colors";
import { BORDERRADIUS, SPACING } from "../../globals/styles";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.Black,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: SPACING.space_24,
        borderRadius: BORDERRADIUS.radius_20,
        borderWidth: 1,
        borderColor: COLORS.WhiteRGBA50,
        paddingHorizontal:SPACING.space_20,
    },
    searchTextInput: {
       flex:1,
       color:COLORS.White,
    }
});

export default styles;