import React from 'react';
import "./Services.css";
import './General.css';


export const Services = () => {
    return(
        <div className="mainContainer services-container">
            <div className="services content">
                <h2 className="title-name">Service & Prices</h2>
                <div className="services-list">
                   <table className="table-services">
                       <tbody>
                        <tr>
                            <th>Service</th>
                                <th>Price</th>
                        </tr>
                        <tr>
                            <td>Root touch up</td>
                            <td>$105</td>
                        </tr>
                        <tr>
                            <td>All over color</td>
                            <td>$135</td>
                        </tr>
                        <tr>
                            <td>Partial highlights</td>
                            <td>$185-$225</td>
                        </tr>
                        <tr>
                            <td>Full highlight</td>
                            <td>$225-265</td>
                        </tr>
                        <tr>
                            <td>Partial Balayage</td>
                            <td>$225-265</td>
                        </tr>
                        <tr>
                            <td>Full Balayage</td>
                            <td>$265-295</td>
                        </tr>
                        <tr>
                            <td>Blowdry/style</td>
                            <td>$65</td>
                        </tr>
                        <tr>
                            <td>Womens haircut</td>
                            <td>$80</td>
                        </tr>
                        <tr>
                            <td>Toner</td>
                            <td>$95-135</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        </div>
    );
};