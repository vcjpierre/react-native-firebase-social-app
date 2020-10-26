import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container } from '../styles/FeedStyles'

const HomeScreen = () => {
  return (
    <Container>
      <Text style={styles.text}>Welcome</Text>
    </Container>
  );
}

export default HomeScreen;