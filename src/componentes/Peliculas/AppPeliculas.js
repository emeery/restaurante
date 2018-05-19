import React from 'react';
import BarraBuscadora from './BarraBuscadora';
import PeliculaDetalle from './PeliculaDetalle';
import YTSearch  from 'youtube-api-search';

const API_KEY = 'AIzaSyBrovGRv5KkhekeTb6TmLbWfNqKbpTAmWU';

YTSearch({key: API_KEY, termino:'futbol'}, function(dato){
    console.log(dato);
})
class AppPeliculas extends React.Component {
    render() {
        return(<div>
                <h2>Peliculas</h2>
                <BarraBuscadora
                />
            </div>)
    }
}
export default AppPeliculas;