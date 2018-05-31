import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Footer, CardList, Card } from './components/';
import ApiController from './services/debitsApiController.js';

export default class MainApp extends Component {
  constructor(props){
      super(props);
      let currency = {
        symbol : '$',
        decimal : '.',
        thousand: ',',
        format:'{s}{v}'
      };
      this.state = {data : [], Loading : true, totalPrice : '', currency: currency};
      this.getPrice = this.currencyFormatter.bind(this);
  }

  currencyFormatter(price){    
    const { symbol, decimal, thousand, format } = this.state.currency;
    let priceSplit = price.toString().split('.');
    let mod;
    if(priceSplit.length == 1){
        mod = '00';
    }
    else{
      if(priceSplit[1].length == 1){
        mod = priceSplit[1] + '0';
      }
      else mod = priceSplit[1];
    }
    let result = '';
    let a = 0;
    for(let i = priceSplit[0].length - 1; i >= 0; i--){
      result = priceSplit[0][i] + result;
      a++;
      if(a%3==0 && i > 0){
        result = thousand + result;
      }
    }
    formattedPrice = result + decimal + mod;
    return format.replace('{s}', symbol).replace('{v}',formattedPrice);
  }

  componentWillMount(){   
    this.getData();  
    debugger;   
    var res = async () =>await this.getMoviesFromApiAsync();
    console.log(res);
  }

  
   getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }

 getData = async () => {    
    let api = new ApiController();
    let res = await api.getList();
    this.setState({data : res, Loading : false});
    console.log(res);
    total = 0;
    for (let i = 0; i < this.state.data.length; i++) {
        total += this.state.data[i].totalPrice; 
    } 
    this.setState({totalPrice : total});
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Header> 
          Total: {this.currencyFormatter(this.state.totalPrice)}
        </Header>
        <FlatList
            data={this.state.data}
            renderItem={({item}) => <Card objData = {item} totalPrice = {this.currencyFormatter(item.totalPrice)}/>} 
        />
        <Footer/>
      </View>
    );
  }
}