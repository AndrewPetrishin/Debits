import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Footer, CardList, Card } from './components/';
import ApiController from './services/debitsApiController.js';

export default class MainApp extends Component {
  constructor(props){
      super(props);
      this.state = {data : [], Loading : true, totalPrice : 45.3, currency: '$', currencyFormat:'{0}'};
      this.getPrice = this.getPrice.bind(this);
  }

  getPrice(){
    console.log(this.state.currency + this.state.totalPrice);
    if(this.state.currencyFormat === '{0}'){
      return this.state.currency + this.state.totalPrice;
    }
    return this.state.totalPrice + this.state.currency;
  }

  componentWillMount(){
    this.getData();
   }
  
 getData = async () => {        
    let api = new ApiController();
    let res = await api.getList();
    this.setState({data : res, Loading : false});
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Header> 
          Total: {this.getPrice()}
        </Header>
        <FlatList data={this.state.data}
          renderItem={({item}) => <Card key={item.title} objData = {item}/>} />
        
        <Footer/>
      </View>
    );
  }
}