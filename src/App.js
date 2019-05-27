import React, { Component } from 'react';
import Buildings from './components/Buildings';
import products, { currency } from './products_en';
import buildings from './buildings_en';
import JuiceProduction from './components/JuiceProduction';

class App extends Component {
  state = {
    storage: {},
    buildings: {},
    level: 1,
    production: 0
  }

  completeDetail = (key_product, key_element, value) => {
    let storage = { ...this.state.storage };
    storage[key_product].complete[key_element] = value;
    this.setState({
      storage
    });
  }

  buyProduct = key_product => {
    let storage = { ...this.state.storage };
    let production = this.state.production;
    Object.keys(storage[key_product].require)
      .forEach(key_element => {
        storage[key_element].stock -= storage[key_product].require[key_element];
        production -= storage[key_element].production * storage[key_product].require[key_element]
      });
    production += storage[key_product].production
    storage[key_product].stock += 1;
    this.setState({
      storage,
      production
    });
  }

  buyBuilding = key_building => {
    let storage = { ...this.state.storage };
    let buildings = { ...this.state.buildings };
    storage[currency].stock -= buildings[key_building].price;
    buildings[key_building].unlocked = true;
    buildings[key_building].price *= 2;
    this.setState({
      storage,
      buildings
    })
  }

  upgradeBuilding = key_building => {
    let storage = { ...this.state.storage };
    let buildings = { ...this.state.buildings };
    storage[currency].stock -= buildings[key_building].price;
    buildings[key_building].level += 1;
    buildings[key_building].price *= 2;
    this.setState({
      storage,
      buildings
    })
  }

  autoJuice = () => {
    let storage = { ...this.state.storage };
    storage[currency].stock += this.state.production;
    this.setState({
      storage
    })
  }

  manualJuice = value => {
    let storage = { ...this.state.storage };
    storage[currency].stock += value;
    this.setState({
      storage
    })
  }

  componentWillMount() {
    this.setState({
      storage: products,
      buildings
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.autoJuice(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <JuiceProduction
          stock={this.state.storage[currency].stock}
          manualJuice={this.manualJuice} />
        <Buildings
          buildings={this.state.buildings}
          storage={this.state.storage}
          completeDetail={this.completeDetail}
          buyProduct={this.buyProduct}
          buyBuilding={this.buyBuilding}
          upgradeBuilding={this.upgradeBuilding} />
      </div>
    );
  }
}

export default App;