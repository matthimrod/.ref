---
title: Reference Pages
permalink: /
---
* [AWS](/AWS/)
* [Java](#java)
* [HL7 / Mirth Connect](#hl7-mirth-connect)
* [Homelab](/lab/)
* [Java](#java)
* [JavaScript](#javascript)
* [Linux](#linux)
* [Python](/Python/)
* [Regular Expressions](#regular-expressions)
* [SSL/Certificates](#ssl-certificates)
* [Time Zones](#time-zones)

## Misc

* [Google Technical Writing Courses](https://developers.google.com/tech-writing/)
* [Explain Shell](https://explainshell.com/)
* [JMESPath Specification](https://jmespath.org/specification.html)
* [Edit CLI Editor](https://learn.microsoft.com/en-us/windows/edit/)
* [Windows Package Manager (winget)](https://learn.microsoft.com/en-us/windows/package-manager/)
* [Windows PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
* [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/)
* [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/)

### Data Stuff

* [Mockaroo](https://www.mockaroo.com)
* [Synthea](https://synthea.mitre.org)
* [The Book of OHDSI](https://ohdsi.github.io/TheBookOfOhdsi/) Observational Health Data Sciences and Informatics
* [ODHSI OMOP CDM](https://ohdsi.github.io/CommonDataModel/) Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM)

## HL7 Mirth Connect

* [Caristix HL7 V2 Reference](https://hl7-definition.caristix.com/v2/)
* [HAPI FHIR](https://hapifhir.io)
* [HL7 International](www.hl7.org/)
* [HL7 FHIR](https://hl7.org/fhir/)
* [Mirth Connect Releases](https://github.com/nextgenhealthcare/connect/releases)
* [Mirth Connect User Guide PDF](https://downloads.mirthcorp.com/connect-user-guide/latest/mirth-connect-user-guide.pdf)
* [Mirth Connect User Guide PDF](https://docs.nextgen.com/en-US/mirth%C2%AE-connect-by-nextgen-healthcare-user-guide-3231169)
* [Mirth Connect Administrator Launcher Downloads](https://mirthdownloadarchive.s3.amazonaws.com/mcal-downloads.html)
* [Rhino](https://rhino.github.io/) (the JS engine that Mirth Connect uses.)

### Escape Sequences

| Sequence | Replacement | &nbsp;                                          |
| :------: | :---------: | :---------------------------------------------- |
|   \F\    |     \|      | Field Separator (MSH-1)                         |
|   \S\    |      ^      | Subfield Separator [MSH-2](0)                   |
|   \R\    |      ~      | Repetition Separator [MSH-2](1)                 |
|   \E\    |      \      | Escape Character [MSH-2](2)                     |
|   \T\    |      &      | Subcomponent Separator [MSH-2](3)               |
|  \\.br\  |     \n      | Carriage Return (nonstandard?)                  |
|  \X0D\   |     \n      | Carriage Return (Using \x##\ + Hex Character #) |
|  \X0A\   |     \r      | Line Feed (Using \x##\ + Hex Character #)       |


## Java

* [Amazon Corretto JDK](https://aws.amazon.com/corretto/)
* [OpenJDK](https://openjdk.org/) ([Download](https://openjdk.org/projects/jdk/))
* [Apache Maven](https://maven.apache.org/) ([Download](https://maven.apache.org/download.cgi))
* [Spring](https://spring.io/) 
  * [Initializr](https://start.spring.io/)
  * [Initializr with Java 21 and Apache Camel](https://start.spring.io/#!type=maven-project&language=java&packaging=jar&jvmVersion=21&dependencies=camel)
* [Maven Repository](https://mvnrepository.com/)

### Tools

* [Dependency-Check-Maven](https://dependency-check.github.io/DependencyCheck/dependency-check-maven/index.html)
* [JUnit 5](https://junit.org/junit5/)
* [Project Lombok](https://projectlombok.org/)

## JavaScript

* [JavaScript - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [Rhino](https://rhino.github.io/) (the JS engine that Mirth Connect uses.)

#### Fundamental Objects

* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  * [.assign(target, source1, /* …, */ sourceN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) - copies all enumerable own properties from one or more source objects to a target object
  * [.entries(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) - returns an array of a given object's own enumerable string-keyed property key-value pairs
  * [.freeze(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) - makes the object immutable
* [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
* [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## Linux

* [A poem about Linux commands](/linux/)
* [GNU coreutils](https://www.gnu.org/software/coreutils/manual/html_node/index.html)
* [GNU emacs](https://www.gnu.org/software/emacs/documentation.html)
* [GNU grep](https://www.gnu.org/software/grep/manual/html_node/index.html)
* [GNU gzip](https://www.gnu.org/software/gzip/manual/html_node/index.html)
* [GNU nano](https://www.nano-editor.org/docs.php)
* [GNU tar](https://www.gnu.org/software/tar/manual/html_node/index.html)
* [GNU wget](https://www.gnu.org/software/wget/manual/html_node/index.html)

| Output, Summarize, or Hash Files     | &nbsp;                                                                                       |
| :----------------------------------- | :------------------------------------------------------------------------------------------- |
| Write and concatenate files          | [`cat`](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html)         |
| Transform data into printable data   | [`base64`](https://www.gnu.org/software/coreutils/manual/html_node/base64-invocation.html)   |
| Output the first part of a file      | [`head`](https://www.gnu.org/software/coreutils/manual/html_node/head-invocation.html)       |
| Output the last part of a file       | [`tail`](https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html)       |
| Split a file into pieces             | [`split`](https://www.gnu.org/software/coreutils/manual/html_node/split-invocation.html)     |
| Print newline, word, and byte counts | [`wc`](https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html)           |
| Print or check MD5 digests           | [`md5sum`](https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html)   |
| Print or check SHA-1 digests         | [`sha1sum`](https://www.gnu.org/software/coreutils/manual/html_node/sha1sum-invocation.html) |

| Operating on File Contents/Sorting | &nbsp;                                                                                 |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
| Sort text files                    | [`sort`](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html) |
| Shuffle text files                 | [`shuf`](https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html) |
| Uniquify files                     | [`uniq`](https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html) |
| Compare two sorted files by line   | [`comm`](https://www.gnu.org/software/coreutils/manual/html_node/comm-invocation.html) |
| Join lines on a common field       | [`join`](https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html) |
| Print a line of text               | [`echo`](https://www.gnu.org/software/coreutils/manual/html_node/echo-invocation.html) |

| Directory Listing and Operations                     | &nbsp;                                                                                           |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| List directory contents                              | [`ls`](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html)               |
| Color setup for `ls`                                 | [`dircolors`](https://www.gnu.org/software/coreutils/manual/html_node/dircolors-invocation.html) |
| Copy files and directories                           | [`cp`](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html)               |
| Copy files and set attributes                        | [`install`](https://www.gnu.org/software/coreutils/manual/html_node/install-invocation.html)     |
| Convert and copy a file                              | [`dd`](https://www.gnu.org/software/coreutils/manual/html_node/dd-invocation.html)               |
| Move or rename files or directories                  | [`mv`](https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html)               |
| Remove (delete) files or directories                 | [`rm`](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html)               |
| Remove files more securely                           | [`shred`](https://www.gnu.org/software/coreutils/manual/html_node/shred-invocation.html)         |
| Make links between files                             | [`ln`](https://www.gnu.org/software/coreutils/manual/html_node/ln-invocation.html)               |
| Make a new directory                                 | [`mkdir`](https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html)         |
| Print the value of a symlink or cannonical file name | [`readlink`](https://www.gnu.org/software/coreutils/manual/html_node/readlink-invocation.html)   |
| Remove an empty directory                            | [`rmdir`](https://www.gnu.org/software/coreutils/manual/html_node/rmdir-invocation.html)         |
| Remove files via the unlink syscall                  | [`unlink`](https://www.gnu.org/software/coreutils/manual/html_node/unlink-invocation.html)       |
| Report file system space usage                       | [`df`](https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html)               |
| Estimate file space usage                            | [`du`](https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html)               |
| Report file or file system status                    | [`stat`](https://www.gnu.org/software/coreutils/manual/html_node/stat-invocation.html)           |

| File Attribute Manipulation    | &nbsp;                                                                                   |
| :----------------------------- | :--------------------------------------------------------------------------------------- |
| Change file owner and group    | [`chown`](https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html) |
| Change file group ownership    | [`chgrp`](https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html) |
| Change file access permissions | [`chmod`](https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html) |
| Change file timestamp          | [`touch`](https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html) |

| File Name Manipulation                      | &nbsp;                                                                                         |
| :------------------------------------------ | :--------------------------------------------------------------------------------------------- |
| Strip directory and suffix from a file name | [`basename`](https://www.gnu.org/software/coreutils/manual/html_node/basename-invocation.html) |
| Strip last file name component              | [`dirname`](https://www.gnu.org/software/coreutils/manual/html_node/dirname-invocation.html)   |
| Check file name validity and portability    | [`pathchk`](https://www.gnu.org/software/coreutils/manual/html_node/pathchk-invocation.html)   |
| Print the resolved file name                | [`realpath`](https://www.gnu.org/software/coreutils/manual/html_node/realpath-invocation.html) |

| Working Context                         | &nbsp;                                                                                         |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------- |
| Print the current working directory     | [`pwd`](https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html)           |
| Print all or some environment variables | [`printenv`](https://www.gnu.org/software/coreutils/manual/html_node/printenv-invocation.html) |
| Run a command immune to hangups         | [`nohup`](https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html)       |
| Send a signal to a process              | [`kill`](https://www.gnu.org/software/coreutils/manual/html_node/kill-invocation.html)         |


## Regular Expressions

Metacharacters that must be escaped: `^` `[` `.` `$` `{` `*` `(` `)` `\` `+` `|` `?` `<` `>`

| Anchors | &nbsp;            |
| :------ | :---------------- |
| `^`     | start of line     |
| `$`     | end of line       |
| `\A`    | start of string   |
| `\Z`    | end of string     |
| `\b`    | word boundary     |
| `\B`    | not word boundary |
| `\<`    | start of word ⚠️   |
| `\>`    | end of word ⚠️     |

| Quantifiers | &nbsp;                                                 |
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

| Ranges | &nbsp;                                              |
| :----- | :-------------------------------------------------- |
| `.`    | any character, typically excluding newline/linefeed |
| `|`    | or (e.g., `a | b` matches `a` or `b`)               |
| `()`   | capturing group (e.g., `Date: (\d{4}-\d{2}-\d{2})`) |
| `(?:)` | non-capturing/passive group (e.g., `(?:this|that)`) |
| `[]`   | characer range                                      |
| `[^]`  | negative characer range                             |

| Character Class | &nbsp;                                                                            |
| :-------------- | :-------------------------------------------------------------------------------- |
| `\c`            | control character (e.g., ASCII 0-31 & 127), same as POSIX `[:word:]`              |
| `\s`            | white space (e.g., `[\t\n\f\r ]` tab, newline, form feed, carriage returm, space) |
| `\S`            | not white space                                                                   |
| `\d`            | digit (e.g., `[0-9]`)                                                             |
| `\D`            | not digit                                                                         |
| `\w`            | word (e.g., `[A-Za-z0-9_]`)                                                       |
| `\W`            | not word                                                                          |

| Escape Sequences       | &nbsp;                                       |
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

| POSIX Character Class | &nbsp;                                                                                                                               |
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

| Backreferences ⚠️ | &nbsp;                  |
| :--------------- | :---------------------- |
| `$n` or `\n`     | nth capturing group     |
| ``$` ``          | before matched string   |
| `$'`             | after matched string    |
| `$+`             | last matched string     |
| `$&`             | entire matched string   |
| `$_`             | entire input string     |
| `$$`             | literal dollar sign `$` |

⚠️ Not universally supported

## SSL Certificates

* [Certbot](https://certbot.eff.org/)
* [Let's Encrypt](https://letsencrypt.org/)

### Using Certbot with unexposed domains

cloudflare.ini:

```text
# Cloudflare API token used by Certbot
dns_cloudflare_api_token = be967a3beb4d7048d57f1b3ddc51d52d
```

commands:

```bash
apt install certbot python-is-python3 python3-certbot-dns-cloudflare
certbot certonly --dns-cloudflare --dns-cloudflare-credentials /path/to/cloudflare.ini -d domain.name.com -n
```

## Time Zones

|   P   |   M   |   C   |   E   |
| :---: | :---: | :---: | :---: |
|  10   |  11   |  12   |   1   |
|  11   |  12   |   1   |   2   |
|  12   |   1   |   2   |   3   |
|   1   |   2   |   3   |   4   |
|   2   |   3   |   4   |   5   |
|   3   |   4   |   5   |   6   |
|   4   |   5   |   6   |   7   |
|   5   |   6   |   7   |   8   |
|   6   |   7   |   8   |   9   |
|   7   |   8   |   9   |  10   |
|   8   |   9   |  10   |  11   |
|   9   |  10   |  11   |  12   |
