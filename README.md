# leetscript-cli
> Convert text into 1337 in your terminal

`leetscript-cli` is a command line tool to convert text into 1337. It uses [leetscript](https://github.com/kevingimbel/leetscript) for converting.

## Install

```
$ npm install -g leetscript-cli
```

## Usage

```
USAGE leetscript-cli [options] "string"

  OPTIONS:
    -s            convert to simple leet string (default: false)
    -e STRING     encode string
    -u            show usage and exit
    -h            show help and exit
    -v            show version and exit
```

Convert a string with default options:
```
$ leetscript-cli "test"
†3§†
```

Convert with `simple` set to true
```
$ leetscript-cli -s -e "simple conversion"
5imp13 c0nv325i0n
```

Pipe output to a file
```
$ leetscript-cli "test" > test.txt
```
