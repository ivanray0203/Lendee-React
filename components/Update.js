import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {reactNavigation} from 'react-navigation';
import RNRestart from 'react-native-restart';

const baseUrl = 'http://localhost:8000/api';

export default class Update extends React.Component {
 constructor(props)
 {
     super(props);
     this.state={Id: '',Name: '', Address: '', Phone_Number: ''};

 } 
 UpdateLendee(ida)
  {
    let collection={};
    var name = this.state.Name;
    var address = this.state.Address;
    var phone_number = this.state.Phone_Number;


    collection.id = id;
    collection.name = name;
    collection.address = address;
    collection.phone_number = phone_number;

    fetch('http://localhost:8000/api/lendee/'+id, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection),
    })
    .then(response => response.json())
    .then(data => {
      alert('Updated Successfully');
      console.log('Success:', data);
      window.location.reload();
    })
    .catch((error) => {
      alert('Error');
      console.error('Error:', error);
    });
  }
  
  render() {
     const id = this.props.navigation.getParam('id', 'no id provided')
     const name = this.props.navigation.getParam('name', 'no name provided')
     const address = this.props.navigation.getParam('address', 'no address provided')
     const phone_number = this.props.navigation.getParam('phone_number', 'no phone_number provided');

    return (
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Update Lendee Form</Text>
            
            <TextInput style={styles.textInputId} placeholder="Lendee Id"
            underlineColorAndroid={'transparent'}
            defaultValue = {id.toString()}
            onChangeText = {Id=>this.setState({Id})}
            />

            <TextInput style={styles.textInput} placeholder="Lendee Name"
            underlineColorAndroid={'transparent'}
            defaultValue = {name}
            onChangeText = {Name=>this.setState({Name})}
            />

            <TextInput style={styles.textInput} placeholder="Address"
            underlineColorAndroid={'transparent'}
            defaultValue = {address}
            onChangeText = {Address=>this.setState({Address})}
            />

            <TextInput style={styles.textInput} placeholder="Phone Number"
            underlineColorAndroid={'transparent'}
            defaultValue = {phone_number}
            onChangeText = {Phone_Number=>this.setState({Phone_Number})}
            />

            <TouchableOpacity style={styles.button} onPress={() => this.UpdateLendee(id)}>
                <Text style={styles.btnText}>Update Lendee</Text>
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
  textInputId: {
    
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
