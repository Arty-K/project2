import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Chlorinators extends Component {
    static propTypes = {
        ru: PropTypes.object,
        ua: PropTypes.object,
        img: PropTypes.string,
        lang: PropTypes.string
    };
    render(){
        const ru = this.props.ru;
        const ua = this.props.ua;
        const img = this.props.img;
        const whatLanguage = this.props.lang ==='ru';
        return (
            <div id="accordion">

                <div className="card ">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-outline-dark btn-block text-truncate"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                            >
                                {whatLanguage ? ru.s10k : ua.s10k}
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne"
                         className="collapse"
                         aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body font-weight-light text-justify">
                            <div className="row align-items-center">
                                <div className="col-lg-3
                                                text-center
                                                d-none d-lg-block
                                ">
                                    <img className="card-img-top wallace-img widt" src={img.img2.path} alt={img.img2.alt}/>
                                </div>
                                <div className="col-lg-9 ">
                                    <p>{whatLanguage ? ru.s10k_p1 : ua.s10k_p1}</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <p>{whatLanguage ? ru.s10k_p2 : ua.s10k_p2}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 className="text-center">{whatLanguage ? ru.s10k_list_title_1 : ua.s10k_list_title_1}</h5>
                                    <hr/>
                                    {
                                        whatLanguage ?
                                            ru.s10k_list_1.map(key => <li key={key}>{key}</li>)
                                            :
                                            ua.s10k_list_1.map(key => <li key={key}>{key}</li>)
                                    }
                                </div>
                                <div className="col-lg-6">
                                    <h5 className="text-center">{whatLanguage ? ru.s10k_list_title_2 : ua.s10k_list_title_2}</h5>
                                    <hr/>

                                    {
                                        whatLanguage ?
                                            ru.s10k_list_2.map(key => <li key={key}>{key}</li>)
                                            :
                                            ua.s10k_list_2.map(key => <li key={key}>{key}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-outline-dark btn-block text-truncate"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo">
                                {whatLanguage ? ru.v10k : ua.v10k}
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo"
                         className="collapse font-weight-light"
                         aria-labelledby="headingTwo"
                         data-parent="#accordion">
                        <div className="card-body font-weight-light text-justify">
                            <div className="row">
                                <div className="col-lg-3
                                                text-center
                                                d-none d-lg-block"
                                >
                                    <img className="card-img-top wallace-img widt" src={img.img3.path} alt={img.img3.alt}/>
                                </div>
                                <div className="col-lg-9">
                                    <p>{whatLanguage ? ru.v10k_p1 : ua.v10k_p1}</p>
                                    <p>{whatLanguage ? ru.v10k_p2 : ua.v10k_p2}</p>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <h5>{whatLanguage ? ru.v10k_p3_title : ua.v10k_p3_title}</h5>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <p>{whatLanguage ? ru.v10k_p3 : ua.v10k_p3}</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <h5>{whatLanguage ? ru.v10k_p4_title : ua.v10k_p4_title}</h5>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <p>{whatLanguage ? ru.v10k_p4 : ua.v10k_p4}</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <h5>{whatLanguage ? ru.v10k_p5_title : ua.v10k_p5_title}</h5>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <p>{whatLanguage ? ru.v10k_p5 : ua.v10k_p5}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-outline-dark btn-block text-truncate"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree">
                                {whatLanguage ? ru.v2000 : ua.v2000}
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree"
                         className="collapse"
                         aria-labelledby="headingThree"
                         data-parent="#accordion">
                        <div className="card-body font-weight-light text-justify">
                            <div className="row align-items-center">
                                <div className="col-lg-3
                                                text-center
                                                d-none d-lg-block">
                                    <img className="card-img-top wallace-img widt" src={img.img4.path} alt={img.img4.alt}/>
                                </div>
                                <div className="col-lg-9">
                                    <p>{whatLanguage ? ru.v2000_p1 : ua.v2000_p1}</p>
                                    <p>{whatLanguage ? ru.v2000_p2 : ua.v2000_p2}</p>
                                    <h5>{whatLanguage ? ru.v2000_p3_title : ua.v2000_p3_title}</h5>
                                    <p>{whatLanguage ? ru.v2000_list_h5 : ua.v2000_list_h5}</p>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <hr/>
                                    {
                                        whatLanguage ?
                                            ru.v2000_list.map(key => <li key={key}>{key}</li>)
                                            :
                                            ua.v2000_list.map(key => <li key={key}>{key}</li>)
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