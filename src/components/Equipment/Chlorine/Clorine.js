import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Clorine extends Component {
    state = {
        textRU:{
            title:'Дозирование и обеззараживание хлор-газом',
            list:['Хлораторы','Испарители','Контроллеры и анализаторы'],
            button:'Перейти к разделу'
        },
        textUA:{
            title:'Дозування та знезараження хлор-газом',
            list:['Хлоратори','Випарювачі','Контролери и аналізатори'],
            button:'Перехід до розділу'
        }
    };

    static propTypes = {
        lang: PropTypes.string,
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
                    ru.list.map(key => <li className="font-weight-light" key={key}>{key}</li>)
                    :
                    ua.list.map(key => <li  className="font-weight-light" key={key}>{key}</li>)
                }
                {/*<Link to='/Дозирование и обеззараживание хлор-газом'>*/}
                    <button
                        type="button"
                        className="btn
                                   btn-outline-dark
                                   btn-sm
                                   btn-block
                                 "
                    >
                        {whatLanguage ? ru.button : ua.button}
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

