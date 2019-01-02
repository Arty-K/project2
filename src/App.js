import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import langs from './langs';
import MainPageContent from './MainPageContent';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Equipment from './Equipment';

import EslinePage from './EslinePage';
import BersonPage from './BersonPage';
import ClorinePage from './ChlorinePage';
import ProminentPage from './ProminentPage';


import Portfolio from './Portfolio';


class App extends Component {
    state = {
        siteName: 'арсенал-плюс',
        lang: {},
        pageClicked: {},
        pageNumber: {},
        partnerText: {},
        slideInfo: {},
        footerInfo: {}
    };


    componentWillMount() {
        //check if language exist, if no - set 'ru' to default state value
        const ru = langs.langRU;
        const ua = langs.langUA;
        const lang = {...this.state.lang};
        if (!lang.name || lang.name === 'ua') {
            this.setState({ lang: ru });
        }
    }


   componentDidMount() {
    console.log(this.state.pageClicked)
    }


    _whatPageClicked = (key) => {
        this.setState({ pageClicked: key });
            switch (key) {

                case "Каталог оборудования":
                    this.setState({ pageNumber: 1 });
                    console.log(1, key);
                    break;

                case "Портфолио":
                    this.setState({ pageNumber: 2 });
                    console.log(2, key);
                    break;

                case "Контакты":
                    this.setState({ pageNumber: 3 });
                    console.log(3, key);
                    break;

                case "Каталог обладнання":
                    this.setState({ pageNumber: 4});
                    console.log(4, key);
                    break;

                case "Портфоліо":
                    this.setState({ pageNumber: 5 });
                    console.log(5, key);
                    break;

                case "Контакти":
                    this.setState({ pageNumber: 6 });
                    console.log(6, key);
                    break;

                default:
                    console.log('main page');

            }

    };


    _changeLanguage = () => {
        const lang = {...this.state.lang};
        const ru = langs.langRU;
        const ua = langs.langUA;
        if  (lang.name === 'ru'){
            return this.setState({ lang: ua })
        }
        if (lang.name === 'ua'){
            return this.setState({lang: ru})
        }
    };


    render() {
        return (
            <div className="container-fluid text-light bg-dark">
                <BrowserRouter>
                    <div>

                        <Header
                            siteName={this.state.siteName}
                            key={this.state.key}
                            lang={this.state.lang}
                            _whatPageClicked={this._whatPageClicked}
                            _changeLanguage={this._changeLanguage}
                        />

                        <Route exact path="/" render={props=><MainPageContent lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Каталог оборудования' render={props=><Equipment lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Портфолио' render={props=><Portfolio lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Контакты' render={props=><Contact lang={this.state.lang.name} {...props}/>} />

                        <Route path='/Каталог обладнання' render={props=><Equipment lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Портфоліо' render={props=><Portfolio lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Контакти' render={props=><Contact lang={this.state.lang.name} {...props}/>}  />

                        <Route path='/Производство гипохлорита натрия' render={props=><EslinePage lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Обеззараживание ультрафиолетом' render={props=><BersonPage lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Дозирование и обеззараживание хлор-газом' render={props=><ClorinePage lang={this.state.lang.name} {...props}/>} />
                        <Route path='/Продукция Prominent' render={props=><ProminentPage lang={this.state.lang.name} {...props}/>} />
                        <Route component={MainPageContent} />
                    </div>
                </BrowserRouter>

                <Footer
                    siteName={this.state.siteName}
                    lang={this.state.lang.name}
                />

            </div>
        );
    }
}


export default App;

