import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'

// ReactDOM.render(<h1>Hello, World!</h1>, document.getElementById('root'))

ReactDOM.render(
    <App />, // <App></App>と同じ役割になる
    document.getElementById('root')
)