class NoErrorThrownError extends Error {}

const { VisualNutsCountryService } = require('../../../src/services')

const countriesData = [
  {
    "country": "BR",
    "languages": [
      "pt-br"
    ]
  },
  {
    "country": "US",
    "languages": [
      "en"
    ]
  },
  {
    "country": "BE",
    "languages": [
      "nl",
      "fr",
      "de"
    ]
  },
  {
    "country": "EE",
    "languages": [
      "est",
      "ru",
      "en"
    ]
  },
  {
    "country": "NL",
    "languages": [
      "nl"
    ]
  },
  {
    "country": "DE",
    "languages": [
      "de"
    ]
  },
  {
    "country": "ES",
    "languages": [
      "es"
    ]
  }
];

const getError = async (call) => {
  try {
    await call();

    throw new NoErrorThrownError();
  } catch (error) {
    return error;
  }
};


describe('Country test', () => {
  it(`Should return 7 when getting number of countries with a valid test data`, async () => {
    const response = await VisualNutsCountryService.getNumberOfCountries(countriesData);
    expect(response).toBe(7);
  });

  it(`Should throw exception getting number of countries with a invalid test data`, async () => {
    const error = await getError(async () => VisualNutsCountryService.getNumberOfCountries([{}, {}]));
    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('message', "[{\"instancePath\":\"/0\",\"schemaPath\":\"#/items/required\",\"keyword\":\"required\",\"params\":{\"missingProperty\":\"country\"},\"message\":\"must have required property 'country'\"}]");
  });

  it(`Should return BE (nl, fr, de) when getting DE country with most languages and a valid test data`, async () => {
    const response = await VisualNutsCountryService.getDeCountryWithMostLanguages(countriesData);
    expect(response.country).toBe('BE');
    expect(JSON.stringify(response.languages)).toBe(JSON.stringify(['nl', 'fr', 'de']));
  });

  it(`Should throw exception getting DE country with most languages with a invalid test data`, async () => {
    const error = await getError(async () => VisualNutsCountryService.getDeCountryWithMostLanguages([{}, {}]));
    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('message', "[{\"instancePath\":\"/0\",\"schemaPath\":\"#/items/required\",\"keyword\":\"required\",\"params\":{\"missingProperty\":\"country\"},\"message\":\"must have required property 'country'\"}]");
  });

  it(`Should return 8 when getting official languages and a valid test data`, async () => {
    const response = await VisualNutsCountryService.getNumberOfOfficialLanguages(countriesData);
    expect(response).toBe(8);
  });

  it(`Should throw exception getting official languages with a invalid test data`, async () => {
    const error = await getError(async () => VisualNutsCountryService.getNumberOfOfficialLanguages([{}, {}]));
    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('message', "[{\"instancePath\":\"/0\",\"schemaPath\":\"#/items/required\",\"keyword\":\"required\",\"params\":{\"missingProperty\":\"country\"},\"message\":\"must have required property 'country'\"}]");
  });

  it(`Should return BE (nl, fr, de) when getting country with the highest number of official languages and a valid test data`, async () => {
    const response = await VisualNutsCountryService.getCountryWithMostLanguages(countriesData);
    expect(response.country).toBe('BE');
    expect(JSON.stringify(response.languages)).toBe(JSON.stringify(['nl', 'fr', 'de']));
  });

  it(`Should throw exception getting country with the highest number of official languages and a invalid test data`, async () => {
    const error = await getError(async () => VisualNutsCountryService.getCountryWithMostLanguages([{}, {}]));
    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('message', "[{\"instancePath\":\"/0\",\"schemaPath\":\"#/items/required\",\"keyword\":\"required\",\"params\":{\"missingProperty\":\"country\"},\"message\":\"must have required property 'country'\"}]");
  });

  it(`Should return (nl, fr, de) when getting most common languages and a valid test data`, async () => {
    const response = await VisualNutsCountryService.getMostCommonLanguages(countriesData);
    expect(JSON.stringify(response)).toBe(JSON.stringify(['nl', 'de', 'en']));
  });

  it(`Should throw exception getting most common languages and a invalid test data`, async () => {
    const error = await getError(async () => VisualNutsCountryService.getMostCommonLanguages([{}, {}]));
    // check that the returned error wasn't that no error was thrown
    expect(error).not.toBeInstanceOf(NoErrorThrownError);
    expect(error).toHaveProperty('message', "[{\"instancePath\":\"/0\",\"schemaPath\":\"#/items/required\",\"keyword\":\"required\",\"params\":{\"missingProperty\":\"country\"},\"message\":\"must have required property 'country'\"}]");
  });
});
