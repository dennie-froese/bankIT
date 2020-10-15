import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  colourBackground: string;
  colourText: string;
  spacing: number;
  borderRadius: number;
}

export default function PrimaryButton({
  title,
  onPress,
  colourBackground,
  colourText,
  spacing,
  borderRadius,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colourBackground,
        padding: spacing,
        borderRadius: borderRadius,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 20, textAlign: 'center', color: colourText}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
