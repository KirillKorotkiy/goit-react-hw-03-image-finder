import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal, SwitchButton } from './Modal.styled';
import { ArrowLeft, ArrowRigth } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class ModalView extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    this.props.findCurrentIndex();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {

    return createPortal(
      <Overlay onClick={this.handleBackDrop}>
        <SwitchButton
          disabled={this.props.disabledLeft}
          type="button"
          onClick={()=>{this.props.changeURL(-1)}}
        >
          <ArrowLeft />
        </SwitchButton>
        <Modal>
          <img src={this.props.largeImageURL} alt="" />
        </Modal>
        <SwitchButton
          disabled={this.props.disabledRigth}
          type="button"
          onClick={() => {this.props.changeURL(1)}}
        >
          <ArrowRigth />
        </SwitchButton>
      </Overlay>,
      modalRoot
    );
  }
}

export default ModalView;
