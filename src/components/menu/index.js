import React from 'react';
import { Link } from 'react-router-dom';

import Foto from '../../img/foto.jpg';

import './style.css'


export default class index extends React.Component{
    render(){
        return(
            <>
                <div className="menu">
                    <div className="container-menu">
                        <img src={Foto} />
                        <ul>
                            <li><Link to="/">sobre</Link></li>
                            <li><Link to="/experience">experiência</Link></li>
                            <li><Link to="/formation">formação</Link></li>
                            <li><Link to="/skills">habilidades</Link></li>
                        </ul>
                    </div>
                    <p className="notresponsive">Not Responsive</p>
                </div>

            </>
        );
    }
}

