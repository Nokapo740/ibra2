// src/Modal.js
import React, { useState } from 'react';

const Modal = ({ showModal, onClose }) => {
  const [content] = useState('Пример контента в модальном окне');

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
