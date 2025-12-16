import { GRADIENT_COLORS, GRADIENT_LOCATIONS } from '@/constants/button.style';
import { textStyles } from '@/constants/text.style';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TextProps } from 'react-native';



interface GradientTextProps extends TextProps {
    text: string;
}

export default function GradientText({
    text,
    style,
    ...rest
}: GradientTextProps) {
    return (
        <MaskedView
            maskElement={
                <Text {...rest} style={[style, textStyles.maskText]}>
                    {text}
                </Text>
            }
        >
            <LinearGradient
                colors={GRADIENT_COLORS}
                locations={GRADIENT_LOCATIONS}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                {/* Text ẩn để giữ chiều cao */}
                <Text {...rest} style={[style, textStyles.hiddenText]}>
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    );
}
