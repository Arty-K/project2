import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class EsLine extends Component {

    state = {
        textRU: {
            title:"Производство гипохлорита натрия",
            desc:"Электролизная установка ES Line для производства гипохлорита натрия",
            button:"Перейти к разделу"
        },
        textUA: {
            title:"Виробництво гіпохлориту натрію",
            desc:"Електролізна установка ES Line для виробництва гіпохлориту натрію",
            button:"Перехід до розділу"
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
            <div className="row
                            align-items-center
                            py-3
                            bord"
            >
                <div className="col-lg-6">
                    <h4 className="text-left">{whatLanguage ? ru.title : ua.title}</h4>
                    <p className="font-weight-light">{whatLanguage ? ru.desc : ua.desc}</p>
                    {/*<Link to='/Производство гипохлорита натрия'>*/}
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

                <div className="col-lg-3 d-none d-lg-block"></div>

                <div className="col-lg-3 d-none d-lg-block">
                    <img className="card-img-top widt" src={this.props.img} alt="1"/>
                </div>
            </div>

        );
    }
}

export default EsLine;

