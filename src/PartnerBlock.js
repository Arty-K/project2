import React, { Component } from 'react';

class PartnerBlock extends Component {
    render() {
        const name = this.props.lang,
              title = ['чп "арсенал-плюс"', 'пп "арсенал-плюс"'],
              text = ['Партнер EVOQUA (Wallace&Tiernan) в Украине', 'Партнер EVOQUA (Wallace&Tiernan) в Україні'],
              iconsTitleRu = ['Помощь в подборе', 'Полный спектр услуг', 'Выполнение в срок'],
              iconsTextRu = ['Наши специалисты, имея большой опыт в продаже оборудования и комплектующих для водоподготовки помогут Вам подобрать необходимый продукт.',
                             'Мы оказываем услуги по: продаже, монтажу, гарантийному и послегарантийному обслуживанию оборудования для водоподготовки.',
                             'Поставка оборудования и проведение работ выполняется в приемлемый и заранее четко оговоренный с клиентом срок.'
                            ],
              iconsTitleUa = ['Допомога в підборі','Повний спектр послуг','Виконання в строк'],
              iconsTextUa = ['Наші фахівці, маючи великий досвід в продажу обладнання та комплектуючих для водопідготовки допоможуть Вам підібрати необхідний продукт.',
                             'Ми надаємо послуги з: продажу, монтажу, гарантійного та післягарантійного обслуговування обладнання для водопідготовки.',
                             'Поставка обладнання та проведення робіт виконується в прийнятний і заздалегідь чітко обумовлений з клієнтом термін.'];
        const whatLanguage = name === 'ru';
        return (
            <div className="container">
                <div className="py-4">
                <div className="row text-light bg-dark ">
                    <div className="col-sm">
                        <h4 className="text-center">
                            {whatLanguage ? title[0].toUpperCase() : title[1].toUpperCase()}
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h6 className="text-center">
                            {whatLanguage ? text[0].toUpperCase() : text[1].toUpperCase()}
                        </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img
                            className="icons"
                            src={require('./img/icons/1.png')}
                            alt=""
                        />
                        <h6>{whatLanguage ? iconsTitleRu[0] : iconsTitleUa[0]}</h6>
                        <p>{whatLanguage ? iconsTextRu[0] : iconsTextUa[0]}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            className="icons"
                            src={require('./img/icons/2.png')}
                            alt=""
                        />
                        <h6>{whatLanguage ? iconsTitleRu[1] : iconsTitleUa[1]}</h6>
                        <p>{whatLanguage ? iconsTextRu[1] : iconsTextUa[1]}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img
                            className="icons"
                            src={require('./img/icons/3.png')}
                            alt=""
                        />
                        <h6>{whatLanguage ? iconsTitleRu[2] : iconsTitleUa[2]}</h6>
                        <p>{whatLanguage ? iconsTextRu[2] : iconsTextUa[2]}</p>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default PartnerBlock;