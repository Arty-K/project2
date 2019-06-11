import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}

                initialCenter={{
                    lat: 49.065783,
                    lng: 33.410033,
                }}
                zoom={12}
                scrollwheel={false}
                onClick={this.onMapClicked}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBed5CUYWKJlyC477_kVgU1rBmBOJ8SarE")
})(MapContainer)