import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapMarker } from '../../assets/images';
import { Map, TileLayer } from 'react-leaflet';

import { PageMap, SideBar } from './styles';
import 'leaflet/dist/leaflet.css';


const OrfarnatedMap: React.FC = () => {
  return (
    <PageMap>
      <SideBar>
        <header>
          <MapMarker />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </footer>
      </SideBar>
      < Map 
        center={[-2.5147906,-44.2455146]}
        zoom={19}
        style={{ width: '100%', height: '100%'}}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </Map>
      <Link to="">
        <FiPlus size={32} color="#fff" />
      </Link>
    </PageMap>
  );
}

export default OrfarnatedMap;