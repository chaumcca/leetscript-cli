#!/usr/bin/env node

const Leetscript = require('leetscript')
const argv = require('yargs').argv
const argumentList = Object.keys(argv)
const appdata = require('../application.js')

// Initialize a new Leetscript instance
const leet = new Leetscript(argv.s)

const exit = (code = 0) => {
  process.exit(code)
}

const usage = () => {
  console.log(appdata.usage)
  exit()
}

const help = () => {
  console.log(appdata.help)
	exit()
}

const encodeWrapper = (str) => {
  console.log(leet.encode(str))

  exit()
}

const main = () => {
  // Script is called without flags, string passed as
  // argument to convert
  if(process.argv.length == 3 && process.argv[2].indexOf("-") == -1) {
    encodeWrapper(process.argv[2])
  }

  argumentList.map( arg => {
    switch(arg) {
      case "u":
        usage()
        break

      case "h":
        help()
        break

      case "e":
        encodeWrapper(argv.e)
        break
    }
  })
  
	console.error(`Failed. See "leetscript-cli -u" for usage information`)
  exit(1)
}

main()
