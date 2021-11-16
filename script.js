const data = {
  type1: {
    host: [
      'tribunnews.com',
      'kompas.com',
      'suara.com',
      'merdeka.com',
      'grid.id',
      'pikiran-rakyat.com',
      'viva.co.id',
    ],
    suffix: '?page=all',
  },
  type2: {
    host: ['detik.com'],
    suffix: '?single=1',
  },
};

const href = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

const isIncludesTo = (type) => {
  const checkType = type.host.map((item) => {
    return href.includes(item);
  });
  return checkType.includes(true);
};

if (isIncludesTo(data.type1) && urlParams.get('page') !== 'all') {
  urlParams.set('page', 'all');
  window.location.search = urlParams;
} else if (isIncludesTo(data.type2) && urlParams.get('single') !== '1') {
  urlParams.set('single', '1');
  window.location.search = urlParams;
}
