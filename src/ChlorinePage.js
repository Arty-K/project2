import React, { Component } from 'react';
import chlorineText from './chlorineText';

import Chlorinators from './Chlorinators';
import Evaporators from './Evaporators';
import Controllers from './Controllers';

class ChlorinePage extends Component {

    render() {
        const ru = chlorineText.textRU;
        const ua = chlorineText.textUA;
        const img = chlorineText.img;
        const whatLanguage = this.props.lang ==='ru';


        return (
            <div className="container">
                <div className="row py-4 text-center">
                    <h1>
                        {whatLanguage ? ru.title : ua.title}
                    </h1>
                </div>

                <div className="row font-weight-light text-justify align-items-center">
                    <div className="col-xl-4 ">
                        <img className="card-img-top wallace-img " src={img.img1.path} alt={img.img1.alt}/>
                    </div>
                    <div className="col-xl-8 align-items-center">
                        <p>{whatLanguage ? ru.text_1 : ua.text_1}</p>
                    </div>

                </div>

                <div className="row font-weight-light text-justify">

                    <p>{whatLanguage ? ru.text_2 : ua.text_2}</p>
                </div>

                <div className="py-4">
                    <div className="row font-weight-light">
                        <div className="col-lg-12 text-center">
                            <h2>{whatLanguage ? ru.chlorine_title : ua.chlorine_title}</h2>
                        </div>
                    </div>
                    <Chlorinators
                        ru = {ru}
                        ua = {ua}
                        img = {img}
                        lang={this.props.lang}
                    />
                </div>

                <div className="py-4">
                    <div className="row font-weight-light">
                        <div className="col-lg-12 text-center">
                            <h2>{whatLanguage ? ru.evaporator_title : ua.evaporator_title}</h2>
                        </div>
                    </div>
                    <Evaporators
                        ru = {ru}
                        ua = {ua}
                        img = {img}
                        lang={this.props.lang}
                    />
                </div>
                <div className="ry-4">
                    <div className="row font-weight-light">
                        <div className="col-lg-12 text-center">
                            <h2>{whatLanguage ? ru.control_title : ua.control_title}</h2>
                        </div>
                    </div>
                    <Controllers
                        ru = {ru}
                        ua = {ua}
                        img = {img}
                        lang={this.props.lang}
                    />
                </div>


            </div>

        );
    }
}

export default ChlorinePage;

