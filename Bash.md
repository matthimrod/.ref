---
title: Bash
permalink: /bash
---

## Conditional and Looping Statements

## [if](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-if)

```bash
if test-commands; then
  consequent-commands;
[elif more-test-commands; then
  more-consequents;]
[else alternate-consequents;]
fi
```

## [case](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-case)

```bash
case word in
    [ [(] pattern [| pattern]...) command-list ;;]...
esac
```

* `case` will selectively execute the `command-list` corresponding to the first `pattern` that matches `word`.

## [select](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-select)

```bash
select name [in words ...]; do commands; done
```

* Expand the list of words follwiong `in`, generating a list of items to stderr preceeded by a number. A line is read from stdin, and the corresponding 

## [until](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-until)

```bash
until test-commands; do consequent-commands; done
```

## [while](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-until) 

```bash
while test-commands; do consequent-commands; done
```

## [for](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#index-for)

```bash
for name [ [in words ...] ; ] do commands; done
```

* expand `words` and then execute `commands` once for each
* if `in words` is not specified, the for command executes once forr each positional parameter.

```bash
for (( expr1 ; expr2 ; expr3 )) [;] do commands ; done
```



