module.exports = {
  usage: `

  USAGE leetscript-cli [options] "string"

  OPTIONS:
    -s            convert to simple leet string (default: false)
    -e STRING     encode string
    -u            show usage and exit
    -h            show help and exit
    -v            show version and exit
    `,

  help: `
  leetscript-cli [options] -e "string"

  The string specified after -e will be encoded into leetspeak.
  For a list of options run "leetscript -u".
  `
}
