import React from 'react';
import ReactDOM from 'react-dom';
import Contenu from './Contenu';
import Header from './Header';

function Example() {
    return (
        <div className="container">
            <Header />
            <Contenu />
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
