import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import Loading from './src/components/Loading';
import Movies from './src/components/Movies';

import api from './src/services/api';

const App = () => {
  const [movies, setMovies] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    async function loadFilmes() {
      setLoad(true)
      const response = await api.get('r-api/?api=filmes')
      setMovies(response.data)
      setLoad(false)
    }
    loadFilmes()
  }, [])

  if (load) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movies data={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;