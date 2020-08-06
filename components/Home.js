import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, Dimensions, Text, View, Button, TouchableOpacity } from 'react-native';

const baseUrl = 'http://localhost:8000/';
export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dataLendee: [],
            message:'Hola',
        }
    }
    componentDidMount()
    {
        this.setState({message:"Otro"});
        return fetch(baseUrl+'api/lendee')
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
                dataLendee:responseJson
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    DeleteLendee(id)
    {
        fetch('http://localhost:8000/api/lendee/'+id, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            }
            })
            .then(data => {
                alert('Deleted Successfully');
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
    }
  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.dataLendee.data}
                keyExtractor={this._keykeyExtractor}
                renderItem={this._renderItem}
            ></FlatList>
          <Button 
            title = 'Add Lendee'
            onPress={
                () => this.props.navigation.navigate('Create')
            }
          />
        </View>
      );
  }
  _renderItem = ({item}) => (
        <View>
            <TouchableOpacity style={styles.button} onPress={
                () => this.props.navigation.navigate('Update',{
                    id: item.id,
                    name: item.name,
                    address: item.address,
                    phone_number: item.phone_number
                })
            }>
                <Text>{item.name} </Text>
            </TouchableOpacity>
            <Button title = 'Delete' onPress={() => this.DeleteLendee(item.id)}></Button>
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
