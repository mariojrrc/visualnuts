Visual Nuts - Challenge
=================================================
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=mariojrrc_visualnuts&metric=alert_status)](https://sonarcloud.io/dashboard?id=mariojrrc_visualnuts)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=mariojrrc_visualnuts&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=mariojrrc_visualnuts)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=mariojrrc_visualnuts&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=mariojrrc_visualnuts)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=mariojrrc_visualnuts&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=mariojrrc_visualnuts)

This project is an example of possible challenge resolution of Visual Nuts Callenge.

It is a console application which basically has two endpoints functionalities: 

- Challenge 1 - It is an algorithm that prints the whole integer numbers to the console, start from the number 1, and print all numbers going up to the number 100. However, when the number is divisible by 3, do not print the number, but print the word 'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.
- Challenge 2 - It shows information about official languages spoken by countries.

Note 1: By default, the integer ranges from 1 to 100 for Challenge 1 having a limit of 1000000.

Note 2: Challenge 2 uses data from `data/countries.json` and it looks to answer some questions: 
- the number of countries in the world
- the country with the most official languages, where they officially speak German
  (de). that counts all the official languages spoken in the listed countries.
- the country with the highest number of official languages.
- the most common official language(s), of all countries.

### Requirements
Node 10+

### Running the project

1. Run `npm install`
2. Run `node index.js challengeOne` to execute Challenge 1.
3. Optionally run `node index.js challengeOne --limit 10` to only show 10 results. 
4. Run `node index.js challengeTwo` to execute Challenge 2.

### Running tests
1. Run `npm run test`

