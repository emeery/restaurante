import React from 'react';
import {NavLink} from 'react-router-dom';
import {Fade, Zoom, Rotate} from 'react-reveal';
import material from '../imagenes/material.jpg';
import dinner from '../imagenes/dinner.png';
import { Parallax, Background } from 'react-parallax';
import {Tooltip} from 'react-tippy';

const Cabecera = (props) => (
  <div>
    <Parallax 
      strength={300}
      className='cabecera-parallax'
    >
        
        <div 
        className='cabecera__info' >
          
            <h1 className='cabecera__titulo'
              > { props.titulo } </h1> 
          
          <Fade right delay={2000}>
                  <hr></hr>
          </Fade>
          
          <p
          className='intelimetrica'
          >{props.subtitulo}</p>
         
            
          
            
        </div>
        <div className='espacio-cabecera'></div>
        
      <Background 
      className="custom-bg">
          <img src={dinner} />
      </Background>
      
    </Parallax>
  </div>
);
export default Cabecera;


// Cabecera.defaultProps = {
// titulo: 'Vuelos'
// }

