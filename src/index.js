import _ from 'lodash';
import style from './style.css'
import logo from './SATO-SATISFY_LOGO.png'

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'Webpack', '!!'];
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component())
document.body.classList.add('background')

const image = new Image();
image.src = logo;
document.body.appendChild(image);
