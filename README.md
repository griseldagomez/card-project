# Shaun-McCoy.com

![Version](https://img.shields.io/badge/version-1.0.0-informational)

Personal Website

## Requirements

- PHP 8.3
- Symfony 7.1
- MariaDB 10.3
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
symfony php ./bin/console doctrine:database:create
symfony php ./bin/console doctrine:schema:create
symfony php ./bin/console doctrine:fixtures:load
```

### Build local front-end files (to be used by asset mapper)

```bash
npm run build
```

### Run tests

Create the test database environment

```bash
./bin/docker up test
symfony php ./bin/console doctrine:database:create
symfony php ./bin/console doctrine:schema:create
```

The run the tests

```bash
./bin/tests
```
