import React from 'react';

import './modal.css';

const Modal = (props) => {
    return (
        <div className="modal-wrapper"
            style={{
                top: props.show ? '10%' : '-100%',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>Hola, muchos gracias for visiting Spanish Conjugator <span role="img" aria-label="colombia">🇪🇸</span></h3>
            </div>
            <div className="modal-body">
            <div>
            <h4>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span> by:</h4>
            <div style={{display: "flex"}}>
            <div>
                <img src="https://via.placeholder.com/100" alt="blake fletcher spanish conjugator"/>
                <div>Blake Fletcher</div>
                <p>Find him on <a href="https://github.com/blkfltchr" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Github</a>, <a href="https://twitter.com/blkfltchr" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Twitter</a> or <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>email</a> him.</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/100" alt="nick o'ferrall spanish conjugator"/>
                <div>Nick O'Ferrall</div>
                <p>Find him on <a href="https://github.com/nickoferrall" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Github</a>, <a href="https://twitter.com/nickoferrall" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Twitter</a> or <a href="mailto:nickoferrall@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>email</a> him.</p>
            </div>
            </div>
        </div>
        </div>
        <div className="modal-footer">
            <button className="btn-cancel" onClick={props.close}>CLOSE</button>
        </div>
        </div>
    )
}

export default Modal;