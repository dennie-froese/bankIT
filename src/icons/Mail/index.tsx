import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';
import {colours} from '../../constants';

interface Props {
  width?: number;
  height?: number;
  colour?: string;
}

const Mail = ({colour = colours.primary, width = 64, height = 64}: Props) => (
  <View style={{padding: width / 2}}>
    <Svg viewBox="0 0 64 64" width={width} height={height}>
      <G fill="none" fill-rule="evenodd">
        <Path
          fill={colour}
          fill-rule="nonzero"
          d="M59,13 C60.6568542,13 62,14.3431458 62,16 L62,49 C62,50.6568542 60.6568542,52 59,52 L5,52 C3.34314575,52 2,50.6568542 2,49 L2,16 C2,14.3431458 3.34314575,13 5,13 L59,13 Z M58.0079821,16.7710632 L32,37 L5.99099955,16.7719817 C5.38247686,17.3210348 5,18.1158513 5,19 L5,19 L5,46 C5,47.6568542 6.34314575,49 8,49 L8,49 L56,49 C57.6568542,49 59,47.6568542 59,46 L59,46 L59,19 C59,18.1153582 58.6170964,17.3201483 58.0079821,16.7710632 Z M51.287,17.5 L12.713,17.5 L32,32.5 L51.287,17.5 Z"
        />
      </G>
    </Svg>
  </View>
);

const styles = StyleSheet.create({});

export default Mail;
