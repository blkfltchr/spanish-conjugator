import React, { Component } from 'react';

import Popup from './Popup';

class Modal extends Component {

	constructor() {
		super();

		this.state = {
			isShowing: false
		}
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	}

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	}

	render () {
		return (
			<div>
				{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

				<button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

				<Popup
					className="modal"
					show={this.state.isShowing}
					close={this.closeModalHandler}>
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
				</Popup>
			</div>
		);
	}
}
export default Modal;