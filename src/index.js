import Hello from './components/hello-world';
import ShowBox from './components/show-box';

const components = [
  {
    class: Hello,
    selector: '.hello',
    options: {
      order: 1,
    },
  },
  {
    class: ShowBox,
    selector: '.show-box',
    options: {
      order: 2,
    },
  },
];

components.forEach((component) => {
  if (document.querySelector(component.selector) !== null) {
    document
      .querySelectorAll(component.selector)
      .forEach((element) => new component.class(element, component.options));
  }
});
