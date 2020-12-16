import React from "react";
import spaces from "../config/spaces.js";
import { View } from 'react-native'
export default function Spacer({
    size = 0,
    horizontal
}) {
    return <View style={{

        width: horizontal ? size * spaces.spacerUnit : 0,
        height: !horizontal ? size * spaces.spacerUnit : 0
    }} />
}