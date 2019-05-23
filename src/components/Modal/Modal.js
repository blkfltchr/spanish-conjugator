import React from 'react';
import './modal.css';
import PropTypes from 'prop-types';
import BlakeProfile from '../../assets/bf-profile.jpeg';
import NickProfile from '../../assets/no-profile.jpeg';

function Modal(props) {
  const { show, close } = props;
  return (
    <div className="modal">
      <div
        className="modal-wrapper"
        style={{
          top: show ? '15%' : '-100%',
          opacity: show ? '1' : '0'
        }}
      >
        <div className="modal-header">
          <h3>
            Hola, muchas gracias for visiting{' '}
            <span className="logo">
              Spanish Conjugator{' '}
              <span role="img" aria-label="colombia">
                🇪🇸
              </span>
            </span>
          </h3>
        </div>
        <div className="modal-body">
          <div>
            <p>Created by:</p>
            <div className="created-by">
              <div>
                <img
                  src={BlakeProfile}
                  alt="blake fletcher spanish conjugator"
                />
                <div>Blake Fletcher</div>
                <p>
                  Find him on{' '}
                  <a
                    href="https://github.com/blkfltchr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  ,{' '}
                  <a
                    href="https://twitter.com/blkfltchr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{' '}
                  or{' '}
                  <a
                    href="mailto:blkfltchr@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email
                  </a>{' '}
                  him.
                </p>
              </div>
              <div>
                <img
                  src={NickProfile}
                  alt={`nick o'ferrall spanish conjugator`}
                />
                <div>Nick O'Ferrall</div>
                <p>
                  Find him on{' '}
                  <a
                    href="https://github.com/nickoferrall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  ,{' '}
                  <a
                    href="https://twitter.com/nickoferrall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{' '}
                  or{' '}
                  <a
                    href="mailto:nickoferrall@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email
                  </a>{' '}
                  him.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn-cancel" onClick={close}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.bool
};

export default Modal;
