import React, { Component } from 'react';

class Controllers extends Component {
    render(){
        const ru = this.props.ru;
        const ua = this.props.ua;
        const img = this.props.img;
        const whatLanguage = this.props.lang ==='ru';

        return (
            <div id="accordion">

                <div className="card">
                    <div className="card-header" id="headingController">
                        <h5 className="mb-0">
                            <button className="btn btn-outline-dark btn-block text-truncate"
                                    data-toggle="collapse"
                                    data-target="#collapseController"
                                    aria-expanded="false"
                                    aria-controls="collapseController">
                                {whatLanguage ? ru.control_title_2 : ua.control_title_2}
                            </button>
                        </h5>
                    </div>

                    <div id="collapseController"
                         className="collapse"
                         aria-labelledby="headingController"
                         data-parent="#accordion">
                        <div className="card-body font-weight-light text-justify">
                            <div className="row align-items-center">
                                <div className="col-lg-3 text-center d-none d-lg-block">
                                    <img className="card-img-top wallace-img widt" src={img.img6.path} alt={img.img6.alt}/>
                                </div>
                                <div className="col-lg-9 ">
                                    <h5>{whatLanguage ? ru.control_h5_1 : ua.control_h5_1}</h5>
                                    <p>{whatLanguage ? ru.control_p1 : ua.control_p1}</p>

                                </div>
                            </div>

                            <hr/>

                            <div className="row align-items-center">
                                <div className="col-lg-3
                                                text-center
                                                d-none d-lg-block">
                                    <img className="card-img-top wallace-img widt" src={img.img7.path} alt={img.img7.alt}/>
                                </div>
                                <div className="col-lg-9 ">
                                    <h5>{whatLanguage ? ru.control_h5_2 : ua.control_h5_2}</h5>
                                    <p>{whatLanguage ? ru.control_p2 : ua.control_p2}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Controllers;