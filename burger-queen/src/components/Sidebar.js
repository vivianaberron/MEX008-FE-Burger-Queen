import React, { Component } from 'react';
import MenuEnsaladas from '../components/menuEnsalada';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import '../styles/Sidebar.css';
import burger from '../img/burger.png';
import pizza from '../img/pizzaicon.png';
import salad from '../img/salad.png';
import hotdog from '../img/hot-dog.png';
import drinks from '../img/lemonade.png'; 
import 'react-web-tabs/dist/react-web-tabs.css';



class Sidebar extends Component {
  render() {
    return (
      <Tabs defaultTab="vertical-tab-one" vertical>
        {/* Mobile */}
         <div className="mobile_tabs">
        <TabList>
          <div id="burger_tab">
          <Tab tabFor="vertical-tab-one"><img className="Sidebar_img" src={burger} alt="salads"></img></Tab>
          </div>
          <div id="pizza_tab">
          <Tab tabFor="vertical-tab-two"><img className="Sidebar_img" src={pizza} alt="salads"></img></Tab>
          </div>
          <div id="salad_tab">
          <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"></img></Tab>
          </div>
          <div id="Hot-dogs_tab">
          <Tab tabFor="vertical-tab-four"><img className="Sidebar_img" src={hotdog} alt="Hot-dogs"></img></Tab>
          </div>
          <div id="drinks_tab">
          <Tab tabFor="vertical-tab-five"><img className="Sidebar_img" src={drinks} alt="Bebidas"></img></Tab>
        </div>
        </TabList>
        </div>
        <div className="mobile_tabs">
        <TabPanel tabId="vertical-tab-one">
          <p>Hola aquí van las hamburguesas</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <p>Hola aquí van las pizzas</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
        <div>
            <MenuEnsaladas texto = 'DELIRIUM'/>
            <MenuEnsaladas text = 'Lechuga romana, col morada, Manzana, arandanos, nuez, limon y miel de maguey. '/>
            <MenuEnsaladas text1 = '$50'/>
            <MenuEnsaladas texto = 'PARAÍSO PERDIDO'/>
            <MenuEnsaladas text = 'Mix de lechugas frescas, quinoa, frijoles negros,aguacate, cilantro, jitomate, cebolla morada.'/>
            <MenuEnsaladas text1 = '$70'/>

        </div> 
        </TabPanel>
        <TabPanel tabId="vertical-tab-four">
          <p>Hola aquí van los hot-dogs </p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-five">
          <p>Hola aquí van las bebidas</p>
        </TabPanel>
        </div>
         {/* Desktop */}
         <div className="desktop_tabs">
        <TabList>
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
        <TabPanel tabId="vertical-tab-one-desktop">
          <p>Hola aquí van las hamburguesas</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-two-desktop">
          <p>Hola aquí van las pizzas</p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-three-desktop">
        <div id="salads_menu">
            <MenuEnsaladas texto = 'DELIRIUM'/>
            <MenuEnsaladas text = 'Lechuga romana, col morada, Manzana, arandanos, nuez, limon y miel de maguey. '/>
            <MenuEnsaladas text1 = '$50'/>
            <MenuEnsaladas texto = 'PARAÍSO PERDIDO'/>
            <MenuEnsaladas text = 'Mix de lechugas frescas, quinoa, frijoles negros,aguacate, cilantro, jitomate, cebolla morada.'/>
            <MenuEnsaladas text1 = '$70'/>

        </div> 
        </TabPanel>
        <TabPanel tabId="vertical-tab-four-desktop">
          <p>Hola aquí van los hot-dogs </p>
        </TabPanel>
        <TabPanel tabId="vertical-tab-five-desktop">
          <p>Hola aquí van las bebidas</p>
        </TabPanel>
        </div>
        </div>
      </Tabs>
    );
  }
}

export default Sidebar;