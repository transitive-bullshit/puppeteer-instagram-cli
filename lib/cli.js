'use strict'

const program = require('commander')

const { version } = require('../package')

const signin = require('./signin')
const signup = require('./signup')

module.exports = (argv) => {
  program
    .name('instagram')
    .version(version)
    .option('-u, --username <username>', 'account username')
    .option('-e, --email <email>', 'account email')
    .option('-p, --password <password>', 'account password')
    .option('-H, --no-headless', '(puppeteer) disable headless mode')
    .option('-s, --slow-mo <timeout>', '(puppeteer) slows down operations by the given ms', parseInt, 0)

  program
    .command('signup')
    .option('-b, --batch <filename>', 'Signup a batch of users from a csv, tsv, or json file')
    .option('-v, --verify', 'verify instagram account via email')
    .option('-P, --email-password <password>', 'email account password for verification')
    .action(async (opts) => {
      await signup(program, opts)
    })

  program
    .command('signin')
    .action(async () => {
      try {
        const { client, user } = await signin(program)
        await client.close()

        console.log(JSON.stringify(user, null, 2))
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('signout')
    .action(async () => {
      try {
        // signin and then immediately signout
        const { client } = await signin(program)

        await client.signout()
        await client.close()
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program
    .command('verify')
    .option('-P, --email-password <password>', 'email account password for verification')
    .action(async (opts) => {
      try {
        // email verification requires signin
        const { client } = await signin(program)

        await client.verifyEmail({
          email: program.email,
          emailPassword: opts.emailPassword
        })

        await client.close()

        console.log('email verified')
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    })

  program.parse(argv)
}

module.exports(process.argv)
