import React, { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // метод для очистки
  componentWillUnmount() {
    // console.log('Modal componentWillUnmount');
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (event) => {
    // всплытие событий
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.handleBackdrop}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
