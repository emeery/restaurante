import React from 'react';
import Contacto from '../componentes/Contacto';
const ListaContacto = (props) => (
    <div>
        {
            props.usuarios.map((datoDinamico, i)=>
                <Contacto
                contador={i+1}
                key={datoDinamico.id}
                nombre={datoDinamico.name}
                sitio={datoDinamico.contact.site}
                telefono={datoDinamico.contact.phone}
                estado={datoDinamico.address.state}
                ciudad={datoDinamico.address.city}
                usuarios={props.usuarios}
                latitud={datoDinamico.address.location.lat}
                longitud={datoDinamico.address.location.lng}
                /> 
            )
        }        
    </div>
)
export default ListaContacto