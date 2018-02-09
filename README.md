# srpl
Search and Replace in large files using NodeJS &amp; npm with RegExp without freeze ^^

## Install

```bash
npm install srpl -g
```

## Usage

***From any Terminal, CMD, powershell or other bash shell window***

```bash
srpl my_db.sql '2017/12/(.*?).png' '2017/12/png/\$1.png' 'ig'
```
It should now create a copy of `my_db.sql` with all strings `2017/12/*.png` replaced by `2017/12/png/*.png` using flag `ig`, where `*` is a wildcard

## Options

**Takes 4 arguments (Last is Optional)**

### Arguments

1. source
2. search
3. replace
4. flag ***(Optional - Defaults to `g`)***

### Flags

***If specified, flags can have any combination of the following values:***

`g` global match; find all matches rather than stopping after the first match

`i` ignore case; if u flag is also enabled, use Unicode case folding

`m` multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)

`u` Unicode; treat pattern as a sequence of Unicode code points

`y` sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).

### RegExp

***RegExp means Regular Expression. For manual, please see***

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_meaning_in_regular_expressions
