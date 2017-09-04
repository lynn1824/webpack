import './css/common.css';
import layer from './components/layer/layer.js';

const A = 'hello world!!';

class Class_es {
    constructor() {
        console.log('This is es6!');
    }
}

const App = function App() {
    console.log(A);
}

new Class_es();
new App();