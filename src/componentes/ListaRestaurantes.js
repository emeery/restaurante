import React from 'react';
import ListaRestaurantesItem 
from '../componentes/ListaRestaurantesItem';

const ListaRestaurantes = (props) => {
    return(<div>
            {props.contactos.length}
            {props.contactos.name}
        </div>)
}
export default ListaRestaurantes;


// class ListaRestaurantes extends React.Component {
//     constructor() {
//         super();
        
//     }
//     ListaUsuario() {
//         fetch('https://api.myjson.com/bins/1femoq')
//             .then(res => { return res.json(); 
//         }).then(dato => {
//                 console.log(dato);
//                 this.setState({
                    
//                     usuarios: dato
//                 })
//         })
//     }
//     componentDidMount() {
//         this.ListaUsuario();
//     }
//     render() {
        
//         {this.state.usuarios.map((item, i) => (
//             {props.contactos.lenght}    
            
//             <ListaRestaurantesItem
//             className='contenedor-usuarios'
//             usuarios={this.state.usuarios} 
//             key={i}
//             />
            
//         ))};
//         return(<div >
//             <h2 >Lista RESTAURANTES</h2>
//                 <ListaRestaurantesItem/>
//             </div>
//         );
//     }
// }
// export default ListaRestaurantes;

// {this.state.usuarios.map((o, index) => (
//     <ListaRestaurantesItem
//     key={this.state.id} 
//     nombre={this.state.nombre}
//     /> 
//         )) }