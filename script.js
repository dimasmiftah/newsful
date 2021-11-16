const data = {
  type1: [
    'tribunnews.com',
    'kompas.com',
    'suara.com',
    'merdeka.com',
    'grid.id',
    'pikiran-rakyat.com',
    'viva.co.id',
  ],
  type2: ['detik.com'],
};

const href = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

const isIncludesTo = (type) =>
  type.map((item) => href.includes(item)).includes(true);

if (isIncludesTo(data.type1) && urlParams.get('page') !== 'all') {
  urlParams.set('page', 'all');
  window.location.search = urlParams;
} else if (isIncludesTo(data.type2) && urlParams.get('single') !== '1') {
  urlParams.set('single', '1');
  window.location.search = urlParams;
}
