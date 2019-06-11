import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class Prominent extends Component {

    state = {
        textRU:{
            title:'Продукция Prominent',
            list:['Дозирующие насосы','Контроллеры и анализаторы'],
            button:'Перейти к разделу'
        },
        textUA:{
            title:'Продукція Prominent',
            list:['Дозуючі насоси','Контролери и аналізатори'],
            button:'Перехід до розділу'
        }
    };

    static propTypes = {
        lang: PropTypes.string,
        img: PropTypes.string
    }

    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang ==='ru';

        return (
            <div className="row py-3 bord">
                <div className="col-lg-6">
                    <h4 className="text-left">{whatLanguage? ru.title: ua.title}</h4>
                    {whatLanguage ?
                        ru.list.map(key => <li  className="font-weight-light" key={key}>{key}</li>)
                        :
                        ua.list.map(key => <li  className="font-weight-light" key={key}>{key}</li>)
                    }
                    {/*<Link to='/Продукция Prominent'>*/}
                        <button
                            type="button"
                            className="btn
                                   btn-outline-dark
                                   btn-sm
                                   btn-block">
                            { whatLanguage ? ru.button : ua.button}
                        </button>
                    {/*</Link>*/}
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                </div>

                <div className="col-lg-3 d-none d-lg-block">
                    <img className="card-img-top widt" src={this.props.img} alt="1"/>
                </div>
            </div>
        );
    }
}

