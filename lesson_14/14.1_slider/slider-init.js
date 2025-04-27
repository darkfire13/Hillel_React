import HostingSlider from './slider.js';

// Тестовый массив
const slides = [
    {
      img: './img/pqhosting_logo.png',
      alt: 'PQ Hosting',
      ctp: 'VPS/VDS от 4.99€ в Европе, Америке. Мгновенная активация.',
      link: 'https://dieg.info/review/obzor-pq-perfect-quality-hosting/'
    },
    {
      img: './img/cloudways_logo.png',
      alt: 'Cloudways',
      ctp: 'Управляемый облачный хостинг для бизнеса любого масштаба.',
      link: 'https://dieg.info/review/obzor-cloudways/'
    },
    {
        img: './img/kinsta_logo.png',
        alt: 'Kinsta',
        ctp: 'Премиум-хостинг WordPress с инфраструктурой Google Cloud.',
        link: 'https://dieg.info/review/obzor-kinsta/'
      },
   {
            img: './img/ishosting_logo.png', 
            alt: 'is*hosting',
            ctp: 'VPS в 39 дата-центрах с автоматическим резервированием.',
            link: 'https://dieg.info/review/obzor-is-hosting/'
    }
  ];

new HostingSlider('#hosting-slider', slides);
