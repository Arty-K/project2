import React from "react";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            './images/works/img8.jpg',
            './images/works/img9.jpg',
            './images/works/img4.jpg',
            './images/works/img3.jpg',
            './images/works/img10.jpg',
            './images/works/img1.jpg',
            './images/works/img7.jpg',
            './images/works/img2.jpg',
            './images/works/img6.jpg'
        ]
    };

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <div className="col-md-4" key={photoIndex}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </div>
            );
        })
    };

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <div className="container mt-5">
                <div className="mdb-lightbox">
                    <div className="row">
                        {this.renderImages()}
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default LightboxPage;