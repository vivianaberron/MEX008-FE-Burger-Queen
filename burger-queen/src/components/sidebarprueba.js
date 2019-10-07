// import React, { Component } from 'react';
// import MenuEnsaladas from '../components/menuEnsalada';
// import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import '../styles/Sidebar.css';
// import salad from '../img/salad.png'; 
// import 'react-web-tabs/dist/react-web-tabs.css';
// import store from 'storejs';
// import { InputGroup, Input, Label, Button } from 'reactstrap';
// import { withRouter } from 'react-router-dom';

// // import Footer from '../components/Footer';

// class Sidebarprueba extends Component {
//     state = {
//         value: '',
//         name: '',
//     }
//     onSubmit = e => {
//         console.log('Holi');
//         e.preventDefault();
//         localStorage.setItem('orden', JSON.stringify(this.state));
//         //console.log(JSON.parse(localStorage.getItem('clientes')));
//         //this.props.agregarClientes(this.state.name);
        
//     }
//     onChange = e => {
//         this.setState(
//             {
//                 value: e.target.value,
//                 name: e.target.name,
//             }
//         )}
    
//   render() {
//     return (
//       <Tabs defaultTab="vertical-tab-one" vertical>
//         {/* Mobile */}
//          <div className="mobile_tabs">
//         <TabList>
//           <div id="salad_tab">
//           <Tab tabFor="vertical-tab-three"><img className="Sidebar_img" src={salad} alt="Ensaladas"></img></Tab>
//           </div>
//         </TabList>
//         </div>
//         <TabPanel tabId="vertical-tab-three">
        
//                     <div className="ensalada"> 
                    
//                         <div className="ensalada1">
//                         <form onSubmit={this.onSubmit}>
//                 <Label className="text-center">
//                 <h4>
//                 <span className="font-weight-blod"></span>
//                 </h4></Label>
//                 <br />
               
//                 <InputGroup className="InputGroup" size="lg">
//                 <Input 
//                 name="delirium"
//                 type="number" 
//                 placeholder="Nombre"
//                 value={this.state.value}
//                 onChange={this.onChange}/>
                
//                 </InputGroup>


//                 <br />
//                 <br />
//                 <Button className="button"
//                          size="lg"
//                         color="warning" 
//                         type="submit"
//                         onSubmit={this.onSubmit} block>
//                           Añadir
//                     </Button>
//             </form>
//                                 <MenuEnsaladas texto = 'DELIRIUM'/> 
//                                 <MenuEnsaladas text1 = '$50 '/>
                                
//                         </div>
//                     </div>
             
//         </TabPanel>
//         <div>
       
//         </div>
      
//       </Tabs>
//     );
//   }
// }

// export default withRouter(Sidebarprueba);