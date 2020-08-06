import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const baseUrl = 'http://localhost:8000/api';
export default class Create extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={Name: '', Address: '', Phone_Number: ''};
  }
  AddLendee=()=>
  {
    let collection={};
    var name = this.state.Name;
    var address = this.state.Address;
    var phone_number = this.state.Phone_Number;
    collection.name = name;
    collection.address = address;
    collection.phone_number = phone_number;

    fetch(baseUrl+'/lendee', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
    .then(response => response.json())
    .then(data => {
      alert('Lendee Added');
      window.location.reload();
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Add Lendee Form</Text>

            <TextInput style={styles.textInput} placeholder="Lendee Name"
            underlineColorAndroid={'transparent'}
            onChangeText = {Name=>this.setState({Name})}
            />

            <TextInput style={styles.textInput} placeholder="Address"
            underlineColorAndroid={'transparent'}
            onChangeText = {Address=>this.setState({Address})}
            />

            <TextInput style={styles.textInput} placeholder="Phone Number"
            underlineColorAndroid={'transparent'}
            onChangeText = {Phone_Number=>this.setState({Phone_Number})}
            />

            <TouchableOpacity style={styles.button} onPress={this.AddLendee}>
                <Text style={styles.btnText}>Add Lendee</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
  }, 
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    marginTop: 30,
  }, 
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  regform: {
      alignSelf: 'stretch',
  },
  header: {
      fontSize: 24,
      color: '#fff',
      paddingBottom: 10,
      marginBottom: 10,
      borderBottomColor: '#199187',
      borderBottomWidth: 1,

  }
});
