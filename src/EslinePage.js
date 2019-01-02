import React, { Component } from 'react';
import eslineText from './eslineText';

class EslinePage extends Component {
    state = {

    };

    render() {
        const ru = eslineText.textRU;
        const ua = eslineText.textUA;
        const img = eslineText.img;
        const whatLanguage = this.props.lang ==='ru';

        return (
            <div className="container">
                <div className="row py-4 text-center">
                    <h1>
                        {whatLanguage ? ru.title : ua.title}
                    </h1>
                </div>
                <hr/>
                <div className="row font-weight-light text-justify">
                    <div className="col-xl-4 text-center">
                        <img className="card-img-top esline-img d-none d-xl-block" src={img.img1.path} alt={img.img1.alt}/>
                        <button type="button" className="btn btn-secondary btn-md btn-block">{whatLanguage ? ru.button : ua.button}</button>
                    </div>
                    <div className="col-xl-8">
                        <h5>{whatLanguage ? ru.h5_1 : ua.h5_1}</h5>
                        <p>{whatLanguage ? ru.h5text_1 : ua.h5text_1}</p>
                        <h5>{whatLanguage ? ru.h5_2 : ua.h5_2}</h5>
                        <p>{whatLanguage ? ru.h5text_2 : ua.h5text_2}</p>
                    </div>
                </div>

                <div className="row font-weight-light text-justify pb-5">
                    <div className="col-xl-12">
                        <p>{whatLanguage ? ru.h5text_3 : ua.h5text_3}</p>
                    </div>
                </div>

                <div className="row font-weight-light pb-5">
                    <div className="col-lg-6">
                        <h5 className="text-center">{whatLanguage ? ru.list_title_1 : ua.list_title_1}</h5>
                        <hr/>
                        <p>{whatLanguage ? ru.list_p_1 : ua.list_p_1}</p>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.list_text_1.map(key => <li key={key}>{key}</li>)
                                :
                                ua.list_text_1.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text-center">{whatLanguage ? ru.list_title_2 : ua.list_title_2}</h5>
                        <hr/>
                        <p>{whatLanguage ? ru.list_p_2 : ua.list_p_2}</p>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.list_text_2.map(key => <li key={key}>{key}</li>)
                                :
                                ua.list_text_2.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                </div>

                <div className="row font-weight-light pb-5">
                    <div className="col-lg-6">
                        <h5 className="text-center">{whatLanguage ? ru.list_title_3 : ua.list_title_3}</h5>
                        <hr/>
                        <p>{whatLanguage ? ru.list_p_3 : ua.list_p_3}</p>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.list_text_3.map(key => <li key={key}>{key}</li>)
                                :
                                ua.list_text_3.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                    <div className="col-lg-6">
                        <h5 className="text-center">{whatLanguage ? ru.list_title_4 : ua.list_title_4}</h5>
                        <hr/>
                        <p>{whatLanguage ? ru.list_p_4 : ua.list_p_4}</p>
                        <hr/>
                        {
                            whatLanguage ?
                                ru.list_text_4.map(key => <li key={key}>{key}</li>)
                                :
                                ua.list_text_4.map(key => <li key={key}>{key}</li>)
                        }
                    </div>
                </div>

            </div>



        );
    }
}

export default EslinePage;

