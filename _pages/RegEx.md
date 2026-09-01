---
title: Regular Expressions
permalink: /regex/
classes: wide
---

## Metacharacters

These must be escaped:

`^` `[` `.` `$` `{` `*` `(` `)` `\` `+` `|` `?` `<` `>`

## Anchors

| :------ | :---------------- |
| `^`     | start of line     |
| `$`     | end of line       |
| `\A`    | start of string   |
| `\Z`    | end of string     |
| `\b`    | word boundary     |
| `\B`    | not word boundary |
| `\<`    | start of word ⚠️  |
| `\>`    | end of word ⚠️    |

## Quantifiers

| :---------- | :----------------------------------------------------- |
| `*`         | 0 or more                                              |
| `*?`        | 0 or more, ungreedy                                    |
| `+`         | 1 or more                                              |
| `+?`        | 1 or more, ungreedy                                    |
| `?`         | 0 or 1                                                 |
| `??`        | 0 or 1, ungreedy                                       |
| `{#}`       | Exacty # (e.g., `{3}` = exactly 3)                     |
| `{#,}`      | # or more (e.g., `{3,}` = 3 or more)                   |
| `{#,}?`     | # or more, ungreedy                                    |
| `{#,#}`     | # to # matches, inclusive (e.g., `{3,5}` = 3, 4, or 5) |
| `{#,#}?`    | # to # matches, inclusive and ungreedy                 |

## Ranges

| :----- | :-------------------------------------------------- |
| `.`    | any character, typically excluding newline/linefeed |
| `|`    | or (e.g., `a | b` matches `a` or `b`)               |
| `()`   | capturing group (e.g., `Date: (\d{4}-\d{2}-\d{2})`) |
| `(?:)` | non-capturing/passive group (e.g., `(?:this|that)`) |
| `[]`   | characer range                                      |
| `[^]`  | negative characer range                             |

## Character Classes

| :-------------- | :-------------------------------------------------------------------------------- |
| `\c`            | control character (e.g., ASCII 0-31 & 127), same as POSIX `[:word:]`              |
| `\s`            | white space (e.g., `[\t\n\f\r ]` tab, newline, form feed, carriage returm, space) |
| `\S`            | not white space                                                                   |
| `\d`            | digit (e.g., `[0-9]`)                                                             |
| `\D`            | not digit                                                                         |
| `\w`            | word (e.g., `[A-Za-z0-9_]`)                                                       |
| `\W`            | not word                                                                          |

## Escape Sequences

| :--------------------- | :------------------------------------------- |
| `\\`                   | literal backslash `` ` ``                    |
| `\t`                   | tab                                          |
| `\n`                   | newline/linefeed                             |
| `\r`                   | carriage return                              |
| `\f`                   | form feed                                    |
| `\a`                   | alarm/bell                                   |
| `\xhh`                 | hexadecimal character `hh`                   |
| `\xxx` `\oxxx` `\Oxxx` | octal character `xxx`                        |
| `\Q`                   | quote (disable pattern metacharacters)       |
| `\E`                   | end quote (re-enable pattern metacharacters) |

## POSIX Character Classes

| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `[:upper:]`           | any uppercase character (e.g., `[A-Z]`)                                                                                              |
| `[:lower:]`           | any lowercase character (e.g., `[a-z]`)                                                                                              |
| `[:alpha:]`           | any alphabetical character (e.g., `[A-Za-z]`)                                                                                        |
| `[:alnum:]`           | any alphanumeric character (e.g., `[A-Za-z0-9]`)                                                                                     |
| `[:digit:]`           | any decimal digit (e.g., `[0-9]`)                                                                                                    |
| `[:xdigit:]`          | any hexadecimal digit (e.g., `[0-9a-fA-F]`)                                                                                          |
| `[:punct:]`           | any graphical character excluding "word" chartacters (e.g., ``[-!"#$%&'()*+,./:;<=>?@[\\\]^_`{\|}~]``)                               |
| `[:blank:]`           | any horizontal whitespace character (e.g., space or tab `\t`)                                                                        |
| `[:space:]`           | any whitespace character, similar to `\s`\ but also includes vertical tab `\X0B` / `\013`                                            |
| `[:cntrl:]`           | any control character (ASCII 0-31 & 127), same as `\c`                                                                               |
| `[:graph:]`           | any character that is graphical, that is, visible. This class consists of all alphanumeric characters and all punctuation characters |
| `[:print:]`           | all printable characters, which is the set of all graphical characters plus those whitespace characters which are not also controls. |
| `[:word:]`            | any "word" character (e.g., [A-Za-z0-9_]), same as `\w`                                                                              |

## Backreferences ⚠️

⚠️ Not universally supported

| :---------------- | :--------------------- |
| `$n` or `\n`      | nth capturing group    |
| ``$` ``           | before matched string  |
| `$'`              | after matched string   |
| `$+`              | last matched string    |
| `$&`              | entire matched string  |
| `$_`              | entire input string    |
| `$$`              | literal dollar sign `$`|
