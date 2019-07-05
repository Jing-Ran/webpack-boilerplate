const greetingHeader = document.querySelector('.greeting');
const greetingTxt = 'Hello 🦄';

export default function greeting() {
  greetingHeader.textContent = greetingTxt;
}
