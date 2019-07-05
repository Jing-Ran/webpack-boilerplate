import greeting from './scripts/test';
import './scss/main.scss';

console.log('index js');
greeting();

if (module.hot) {
  module.hot.accept('scripts/test.js', () => {
    console.log('Accepting the updated printMe module!');
  });
}
