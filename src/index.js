import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {game} from "./reducer/game/game.js";

const store = createStore(game,
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
