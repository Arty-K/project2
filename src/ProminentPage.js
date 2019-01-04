import React, { Component } from 'react';
import PropTypes from 'prop-types';

import prominentText from './prominentText';


export default class ProminentPage extends Component {

    static propTypes = {
        lang: PropTypes.string
    }

    render() {
        const ru = prominentText.textRU;
        const ua = prominentText.textUA;
        const img = prominentText.img;
        const whatLanguage = this.props.lang ==='ru';

        return (
            <div className="container">
                <div className="row py-4 ">
                    <div className="col-lg-12 text-center">
                        <h1>
                            {whatLanguage ? ru.title_control : ua.title_control}
                        </h1>
                    </div>

                </div>

                <div className="row font-weight-light text-justify align-items-center">
                    <div className="col-xl-4 d-none d-xl-block">
                        <img className="card-img-top" src={img.img1.path} alt={img.img1.alt}/>
                    </div>
                    <div className="col-xl-8 align-items-center">
                        <p>{whatLanguage ? ru.p_control_1 : ua.p_control_1}</p>
                        <h5>{whatLanguage ? ru.h5_control_1 : ua.h5_control_1}</h5>
                        <p>{whatLanguage ? ru.p_control_3 : ua.p_control_3}</p>

                    </div>
                </div>
                <div className="row font-weight-light text-justify">
                    <div className="col-xl-12">
                        <p>{whatLanguage ? ru.p_control_2 : ua.p_control_2}</p>
                    </div>
                </div>
                <div className="row font-weight-light text-justify pb-3">
                    <div className="col-xl-6">
                        <h5 className="text-center">{whatLanguage ? ru.control_list_title_1 : ua.control_list_title_1}</h5>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.control_list_1.map(key => <li key={key}>{key}</li>)
                                :
                                ua.control_list_1.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                    <div className="col-xl-6">
                        <h5 className="text-center">{whatLanguage ? ru.control_list_title_2 : ua.control_list_title_2}</h5>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.control_list_2.map(key => <li key={key}>{key}</li>)
                                :
                                ua.control_list_2.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                </div>



                <div className="row py-4 ">
                    <div className="col-lg-12 text-center">
                        <h1>
                            {whatLanguage ? ru.title_pump : ua.title_pump}
                        </h1>
                    </div>

                </div>

                <div className="row font-weight-light text-justify align-items-center">
                    <div className="col-xl-4  d-none d-xl-block">
                        <img className="card-img-top prominent-pump" src={img.img2.path} alt={img.img2.alt}/>
                    </div>
                    <div className="col-xl-8 align-items-center">
                        <p>{whatLanguage ? ru.p_pump_1 : ua.p_pump_1}</p>
                        <h5>{whatLanguage ? ru.h5_pump_1 : ua.h5_pump_1}</h5>
                        <p>{whatLanguage ? ru.p_pump_2 : ua.p_pump_2}</p>
                    </div>
                </div>

                <div className="row font-weight-light text-justify pb-5">
                    <div className="col-xl-6">
                        <h5 className="text-center">{whatLanguage ? ru.pump_list_title_2 : ua.pump_list_title_2}</h5>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.pump_list_2.map(key => <li key={key}>{key}</li>)
                                :
                                ua.pump_list_2.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                    <div className="col-xl-6">
                        <h5 className="text-center">{whatLanguage ? ru.pump_list_title_3 : ua.pump_list_title_3}</h5>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.pump_list_3.map(key => <li key={key}>{key}</li>)
                                :
                                ua.pump_list_3.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                </div>

            </div>
        );
    }
}

