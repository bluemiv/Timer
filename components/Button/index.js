import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({iconName, onPress}) {
    return(
        // TouchableOpacity: 클릭했을 때, opacity가 높아짐
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    )
}
Button.propsTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}
export default Button;