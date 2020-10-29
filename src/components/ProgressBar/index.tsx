import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {colours, borderRadii} from '../../constants';

interface Props {
  x?: number;
}

export default function ProgressBar({x = 80}: Props) {
  const width = (x / 100) * 300;
  const progress = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        width: 300,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: borderRadii.m,
        backgroundColor: colours.grey,
      }}>
      <Animated.View
        style={{
          transform: [{translateX: progress}],
          width: width,
          height: 30,
          backgroundColor: colours.primary,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
