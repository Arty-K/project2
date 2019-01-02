import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalForm extends React.Component {
    state = {
            modal: false
        };


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.toggle}>zoom</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <img className="card-img-top" src="http://arsenal-plus.com.ua/img/works/img9.jpg" alt="1"/>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.toggle}>Закрыть</button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalForm;