import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

let timer = null;
let seg = 0, min = 0, hour = 0;

export const Cronometro = () => {
  const [number, setNumber] = useState('00:00:00');
  const [button, setButton] = useState("INICIAR");
  const [lastTime, setLastTime] = useState(null);

  const start = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;

      setButton('INICIAR');
    } else {
      timer = setInterval(() => {
        seg++;

        if (seg === 60) {
          seg = 0;
          min++;
        };

        if (min === 60) {
          min = 0;
          hour++;
        };

        let format = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${seg < 10 ? '0' + seg : seg}`;
        setNumber(format);
      }, 1000);
      setButton('PAUSAR');
    }
  };
  const restart = () => {
    if(timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setNumber('00:00:00');
    seg = 0; min = 0; hour = 0;
    setButton("INICIAR");
    setLastTime(number);
  };

  return (
    <>
      <Image
        source={require('../../assets/crono.png')}
      />
      <Text style={styles.timer}>{number}</Text>

      <View style={styles.btnControl}>
        <TouchableOpacity onPress={start}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>{button}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={restart}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Limpar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.time}>
        {lastTime ? `Último tempo: ${lastTime}` : null}
      </Text>
    </>
  )
};

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
    fontStyle: 'italic'
  }
})