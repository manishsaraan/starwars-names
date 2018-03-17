
# Starwars Names
## Get random star wars names.

[![travis build](https://img.shields.io/travis/manishsaraan/starwars-names.svg?style=flat-square)](https://travis-ci.org/manishsaraan/starwars-names)
[![version](https://img.shields.io/npm/v/swars-names.svg?style=flat-square)]((http://npm.im/swars-names))
[![downloads](https://img.shields.io/npm/dm/swars-names.svg?style=flat-square)](https://npm-stat.com/charts.html?package=swars-names&from=2018-01-01&to=2018-03-16)
[![MIT License](https://img.shields.io/npm/l/swars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## How to install
* Clone repo with `npm i https://github.com/manishsaraan/starwars-names.git`
* Move to repo directory with command  `cd starwars-names`
* Install npm packages with command `npm install`
## How to use 

```
var names =  require('swars-names');
var allNames =  names.all;
var randomName =  names.random();
var threeRandomNames =  names.random(3);
```