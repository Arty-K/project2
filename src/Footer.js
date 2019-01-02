import React, { Component } from 'react';
import Logo from './Logo';

class Footer extends Component {
    state = {
        text: [],
        textRU: 'Адрес: Украина, г. Кременчуг',
        textUA: 'Адреса: Україна, м. Кременчук'
    };
    render() {
        const ru = this.state.textRU;
        const ua = this.state.textUA;
        const whatLanguage = this.props.lang==='ru';


        return (
            <div>
                <div className="row
                                align-items-center
                                text-lg-center
                                footer
                                text-md-center
                                text-sm-center
                                bg-dark">
                <div className="col-xl-4 mob">
                    <Logo siteName={this.props.siteName}/>
                </div>
                    <div className="col-xl-4 align-middle font-weight-light">
                        <div className="px-1">
                            <p className="margin">
                                {whatLanguage ? ru : ua}
                                <i className="fas fa-home"></i>
                            </p>
                            <p className="margin"
                               data-toggle="tooltip"
                               data-placement="top"
                               title="Написать письмо">
                                <a className="href" href="mailto:arsenalplus@ukr.net">E-mail: arsenalplus@ukr.net</a>
                                <i className="fas fa-envelope"></i>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 font-weight-light">
                        <div className="px-1">
                            <p className="margin"
                               data-toggle="tooltip"
                               data-placement="top"
                               title="Позвонить">
                                <a className="href" href="tel:+380503085879">Vodafone: (050) - 308 - 58 - 76</a>
                                <i className="fas fa-phone"></i>
                            </p>
                            <p className="margin"
                               data-toggle="tooltip"
                               data-placement="top"
                               title="Позвонить">
                                <a className="href" href="tel:+380679968821">Kyivstar: (067) - 996 - 88 - 21</a>
                                <i className="fas fa-phone"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;