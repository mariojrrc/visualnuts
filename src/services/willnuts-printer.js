const MAX_SAFE_INT = 1000000;

module.exports = {
  'MAX_SAFE_INT': MAX_SAFE_INT,
  async compute (number = 100) {
    number = number < 1 ? 100 : number;

    if (number > MAX_SAFE_INT) {
      number = MAX_SAFE_INT;
    }

    const response = [];
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        response.push({number: i, print: 'Visual Nuts'});
        continue;
      }

      if (i % 3 === 0) {
        response.push({number: i, print: 'Visual'});
        continue;
      }

      if (i % 5 === 0) {
        response.push({number: i, print: 'Nuts'});
        continue;
      }

      response.push({number: i});
    }

    return response;
  },
};
