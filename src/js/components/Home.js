import {select, templates} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homePage(element);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.wrapper.carouselWidget = thisHome.dom.wrapper.querySelector(select.widgets.flickity.carousel);
  }

  initWidgets(){
    const thisHome = this;

    const flkty = new Flickity( thisHome.dom.wrapper.carouselWidget, { /* eslint-disable-line */
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      wrapAround: true,
      autoPlay: true

    });
  }
}
export default Home;