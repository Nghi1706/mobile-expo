import { GRADIENT_COLORS, GRADIENT_LOCATIONS, styles } from '@/constants/button.style';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Animated,
    Easing,
    Pressable,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';

type ButtonType = 'primary' | 'secondary';

const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);


interface GradientButtonProps {
    text: string | React.ReactNode;
    icon?: React.ReactNode;
    isAnimate?: boolean;
    type?: ButtonType;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function GradientButton({
    text,
    icon,
    isAnimate,
    type = 'primary',
    onPress,
    style,
    textStyle,
}: GradientButtonProps) {
    const progress = React.useRef(new Animated.Value(0)).current;

    const animatedStart = {
        x: progress.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [0, 1, 1, 0, 0],
        }),
        y: progress.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [0, 0, 1, 1, 0],
        }),
    };

    const animatedEnd = { x: 1, y: 1 };


    React.useEffect(() => {
        if (type === 'secondary' && isAnimate) {
            Animated.loop(
                Animated.timing(progress, {
                    toValue: 1,
                    duration: 3500,
                    easing: Easing.linear,
                    useNativeDriver: false, // bắt buộc
                })
            ).start();
        }
    }, [type, isAnimate]);


    if (type === 'secondary') {
        if (isAnimate) {
            return (
                <Pressable onPress={onPress}>
                    <AnimatedLinearGradient
                        colors={GRADIENT_COLORS}
                        locations={GRADIENT_LOCATIONS}
                        start={animatedStart}
                        end={animatedEnd}
                        style={[styles.border, style]}
                    >
                        <View style={styles.secondaryInner}>
                            <View style={styles.content}>
                                {icon && <View style={styles.icon}>{icon}</View>}
                                {typeof text === 'string' ? (
                                    <Text style={[styles.textSecondary, textStyle]}>
                                        {text}
                                    </Text>
                                ) : (
                                    text
                                )}
                            </View>
                        </View>
                    </AnimatedLinearGradient>
                </Pressable>
            );


        }
        else
            return (
                <LinearGradient
                    colors={GRADIENT_COLORS}
                    locations={GRADIENT_LOCATIONS}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
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
                end={{ x: 1, y: 1 }}
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
