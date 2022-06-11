const Ajv = require('ajv');
const ajv = new Ajv();

const countrySchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
      },
      languages: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    required: ['country', 'languages'],
    additionalProperties: false,
  },
};

const getAllLangages = (countries) => {
  const allLanguages = [];

  countries.forEach(({languages}) => {
    languages.forEach((l) => {
      allLanguages.push(l);
    });
  });

  return allLanguages;
};

module.exports = {
  async getNumberOfCountries (countries) {
    if (!ajv.validate(countrySchema, countries)) {
      throw new Error(JSON.stringify(ajv.errors));
    }

    return countries.length;
  },
  async getDeCountryWithMostLanguages (countries) {
    if (!ajv.validate(countrySchema, countries)) {
      throw new Error(JSON.stringify(ajv.errors));
    }

    return countries
      .filter(({languages}) => languages.includes('de'))
      .sort((a, b) => b.languages.length - a.languages.length)[0];
  },

  async getNumberOfOfficialLanguages (countries) {
    if (!ajv.validate(countrySchema, countries)) {
      throw new Error(JSON.stringify(ajv.errors));
    }

    const languages = getAllLangages(countries);

    return [...new Set(languages)].length;
  },
  async getCountryWithMostLanguages (countries) {
    if (!ajv.validate(countrySchema, countries)) {
      throw new Error(JSON.stringify(ajv.errors));
    }

    return countries.sort(
      (a, b) => b.languages.length - a.languages.length,
    )[0];
  },
  async getMostCommonLanguages (countries) {
    if (!ajv.validate(countrySchema, countries)) {
      throw new Error(JSON.stringify(ajv.errors));
    }

    const languages = getAllLangages(countries);

    const mostCommonLanguages = [];

    let counts = {};

    for (let lang of languages) {
      counts[lang] = counts[lang] ? counts[lang] + 1 : 1;
    }

    let max = Math.max(...Object.values(counts));

    let result = [];

    Object.values(counts).forEach((item, index) =>
      item === max ? result.push(index) : null,
    );

    result.forEach((r) => {
      mostCommonLanguages.push(Object.keys(counts)[r]);
    });

    return mostCommonLanguages;
  },
};
