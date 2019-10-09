import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../styles/Sidebar.css';



import HamburguesasData from '../Data/menu/hamburguesas.json';
import PizzasData from '../Data/menu/pizzas.json';
//import PostresData from '../Data/menu/postres.json';
import MalteadasData from '../Data/menu/malteadas.json';
import EnsaladasData from '../Data/menu/ensaladas.json';
import JochosData from '../Data/menu/jochos.json';


import HamburguesasJochos from './HamburgesasJochos';
import Pizzas from './Pizzas'
import Ensaladas from './Ensaladas';

import offer from '../img/offer.png';
import burger from '../img/burger.png';
import pizza from '../img/pizzaicon.png';
import salad from '../img/salad.png';
import hotdog from '../img/hot-dog.png';
import drinks from '../img/lemonade.png';
import Footer from '../components/Footer';

import '../styles/Sidebar.css';


class Sidebar extends Component {
        constructor(props){
                super(props)
                this.numberInputRef = React.createRef();
                this.state = {
                        ordenes: [],
                        ordenActual: {
                                cantidad: 0,
                                elemento: "",
                                precio: 0,
                                observaciones: ""
                        }
                }
        }
        onChangeHandler = e => {
                console.log(e.target.name, e.target.value)
                this.setState({
                        ordenActual:{
                        [e.target.name]: e.target.value,
                        }
                       // [e.target.number]: e.target.value
                });
        }

        checkHandler = e => {
                // console.log(e.target.value)
                this.setState({
                        ordenActual: {
                                precio: parseInt(e.target.value),
                                elemento: e.target.name
                        }
                })
        }

        submitHandler = () => {
                //console.log("agregando...", this.state)
                const orden = this.state.ordenActual;
                // const newOrdenState = [orden];
                // const ordenesActuales = this.state.ordenes;
                this.setState({
                        ordenes: [...this.state.ordenes, orden]
                })
        };

        confirmHandler = () => {
                console.log("confirmando orden", this.state)
                localStorage.setItem('ordenes', JSON.stringify(this.state));
                this.props.history.push('/TablaComanda');

        };

