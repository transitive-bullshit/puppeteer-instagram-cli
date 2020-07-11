# puppeteer-instagram-cli

> CLI for [Instagram](https://instagram.com) automation driven by headless chrome.

[![NPM](https://img.shields.io/npm/v/puppeteer-instagram-cli.svg)](https://www.npmjs.com/package/puppeteer-instagram-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-instagram-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-instagram-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This CLI also has a [library](https://github.com/transitive-bullshit/puppeteer-instagram).

## Install

```bash
npm install -g puppeteer-instagram-cli
```

## Usage

```bash
  Usage: instagram [options] [command]

  Options:

    -V, --version              output the version number
    -u, --username <username>  account username
    -e, --email <email>        account email
    -p, --password <password>  account password
    -H, --no-headless          (puppeteer) disable headless mode
    -s, --slow-mo <timeout>    (puppeteer) slows down operations by the given ms (default: 0)
    -h, --help                 output usage information

  Commands:

    signup [options]
    signin
    signout
    verify [options]
```

## Related

-   [puppeteer-instagram](https://github.com/transitive-bullshit/puppeteer-instagram) - Library for this CLI.
-   [puppeteer-email](https://github.com/transitive-bullshit/puppeteer-email) - Email automation driven by headless chrome.
-   [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node API.
-   [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) - A curated list of awesome puppeteer resources.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
