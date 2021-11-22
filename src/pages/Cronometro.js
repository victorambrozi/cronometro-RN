import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';


export const Cronometro = () => {
  return (
    <>
      <Image
        source={require('../../assets/crono.png')}
      />
      <Text style={styles.timer}> 00:00:00</Text>

      <View style={styles.btnControl}>
        <TouchableOpacity>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Iniciar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Limpar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.time}>Ultimo tempo 00:03:50</Text>
    </>
  )
}

const styles = StyleSheet.create({
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btnControl: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 160,
  },
  btnArea: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10

  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#00aeef',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold'
  },
  time: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 15,
  }
})