export default class HostingSlider {
    constructor(container, slides) {
      this.container = typeof container === 'string' ? document.querySelector(container) : container;
      this.slides = slides;
      this.current = 0; // текущий слайд
      this.render(); // создаю стркутуру html слайдера
      this.bindEvents();
      this.update(); // перерисовка контента после нажатия кнопок
    }
  
    render() {
      this.container.classList.add('hosting-slider');
      this.container.innerHTML = `
        <div class="slider-content-wrapper">
          <button class="slider-btn prev btn btn-primary">←</button>
          <div class="slider-img-container">
            <img class="slider-img" src="${this.slides[0].img}" alt="${this.slides[0].alt}">
          </div>
          <div class="slider-text-content">
            <div class="slider-ctp h4 mb-3">${this.slides[0].ctp}</div>
          </div>
          <button class="slider-btn next btn btn-primary">→</button>
        </div>
        <div class="slider-footer">
          <a class="slider-link btn btn-outline-primary w-100 mb-2" href="${this.slides[0].link}" target="_blank">
            Читать отзывы
          </a>
          <div class="slider-dots"></div>
        </div>
      `;
  // навигация через точки
      const dots = this.container.querySelector('.slider-dots');
      this.slides.forEach((_, i) => {
        dots.innerHTML += `<button class="slider-dot" data-index="${i}"></button>`;
      });
    }
  
    bindEvents() {
      this.container.querySelector('.prev').addEventListener('click', () => this.prev());
      this.container.querySelector('.next').addEventListener('click', () => this.next());
      this.container.querySelectorAll('.slider-dot').forEach(dot => {
        dot.addEventListener('click', () => this.goTo(+dot.dataset.index));
      });
    }
  
    update() {
      const slide = this.slides[this.current];
      const imgContainer = this.container.querySelector('.slider-img');
      const ctpElement = this.container.querySelector('.slider-ctp');
      const linkElement = this.container.querySelector('.slider-link');
  
      imgContainer.src = slide.img;
      imgContainer.alt = slide.alt;
      ctpElement.textContent = slide.ctp;
      linkElement.href = slide.link;
  
      this.container.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === this.current);
      });
  
      this.container.querySelector('.prev').style.visibility = 
        this.current === 0 ? 'hidden' : 'visible';
      this.container.querySelector('.next').style.visibility = 
        this.current === this.slides.length - 1 ? 'hidden' : 'visible';
    }
  
    prev() {
      if (this.current > 0) {
        this.current--;
        this.update();
      }
    }
  
    next() {
      if (this.current < this.slides.length - 1) {
        this.current++;
        this.update();
      }
    }
  
    goTo(index) {
      if (index >= 0 && index < this.slides.length) {
        this.current = index;
        this.update();
      }
    }
  }
  