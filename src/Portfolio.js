import React from 'react';
import PropTypes from 'prop-types';

import LightboxPage from './LightboxPage';


export default class Portfolio extends React.Component {
    
    state = {
        textRU:{
            title:'НАШИ РАБОТЫ',
        },
        textUA:{
            title:'НАШІ РОБОТИ',
        }
    };

    static propTypes = {
        lang: PropTypes.string
    }

    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang ==='ru';

        return(
            <div>
                <div className="row text-center">
                    <div className="col py-4">
                        <h1>{whatLanguage? ru.title: ua.title}</h1>
                    </div>
                </div>
                <hr/>

                <LightboxPage/>

            </div>
        )
    }
}
