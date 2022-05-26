import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Snackbar, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {createBug} from '../../store/entity/bugs';
import {COLORS} from '../../themes/colors';
const CreateBug = () => {
  const [visible, setVisible] = useState(false);
  const [valid, setValid] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  const onHandleChange = (value: string, input: string) => {
    setInputs(prevstate => ({...prevstate, [input]: value}));
  };

  const reset = () => {
    setInputs({title: '', description: ''});
  };

  const onClick = () => {
    dispatch(createBug(inputs));
    setVisible(true);
    setInputs({title: '', description: ''});
  };

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (inputs.title && inputs.description) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [inputs.title, inputs.description]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} />

      <View style={styles.bugContainer}>
        <View style={styles.section}>
          <Text style={styles.font}>Title</Text>
          <TextInput
            value={inputs.title}
            mode="outlined"
            theme={{roundness: 10}}
            activeOutlineColor="grey"
            outlineColor="#C8CDCF"
            onChangeText={input => onHandleChange(input, 'title')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.font}>Description</Text>
          <ScrollView>
            <TextInput
              style={styles.description}
              value={inputs.description}
              mode="outlined"
              theme={{roundness: 10}}
              activeOutlineColor="grey"
              outlineColor="#C8CDCF"
              multiline
              onChangeText={input => onHandleChange(input, 'description')}
            />
          </ScrollView>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{...styles.createButton, opacity: valid ? 1 : 0.5}}
            onPress={onClick}
            disabled={!valid}>
            <Text>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={reset}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={2500}
        theme={{roundness: 10}}
        style={styles.snackBar}>
        <Text>Bug Created Successfully</Text>
      </Snackbar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    height: 600,
  },
  section: {
    padding: 10,
  },
  description: {
    height: 100,
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: COLORS.primary,
  },
  bottomContainer: {
    flex: 1,
  },
  font: {
    color: 'black',
    fontSize: 16,
  },
  bugContainer: {
    marginTop: 100,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    borderWidth: 0,
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  createButton: {
    marginVertical: 10,
    alignContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  cancelButton: {
    marginVertical: 10,
    alignContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7E9EA',
  },
  snackBar: {
    margin: 15,
    padding: 5,
  },
});
export default CreateBug;