        render() {
                console.log(this.state);
                
    return (
        <>
        <Tabs defaultTab="vertical-tab-one" vertical>
        {/* Mobile */}

         <div className="mobile_tabs">
        <TabList>
        <div id="promo_tab">
          <Tab tabFor="vertical-tab-promo"><img className="Sidebar_img" src={offer} alt="promo"/></Tab>
          </div>
          <div id="burger_tab">
          <Tab tabFor="vertical-tab-one"><img className="Sidebar_img" src={burger} alt="salads"/></Tab>
          </div>
          <div id="pizza_tab">
          <Tab tabFor="vertical-tab-two"><img className="Sidebar_img" src={pizza} alt="salads"/></Tab>
          </div>
          <div id="salad_tab">
          <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"/></Tab>
          </div>
          <div id="Hot-dogs_tab">
          <Tab tabFor="vertical-tab-four"><img className="Sidebar_img" src={hotdog} alt="Hot-dogs"/></Tab>
          </div>
          <div id="drinks_tab">
          <Tab tabFor="vertical-tab-five"><img className="Sidebar_img" src={drinks} alt="Bebidas"/></Tab>
        </div>
        </TabList>
        </div>

        <div className="mobile_tabs">
        <TabPanel tabId="vertical-tab-promo">
        <div className="promo">
                <figure>
                <img id="promo_img" src={pizza} alt="Promos"></img>
                </figure>
                <h1>Miércoles pizza 2x1</h1>
        </div>
        </TabPanel>
        <TabPanel tabId="vertical-tab-one">
                <div className="hamburguesas">
                        {HamburguesasData.map((menuElement, index) =>{
                                return(    
                                        <HamburguesasJochos
                                        onChangeHandler={this.onChangeHandler}
                                        submitHandler={this.submitHandler}
                                        checkHandler={this.checkHandler} 
                                        name = {menuElement.name} 
                                        price={menuElement.price} 
                                        combo={menuElement.combo} 
                                        key={menuElement.id}
                                        ref={this.numberInputRef}/>
                                )
                        })}
                </div>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
                <div className="pizza">                        
                        {PizzasData.map((menuElement, index) =>{
                                return(    
                                        <Pizzas 
                                        onChangeHandler={this.onChangeHandler}
                                        submitHandler={this.submitHandler}
                                        checkHandler={this.checkHandler}
                                        name = {menuElement.name} 
                                        priceMed={menuElement.price.mediana}
                                        priceGran={menuElement.price.grande} 
                                        priceFam={menuElement.price.familiar}   
                                        key={menuElement.id}/>
                                )
                        })}
                </div>
                        
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
                <div className="ensalada"> 
                        {EnsaladasData.map((menuElement, index) =>{
                                        return(    
                                                <Ensaladas
                                                onChangeHandler={this.onChangeHandler}
                                                checkHandler={this.checkHandler}
                                                submitHandler={this.submitHandler}
                                                name={menuElement.name}
                                                price={menuElement.price}
                                                key={menuElement.id} />
                                        )
                        })}
                    </div>        
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
                <div className="jochos">
                        {JochosData.map((menuElement, index) =>{
                                return(  
                                        <HamburguesasJochos 
                                        onChangeHandler={this.onChangeHandler}
                                        submitHandler={this.submitHandler}
                                        checkHandler={this.checkHandler}
                                        name = {menuElement.name} 
                                        price={menuElement.price} 
                                        combo={menuElement.combo} 
                                        key={menuElement.id}/>
                                )
                        })}
                </div> 

        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
                <div className="bebidas">
                        {MalteadasData.map((menuElement, index) =>{
                                return(    
                                        <Ensaladas
                                        onChangeHandler={this.onChangeHandler}
                                        submitHandler={this.submitHandler}
                                        checkHandler={this.checkHandler}
                                        name={menuElement.name}
                                        price={menuElement.price}
                                        key={menuElement.id} />
                                )
                        })}
                    </div>  
        </TabPanel>
        <div>
        </div>
        </div>
        
             
         {/* Desktop */}
         <div className="desktop_tabs">
         <TabList>
        <div id="promo_tab">
          <Tab tabFor="vertical-tab-promo"><img className="Sidebar_img" src={offer} alt="promo"></img>Promos</Tab>
          </div>
          <div id="burger_tab-desktop">
          <Tab tabFor="vertical-tab-one"><img className="Sidebar_img" src={burger} alt="salads"></img>Hamburguesas</Tab>
          </div>
          <div id="pizza_tab-desktop">
          <Tab tabFor="vertical-tab-two"><img className="Sidebar_img" src={pizza} alt="salads"></img>Pizzas</Tab>
          </div>
          <div id="salad_tab-desktop">
          <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"></img>Ensalada</Tab>
          </div>
          <div id="Hot-dogs_tab-desktop">
          <Tab tabFor="vertical-tab-four"><img className="Sidebar_img" src={hotdog} alt="Hot-dogs"></img>Hot-dogs</Tab>
          </div>
          <div id="drinks_tab-desktop">
          <Tab tabFor="vertical-tab-five"><img className="Sidebar_img" src={drinks} alt="Bebidas"></img>Bebidas</Tab>
        </div>
        </TabList>
        <div className="desktop_tabs">
        <TabPanel tabId="vertical-tab-promo">
        <div className="promo">
        <figure>
                        <img id="promo_img" src={pizza} alt="Promos"></img>
                </figure>
                <h1>Miércoles pizza 2x1</h1>

        </div>
        </TabPanel>
        <TabPanel tabId="vertical-tab-one">
        <div className="hamburguesas">
                        {HamburguesasData.map((menuElement, index) =>{
                                return(    
                                        <HamburguesasJochos name = {menuElement.name} price={menuElement.price} combo={menuElement.combo} key={menuElement.id}/>
                                )
                        })}
                </div>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
                <div className="pizza">
                        {PizzasData.map((menuElement, index) =>{
                                return(    
                                        <Pizzas 
                                        name = {menuElement.name} 
                                        priceMed={menuElement.price.mediana}
                                        priceGran={menuElement.price.grande} 
                                        priceFam={menuElement.price.familiar}   
                                        key={menuElement.id}/>
                                )
                        })}
                </div>
                     
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
                <div className="ensalada"> 
                        {EnsaladasData.map((menuElement, index) =>{
                                return(    
                                        <Ensaladas
                                        name={menuElement.name}
                                        price={menuElement.price}
                                        key={menuElement.id} />
                                )
                        })}
                </div>      
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
                <div className="jochos">
                        {JochosData.map((menuElement, index) =>{
                                return(    
                                        <HamburguesasJochos name = {menuElement.name} price={menuElement.price} combo={menuElement.combo} key={menuElement.id}/>
                                )
                        })}
                </div> 
        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
                <div className="bebidas">
                        {MalteadasData.map((menuElement, index) =>{
                                return(    
                                        <Ensaladas
                                        name={menuElement.name}
                                        price={menuElement.price}
                                        key={menuElement.id} />
                                )
                        })}
                </div>  
        </TabPanel>

      </div>
      </div>
      
      </Tabs>
      <Footer 
      onChangeHandler={this.onChangeHandler}
      confirmHandler={this.confirmHandler}/>
      </>
    );
  }
}

export default withRouter(Sidebar);