# CryptoAddressValidator
[![Build Status](https://travis-ci.org/NataliaPavliy/CryptoAddressValidator.svg?branch=master)](https://travis-ci.org/NataliaPavliy/CryptoAddressValidator)

This module takes a `bitcoin` or `ethereum` address as argument, and checks whether or not this address is valid.

## Use

```
import CryptoAddressValidator from 'crypto_address_validator'

CryptoAddressValidator.validate("1Q1pE5vPGEEMqRcVRMbtBK842Y6Pzo6nK9", "btc");
CryptoAddressValidator.validate("0x52908400098527886E0F7030069857D2E4169EE7", "eth")

```

## Included

- [babel](http://babeljs.io) - Transpile ES6
- [Jest](https://facebook.github.io/jest/) - Tests made easy and includes coverage report
- [Coveralls](https://coveralls.io/) - Ensure that all your new code is fully covered, and see coverage trends emerge.
- [Travis](https://travis-ci.org) - Deploy with Confidence.
- Auto publish to npm on every build.

## Getting started

```
yarn install 
```

## Testing

This boilerplate uses [Facebook Jest](https://facebook.github.io/jest/). 

```
yarn test
```