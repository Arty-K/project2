import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EsLine from './EsLine';
import Berson from './Berson';
import Clorine from './Clorine';
import Prominent from './Prominent';


export default class Equipment extends Component {
    state = {
        img1:"/images/2.png",
        img2:"/images/bersonslide.png",
        img3:"/images/v10k-2.png",
        img4:"/images/gamma.png",
        text:[],
        textRU:'КАТАЛОГ ОБОРУДОВАНИЯ',
        textUA:'КАТАЛОГ ОБЛАДНАННЯ'
    };

    static propTypes = {
        lang: PropTypes.string,
    }

    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang ==='ru';
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col py-4">
                        <h1>{whatLanguage ? ru : ua}</h1>
                    </div>
                </div>
                <hr/>

                    <EsLine
                        img={this.state.img1}
                        lang={this.props.lang}
                    />
                    <Berson
                        img={this.state.img2}
                        lang={this.props.lang}
                    />
                    <Clorine
                        img={this.state.img3}
                        lang={this.props.lang}
                    />
                    <Prominent
                        img={this.state.img4}
                        lang={this.props.lang}
                    />

            </div>

        )
    }
}


