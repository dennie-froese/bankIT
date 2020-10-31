import React from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import {greeting} from '../../lib';

interface Props {
  title: string;
  onPress?: () => void;
  colourBackground?: string;
  colourText?: string;
  spacing?: number;
  borderRadius?: number;
}

export default function GreetingHeader({
  title,
  onPress,
  colourBackground,
  colourText,
  spacing,
  borderRadius,
}: Props) {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: colourBackground,
        padding: spacing,
        borderRadius: borderRadius,
      }}
      onPress={onPress}>
      <Text style={{fontSize: 20, textAlign: 'center', color: colourText}}>
        {`${greeting} ${title}!`}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});
