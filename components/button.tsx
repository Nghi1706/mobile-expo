import { GRADIENT_COLORS, GRADIENT_LOCATIONS, styles } from '@/constants/button.style';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Pressable,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';

type ButtonType = 'primary' | 'secondary';

interface GradientButtonProps {
    text: string;
    icon?: React.ReactNode;
    type?: ButtonType;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function GradientButton({
    text,
    icon,
    type = 'primary',
    onPress,
    style,
    textStyle,
}: GradientButtonProps) {
    if (type === 'secondary') {
        return (
            <LinearGradient
                colors={GRADIENT_COLORS}
                locations={GRADIENT_LOCATIONS}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.border, style]}
            >
                <Pressable style={styles.secondaryInner} onPress={onPress}>
                    <View style={styles.content}>
                        {icon && <View style={styles.icon}>{icon}</View>}
                        <Text style={[styles.textSecondary, textStyle]}>{text}</Text>
                    </View>
                </Pressable>
            </LinearGradient>
        );
    }

    // PRIMARY
    return (
        <Pressable onPress={onPress}>
            <LinearGradient
                colors={GRADIENT_COLORS}
                locations={GRADIENT_LOCATIONS}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.primary, style]}
            >
                <View style={styles.content}>
                    {icon && <View style={styles.icon}>{icon}</View>}
                    <Text style={[styles.textPrimary, textStyle]}>{text}</Text>
                </View>
            </LinearGradient>
        </Pressable>
    );
}
