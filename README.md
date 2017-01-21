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

Read from `stdin`
```
$ echo "test" | leetscript-cli -s --std
7357
# Multi line
$ cat << EOF | leetscript-cli --std
lorem ipsum dolor sit
This is a multi line test
hello world!
EOF

|_()23]V[ 1|>$|_|m |]01[]|2 $][+
T4][$ |5 /\ m[_]|_7| 1i|\|3 735†
|-|311() \\'[]|2|_|)!
```

Read in a file with `cat` and `stdin`
```
$ cat my_file.txt | leetscript-cli --std
```
