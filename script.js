const data = {
  type1: {
    host: [
      'www.tribunnews.com',
      'www.kompas.com',
      'suara.com',
      'www.merdeka.com',
      'grid.id',
      'pikiran-rakyat.com',
      'zonajakarta.pikiran-rakyat.com',
      'lingkarmadiun.pikiran-rakyat.com',
      'seputarlampung.pikiran-rakyat.com',
      'portalsulut.pikiran-rakyat.com',
    ],
    suffix: '?page=all',
  },
  type2: {
    host: ['detik.com', 'finance.detik.com', 'news.detik.com', 'hot.detik.com'],
    suffix: '?single=1',
  },
};

let href = window.location.href;
let host = window.location.host;

if (data.type1.host.includes(host) && !href.includes(data.type1.suffix)) {
  console.log('blacklist 1, belom difix');
  window.location.replace(href + data.type1.suffix);
} else if (
  data.type2.host.includes(host) &&
  !href.includes(data.type2.suffix)
) {
  console.log('blacklist 2, belom difix');
  window.location.replace(href + data.type2.suffix);
}
