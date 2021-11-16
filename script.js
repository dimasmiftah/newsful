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

let href = window.location.href;

function isIncludesTo(type) {
  const checkType = type.host.map((item) => {
    return href.includes(item);
  });
  return checkType.includes(true);
}

function notContain(suffix) {
  return !href.includes(suffix);
}

if (isIncludesTo(data.type1) && notContain(data.type1.suffix)) {
  window.location.replace(href + data.type1.suffix);
} else if (isIncludesTo(data.type2) && notContain(data.type2.suffix)) {
  window.location.replace(href + data.type2.suffix);
}
