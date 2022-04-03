import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import Details from '../Details';
import styles from './styles';

const Movies = ({ data }) => {

  const [visableModal, setVisibleModal] = useState(false)

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image
          source={{ uri: data.foto }}
          style={styles.capa}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.btnText}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType='slide'
        visible={visableModal}
        transparent
      >
        <Details movie={data} goBack={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
};

export default Movies;
