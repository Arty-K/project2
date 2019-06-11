import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View} from "mdbreact";

class Slideshow extends Component {
    render() {
        return (
            <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <View>
                            <img className="d-block w-100" src='/images/1-1.png' alt="First slide" />

                        </View>
                        <CarouselCaption>
                            <h3 className="h3">
                                ОБОРУДОВАНИЕ
                                EVOQUA (WALLACE&TIERNAN)
                            </h3>
                            <p className="p">европейское качество проверенное временем</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100" src='/images/1-2.png' alt="Second slide" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3">ЭЛЕКТРОЛИЗНАЯ
                                УСТАНОВКА
                                ES Line 12</h3>
                            <p className="p">до 12 кг / сутки активного хлора</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100" src='/images/1-3.png' alt="Third slide" />
                        </View>
                        <CarouselCaption>
                            <h3 className="h3">УЛЬТРАФИОЛЕТОВЫЕ
                                УСТАНОВКИ
                                BERSON</h3>
                            <p className="p">широкий модельный ряд для различных задач</p>
                        </CarouselCaption>
                    </CarouselItem>

                </CarouselInner>
            </Carousel>
        );
    }
}

export default Slideshow;