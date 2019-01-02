import React, { Component } from 'react';
import MapContainer from './MapContainer';

class Contact extends Component {
    state = {
        textRU:{
            title:'КОНТАКТЫ',
            desc:'Если у Вас возникли вопросы - Вы всегда можете связаться ' +
                 'с нами по телефону или через электронную почту',
            address:'Украина, Полтавская область, г. Кременчуг, 39623, ул.Гвардейская 14а оф. 77'

        },
        textUA:{
            title:'КОНТАКТИ',
            desc:'Якщо у Вас є запитання - Ви завжди можете зв`язатися з нами по телефону або через електронну скриньку',
            address:'Україна, Полтавська область, м. Кременчук, 39623, вул.Гвардійська 14а оф. 77'
        }
    };
    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang ==='ru';

        return(
            <div className="container">

                <div className="row text-center">
                    <div className="col py-4">
                        <h1 className="">{whatLanguage? ru.title: ua.title}</h1>
                    </div>
                </div>
                <hr/>
                <div className="row text-center">
                    <div className="col pt-5 pb-4">
                        {whatLanguage? ru.desc: ua.desc}
                        <br/>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-xl-6 height-min">
                        <div className="row ">

                            <div className="col-xl-1 padding-mob">
                                <i className="fas fa-map-marker-alt p"></i>
                            </div>
                            <div className="col-xl-11 padding-mob">
                                <span className="font-weight-light">{whatLanguage? ru.address: ua.address}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-1 padding-mob">
                                <i className="fas fa-envelope p"></i>
                            </div>
                            <div className="col-xl-11 padding-mob">
                                <span className="font-weight-light">
                                    <a className="href" href="mailto:arsenalplus@ukr.net">E-mail: arsenalplus@ukr.net</a>
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-1 padding-mob">
                                <i className="fas fa-phone p"></i>
                            </div>
                            <div className="col-xl-11 padding-mob">
                                <span className="font-weight-light">
                                    <a className="href" href="mailto:arsenalplus@ukr.net">+38 (050) 308 - 58 - 76</a>
                                </span>
                            </div>
                        </div><div className="row">
                        <div className="col-xl-1 padding-mob">
                            <i className="fas fa-phone p"></i>
                        </div>
                        <div className="col-xl-11 padding-mob">
                                <span className="font-weight-light">
                                    <a className="href" href="mailto:arsenalplus@ukr.net"> +38 (067) 996 - 88 - 21</a>
                                </span>
                        </div>
                    </div>

                    </div>
                    <div className="col-xl-6 height-min">
                    <MapContainer/>
                    </div>

                </div>


            </div>
        )
    }
}


export default Contact;