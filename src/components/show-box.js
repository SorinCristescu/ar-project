export default class ShowBox {
  constructor(element) {
    const box = document.querySelector('.box');
    console.log('Show Box', element);
    element.addEventListener('click', () => {
      this.showBox(box);
    });
  }
  showBox(box) {
    box.classList.toggle('none');
  }
}
