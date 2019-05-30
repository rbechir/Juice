import React, { Component } from 'react';
import './App.css';
import Buildings from './components/Buildings';
import products, { currency } from './products_en';
import buildings from './buildings_en';
import JuiceProduction from './components/JuiceProduction';
import PlayerLevel from './components/PlayerLevel';

class App extends Component {
  state = {
    storage: products,
    buildings: buildings,
    level: 1,
    production: 0
  }

  levelUp = () => {
    let storage = { ...this.state.storage };
    let level = this.state.level;
    storage[currency].stock -= level * 1000;
    level += 1;
    storage = this.checkJuice(storage);
    this.setState({
      storage,
      level
    });
  }

  checkJuice = storage => {
    Object.keys(storage).forEach(key_product => {
      if (key_product !== currency) {
        if (storage[currency].stock >= storage[key_product].require[currency]) {
          storage[key_product].complete[currency] = true;
        } else {
          storage[key_product].complete[currency] = false;
        }
      }
    });
    return (storage);
  }

  buyProduct = key_product => {
    let storage = { ...this.state.storage };
    let production = this.state.production;
    Object.keys(storage[key_product].require).forEach(key_element => {
      storage[key_element].stock -= storage[key_product].require[key_element];
      production -= storage[key_element].production * storage[key_product].require[key_element];
      if (key_element !== currency) {
        storage[key_element].usedBy.forEach(key_using => {
          if (storage[key_element].stock < storage[key_using].require[key_element]) {
            storage[key_using].complete[key_element] = false;
          }
        });
      } else {
        storage = this.checkJuice(storage);
      }
    });
    production += storage[key_product].production;
    storage[key_product].stock += 1;
    storage[key_product].usedBy.forEach(key_element => {
        if (storage[key_product].stock >= storage[key_element].require[key_product]) {
          storage[key_element].complete[key_product] = true;
        }
    });
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
    storage = this.checkJuice(storage);
    this.setState({
      storage,
      buildings
    });
  }

  upgradeBuilding = key_building => {
    let storage = { ...this.state.storage };
    let buildings = { ...this.state.buildings };
    storage[currency].stock -= buildings[key_building].price;
    buildings[key_building].level += 1;
    buildings[key_building].price *= 2;
    storage = this.checkJuice(storage);
    this.setState({
      storage,
      buildings
    });
  }

  autoJuice = () => {
    let storage = { ...this.state.storage };
    storage[currency].stock += this.state.production;
    storage = this.checkJuice(storage);
    this.setState({
      storage
    });
  }

  manualJuice = value => {
    let storage = { ...this.state.storage };
    storage[currency].stock += value;
    storage = this.checkJuice(storage);
    this.setState({
      storage
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
        <div className='header'>
          <JuiceProduction
            level={this.state.level}
            stock={this.state.storage[currency].stock}
            manualJuice={this.manualJuice} />
          <PlayerLevel
            storage={this.state.storage}
            level={this.state.level}
            levelUp={this.levelUp} />
        </div>
        <Buildings
          buildings={this.state.buildings}
          storage={this.state.storage}
          level={this.state.level}
          buyProduct={this.buyProduct}
          buyBuilding={this.buyBuilding}
          upgradeBuilding={this.upgradeBuilding} />
      </div>
    );
  }
}

export default App;