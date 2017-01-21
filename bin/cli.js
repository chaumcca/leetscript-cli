#!/usr/bin/env node

const Leetscript = require('leetscript')
const argv = require('yargs').argv
const argumentList = Object.keys(argv)
const appdata = require('../application.js')
const stdin = process.stdin

// Initialize a new Leetscript instance
const leet = new Leetscript(argv.s)

// Text goes into this variable when reading from stdin
let encodedString = undefined

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

const readStdIn = () => {
  stdin.on('data', (data) => {
    encodedString = leet.encode(data.toString()) 
  })

  stdin.on('end', () => { 
    console.log(encodedString)
    exit()
  })
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

      case "std":
        readStdIn()
        break
    }
    
    // If not in stdin mode, exit here    
    if(!argv.std) {
      console.log("Failed. See leetscript-cli -u for usage information")
      exit(1)
    }
  })
}

main()

