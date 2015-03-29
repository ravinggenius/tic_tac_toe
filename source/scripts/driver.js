import React from 'react';

import GameManager from './components/game_manager.jsx!';

export default class Driver {
	static boot() {
		React.render(React.createElement(GameManager, null), document.getElementsByClassName('manager')[0]);
	}
}
