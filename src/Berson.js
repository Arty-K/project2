import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Berson extends Component {
    state = {
        textRU:{
            title:'Обеззараживание ультрафиолетом',
            list:['Ультрафиолетовые установки Berson'],
            button:"Перейти к разделу"
        },
        textUA:{
            title:'Знезаражування ультрафіолетом',
            list:['Ультрафіолетові установки Berson'],
            button:'Перехід до розділу'
        }
    };
    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang ==='ru';

        return (
            <div className="row py-3 bord">
                <div className="col-lg-6">
                    <h4 className="text-left">{ whatLanguage ? ru.title: ua.title}</h4>
                    {
                        whatLanguage ?
                            ru.list.map(key => <p  className="font-weight-light" key={key}>{key}</p>)
                            :
                            ua.list.map(key => <p  className="font-weight-light" key={key}>{key}</p>)
                    }
                    <Link to='/Обеззараживание ультрафиолетом'>
                        <button
                            type="button"
                            className="btn
                                   btn-outline-dark
                                   btn-sm
                                   btn-block">
                            { whatLanguage ? ru.button : ua.button}
                        </button>
                    </Link>

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

export default Berson;

