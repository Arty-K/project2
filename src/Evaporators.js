import React, { Component } from 'react';

class Evaporators extends Component {
    render(){
        const ru = this.props.ru;
        const ua = this.props.ua;
        const img = this.props.img;
        const whatLanguage = this.props.lang ==='ru';
        console.log(whatLanguage);
        return (
            <div id="accordion">

                <div className="card">
                    <div className="card-header" id="headingEvaporator">
                        <h5 className="mb-0">
                            <button className="btn btn-outline-dark btn-block text-truncate"
                                    data-toggle="collapse"
                                    data-target="#collapseEvaporator"
                                    aria-expanded="false"
                                    aria-controls="collapseEvaporator">
                                {whatLanguage ? ru.evaporator_title_2 : ua.evaporator_title_2}
                            </button>
                        </h5>
                    </div>

                    <div id="collapseEvaporator"
                         className="collapse"
                         aria-labelledby="headingEvaporator"
                         data-parent="#accordion">
                        <div className="card-body font-weight-light text-justify">
                            <div className="row align-items-center">
                                <div className="col-lg-3
                                                text-center
                                                d-none d-lg-block">
                                    <img className="card-img-top wallace-img widt" src={img.img5.path} alt={img.img5.alt}/>
                                </div>
                                <div className="col-lg-9 ">
                                    <h5>{whatLanguage ? ru.evaporator_h5 : ua.evaporator_h5}</h5>
                                    <p>{whatLanguage ? ru.evaporator_p1 : ua.evaporator_p1}</p>
                                    <p>{whatLanguage ? ru.evaporator_p2 : ua.evaporator_p2}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 className="text-center">{whatLanguage ? ru.evaporator_list_title : ua.evaporator_list_title}</h5>
                                    <hr/>
                                    {
                                        whatLanguage ?
                                            ru.evaporator_list.map(key => <li key={key}>{key}</li>)
                                            :
                                            ua.evaporator_list.map(key => <li key={key}>{key}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Evaporators;