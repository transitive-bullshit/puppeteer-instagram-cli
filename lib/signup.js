'use strict'

const PuppeteerInstagram = require('puppeteer-instagram')

const parseBatch = require('./parse-batch')

module.exports = async (program, opts) => {
  try {
    const client = new PuppeteerInstagram({
      puppeteer: {
        headless: !!program.headless,
        slowMo: program.slowMo
      }
    })

    const users = []
    const errors = []
    const defaultUser = {
      email: program.email
    }

    let input = [ defaultUser ]
    let user

    if (opts.batch) {
      input = await parseBatch(opts.batch)
    } else {
      input[0].password = opts.emailPassword
    }

    for (let i = 0; i < input.length; ++i) {
      try {
        const current = input[i]

        user = {
          email: program.email,
          ...current
        }

        // this password is the email password
        delete user.password

        try {
          await client.signup(user, {
            verify: opts.verify,
            emailPassword: current.password
          })
        } catch (err) {
          user.username += (Math.random() * 100) | 0

          await client.signup(user, {
            verify: opts.verify,
            emailPassword: current.password
          })
        }

        console.log('SUCCESS', JSON.stringify(user, null, 2))
        users.push(user)

        await client.close()
      } catch (err) {
        try { await client.close() } catch (err) { }
        console.warn(`signup error attempt ${i}`, err)
        errors.push({ ...user, err })
      }
    }

    if (input.length > 1) {
      console.log(JSON.stringify(users, null, 2))
      console.log(JSON.stringify(errors, null, 2))
      console.log(`${users.length} users created; ${errors.length} errors`)
    }
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
