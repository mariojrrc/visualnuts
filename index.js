const {Command} = require('commander');
const program = new Command();

const {VisualNutsPrinterService, VisualNutsCountryService} = require('./src/services');

program
  .name('Visual Nuts Commander')
  .description('CLI to some JavaScript utilities')
  .version('0.8.0');

program.command('challengeOne')
  .description('Write or describe an algorithm that prints the whole integer numbers to the console, start from the number 1, and print all numbers going up to the number 100. However, when the number is divisible by 3, do not print the number, but print the word \'Visual\'. If the number is divisible by 5, do not print the number, but print \'Nuts\'. And for all numbers divisible by both (eg: the number 15) the same, but print \'Visual Nuts\'')
  .option('-l, --limit <int>', 'Will print from 0 to given number. Max limit is ' + VisualNutsPrinterService.MAX_SAFE_INT, 100)
  .action((options) => {
    let limit = Number.parseInt(options.limit, 10);
    if (Number.isNaN(limit)) {
      limit = 100;
    }

    return VisualNutsPrinterService
      .compute(limit)
      .then(response => response.forEach(ret => console.log(ret.print ? ret.print : ret.number)));
  });

program.command('challengeTwo')
  .description('Shows information about official languages spoken by countries')
  .action(() => {
    VisualNutsCountryService
      .getNumberOfCountries(require('./data/countries.json'))
      .then(response => console.log(`Number of countries => ${response}`))
      .catch(error => console.error(error.message));

    VisualNutsCountryService
      .getDeCountryWithMostLanguages(require('./data/countries.json'))
      .then(response => console.log(`Country with the most official languages, where German (de) is spoken => ${response.country} (${response.languages.join(',')})`))
      .catch(error => console.error(error.message));

    VisualNutsCountryService
      .getNumberOfOfficialLanguages(require('./data/countries.json'))
      .then(response => console.log(`Official languages => ${response}`))
      .catch(error => console.error(error.message));

    VisualNutsCountryService
      .getCountryWithMostLanguages(require('./data/countries.json'))
      .then(response => console.log(`Country with the highest number of official languages => ${response.country} (${response.languages.join(',')})`))
      .catch(error => console.error(error.message));

    return VisualNutsCountryService
      .getMostCommonLanguages(require('./data/countries.json'))
      .then(response => console.log(`Most common languages => ${response.join(',')}`))
      .catch(error => console.error(error.message));
  });

program.parse();
