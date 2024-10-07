# Card Project

![Version](https://img.shields.io/badge/version-1.0.0-informational)
[![Build Front](https://github.com/shadowc/card-project/actions/workflows/build.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)
[![PHPCSFixer](https://github.com/shadowc/card-project/actions/workflows/php-cs-fixer.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)
[![PHPStan](https://github.com/shadowc/card-project/actions/workflows/phpstan.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)
[![PHPUnit](https://github.com/shadowc/card-project/actions/workflows/phpunit.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)

[![Lint](https://github.com/shadowc/card-project/actions/workflows/lint.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)
[![Lint Twig](https://github.com/shadowc/card-project/actions/workflows/lint-twig.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)
[![Lint Yaml](https://github.com/shadowc/card-project/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/shadowc/card-project/actions)

Card project website based on bootcamp project

## Requirements

- PHP 8.3
- Symfony 7.1
- MariaDB 10.5
- Nodejs 20

## Setup

### Start the docker containers

this will also start the local symfony server

```bash
./bin/docker up
```

### Install composer dependencies

```bash
composer install
```

You will need a github token to download the private repository AdminBundle.

### Configure system environment variables

Add a file named `.env.local` with the correct database and mailer configuration.

### Set up the database

Create the database schema and populate it with fixtures if you are local

```bash
symfony console doctrine:database:create
symfony console doctrine:schema:create
symfony console doctrine:fixtures:load
```

### Build local front-end files (to be used by asset mapper)

```bash
npm run build
```

### Run tests

Create the test database environment

```bash
./bin/docker up test
symfony console doctrine:database:create
symfony console doctrine:schema:create
```

The run the tests

```bash
./bin/tests
```
