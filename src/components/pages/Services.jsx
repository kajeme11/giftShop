import React from 'react';
import "./Services.css";
import './General.css';


export const Services = () => {
    return(
        <div className="mainContainer services-container">
            <div className="services content">
                <div className="services-list">
                   <table className="table-services">
                       <tbody>
                        <tr>
                            <th>Services</th>
                        </tr>
                        <tr>
                            <td>Productos Nicaraguenses</td>
                        </tr>
                        <tr>
                            <td>Aguas Auromaticas</td>
                        </tr>
                        <tr>
                            <td>Articulos</td>
                        </tr>
                        <tr>
                            <td>Productos Natutales</td>
                        </tr>
                        <tr>
                            <td>Inciensos Aromaticos</td>
                        </tr>
                        <tr>
                            <td>Cajas De Regalo</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    );
};