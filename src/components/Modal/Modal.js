import React from 'react';
import BlakeProfile from '../../assets/bf-profile.jpeg';
import NickProfile from '../../assets/no-profile.jpeg';
import './modal.css';

const Modal = (props) => {
    return (
        <div className="modal-wrapper"
            style={{
                top: props.show ? '15%' : '-100%',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <h3>Hola, muchos gracias for visiting <span className="logo">
                Spanish Conjugator <span role="img" aria-label="colombia">🇪🇸</span>
                </span></h3>
            </div>
            <div className="modal-body">
                <div>
                <p>Created by:</p>
                <div style={{display: "flex"}}>
                    <div>
                        <img style={{width: "100px", height: "100px"}} src={BlakeProfile} alt="blake fletcher spanish conjugator"/>
                        <div>Blake Fletcher</div>
                        <p>Find him on <a href="https://github.com/blkfltchr" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Github</a>, <a href="https://twitter.com/blkfltchr" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Twitter</a> or <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>email</a> him.</p>
                    </div>
                    <div>
                        <img style={{width: "100px", height: "100px"}} src={NickProfile} alt="nick o'ferrall spanish conjugator"/>
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