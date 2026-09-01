---
title: Batch
permalink: /batch/
---

.bat/.cmd

## Parameter Extensions

| %-modifier  | &nbsp;                                                   |
| :---------- | :------------------------------------------------------- |
| `%0`        | the batch file name/command                              |
| `%*`        | all arguments after $0 (**Note:** unaffected by `shift`) |
| `%1 .. %9`  | nth argument (if n is the number following `%`)          |
| `%~f1`      | Expand `%1` to its fully-qualified path name             |
| `%~d1`      | Expand `%1` to its drive component (i.e. `C:`)           |
| `%~p1`      | Expand `%1` to its path component (i.e. `\directory\`)   |
| `%~n1`      | Expand `%1` to its name/stem component                   |
| `%~x1`      | Expand `%1` to its extension component                   |
| `%~s1`      | Expand `%1` to its short (8.3) filename                  |
| `%~a1`      | Expand `%1` to its file attributes                       |
| `%~t1`      | Expand `%1` to its file timestamp                        |
| `%~z1`      | Expand `%1` to its file size                             |
| `%~$PATH:1` | Seardh $PATH for `%1`, expand to full path of 1st match  |

* Modifiers apply only to arguments, not environment variables.
* `%~` removes surrounding quotes from the argument before applying modifiers.
* Combined modifiers are processed left‑to‑right.
