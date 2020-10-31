import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {today} from '../../lib';

export default function FurtherAccountDetails() {
  const [state, setState] = useState<
    null | 'growing' | 'doneGrowing' | 'shrinking' | 'doneShrinking'
  >(null);
  const height = useRef(new Animated.Value(0));
  const opacity = useRef(new Animated.Value(0));

  useEffect(() => {
    if (state === 'growing') {
      Animated.parallel([
        Animated.timing(opacity.current, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.linear),
        }),
        Animated.timing(height.current, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.linear),
        }),
      ]).start(() => {
        setState('doneGrowing');
      });
    }
    if (state === 'shrinking') {
      Animated.parallel([
        Animated.timing(height.current, {
          toValue: 0,
          duration: 1,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.linear),
        }),
      ]).start(() => {
        setState('doneShrinking');
      });
    }
  }, [state]);

  return (
    <View>
      <View style={styles.furtherAccountDetails}>
        <Text style={styles.furtherAccountDetailsText}>
          Further account details
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (state === 'doneGrowing') {
              setState('shrinking');
            } else {
              setState('growing');
            }
          }}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>
      {state === 'growing' ||
      state === 'doneGrowing' ||
      state === 'shrinking' ? (
        <Animated.View
          style={{
            ...styles.animatedView,
            opacity: opacity.current,
            transform: [{scaleY: height.current}],
          }}>
          <Text>Balance at</Text>
          <Text>{today}</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  furtherAccountDetails: {
    paddingLeft: 10,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  furtherAccountDetailsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  animatedView: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
