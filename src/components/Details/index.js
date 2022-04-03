import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles'

const Details = ({ movie, goBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.btnGoBack}
          onPress={goBack}
        >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.description}>{movie.sinopse}</Text>
      </View>
    </View>
  );
};

export default Details;
