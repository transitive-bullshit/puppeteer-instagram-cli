#!/usr/bin/env node
'use strict'

const fs = require('fs')
const input = fs.readFileSync('./accounts.json', 'utf8')
const json = JSON.parse(input)

const output = json
  .map((u) => `${u.username}\t${u.password}`)
  .map((u) => u.toString()).join('\n')

console.log(output)
