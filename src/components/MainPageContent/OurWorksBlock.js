import React, { Component } from 'react';

export default class OurWorksBlock extends Component {
    
    state = {
        img1:"/images/works/img8.jpg",
        img2:"/images/works/img9.jpg",
        img3:"/images/works/img10.jpg"
    };

    render() {
        return (
            <div className="container">
                <div className="row py-4">
                <div className="card-deck">

                    <div className="card mb-4">
                        <div className="view overlay">
                            <img className="card-img-top" src={this.state.img1} alt="1"/>
                            <a href="/">
                            </a>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="view overlay">
                            <img className="card-img-top" src={this.state.img2} alt="1"/>
                            <a href="/">
                            </a>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="view overlay">
                            <img className="card-img-top" src={this.state.img3} alt="1"/>
                            <a href="/">
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}