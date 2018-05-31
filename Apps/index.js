import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Footer, CardList, Card } from './components/';
import ApiController from './services/debitsApiController.js';

export default class MainApp extends Component {
  constructor(props){
      super(props);
      let currency = {
        symbol : "$",
        decimal : ".",
        thousand: " ",
        precision : 2,
        symbolOnLeft: true,
        spaceBetweenAmountAndSymbol: false,
      };
      this.state = {data : [], Loading : true, totalPrice : '', currency: currency};
      this.getPrice = this.getPrice.bind(this);
  }

  getPrice(price){    
    const { symbol, decimal, thousand, precision, symbolOnLeft, spaceBetweenAmountAndSymbol } = this.state.currency;
    let formattedPrice =price.format;
    // formattedPrice = formattedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return symbolOnLeft ? symbol +  price : price + symbol;
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
          Total: {this.getPrice(this.state.totalPrice)}
        </Header>
        <FlatList
            data={this.state.data}
            renderItem={({item}) => <Card objData = {item} totalPrice = {this.getPrice(item.totalPrice)}/>} 
        />
        <Footer/>
      </View>
    );
  }
}