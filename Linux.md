---
title: Linux Reference Page
permalink: /linux/
---

## Linux

* [trzsz](https://trzsz.github.io/)
  * [trzsz installation](https://trzsz.github.io/#installation)
  * [trzsz manual](https://trzsz.github.io/#trzsz-manual)
* [ttyd](https://github.com/tsl0922/ttyd)

### Recipes

* [Pimoroni Unicorn Hat HD](https://github.com/pimoroni/unicorn-hat-hd)
* [Pimoroni Unicorn Hat Mini](https://github.com/pimoroni/unicornhatmini-python)
* [Raspberry Pi Zero USB Gadget](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget)

Copy single file with sudo

```sh
sudo cat <file> | ssh <host> sudo tee <path>
```

Copy files with sudo

```sh
sudo tar -zc * | ssh <host> sudo tar -zxC <destination directory>
```

Install uv and trzsz

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
. ~/.local/bin/env
cd ~/.local
uv venv
uv pip install trzsz
ln -s ~/.local/.venv/bin/trz ~/.local/bin/trz
ln -s ~/.local/.venv/bin/tsz ~/.local/bin/tsz
```

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

A is for [awk](https://www.gnu.org/software/gawk/manual/html_node/index.html), which runs like a snail, and<br />
B is for [biff](https://en.wikipedia.org/wiki/Biff_(Unix)), which reads all your mail.

C is for [cc](https://www.gnu.org/software/gcc/), as hackers recall, while<br />
D is for [dd](https://www.gnu.org/software/coreutils/manual/html_node/dd-invocation.html), the command that does all.

E is for [emacs](https://www.gnu.org/software/emacs/documentation.html), which rebinds your keys, and<br />
F is for [fsck](https://en.wikipedia.org/wiki/Fsck), which rebuilds your trees.

G is for [grep](https://www.gnu.org/software/grep/manual/html_node/index.html), a clever detective, while<br />
H is for halt, which may seem defective.

I is for [indent](https://www.gnu.org/software/indent/manual/indent/index.html), which rarely amuses, and<br />
J is for [join](https://www.gnu.org/software/coreutils/manual/html_node/join-invocation.html), which nobody uses.

K is for [kill](https://www.gnu.org/software/coreutils/manual/html_node/kill-invocation.html), which makes you the boss, while<br />
L is for [lex](https://en.wikipedia.org/wiki/Lex_(software)), which is missing from DOS.

M is for [more](https://en.wikipedia.org/wiki/More_(command)), from which [Less](https://www.greenwoodsoftware.com/less/) was begot, and<br />
N is for [nice](https://www.gnu.org/software/coreutils/manual/html_node/nice-invocation.html), which it really is not.

O is for [od](https://www.gnu.org/software/coreutils/manual/html_node/od-invocation.html), which prints out things nice, while<br />
P is for [passwd](https://en.wikipedia.org/wiki/Passwd), which reads in strings twice.

Q is for [quota](https://man.openbsd.org/quota.1), a Berkeley-type fable, and<br />
R is for [ranlib](https://sourceware.org/binutils/docs/binutils/ranlib.html), for sorting [ar](https://sourceware.org/binutils/docs/binutils/ar.html) [sic] table.

S is for [spell](https://savannah.gnu.org/projects/spell/), which attempts to belittle, while<br />
T is for [true](https://www.gnu.org/software/coreutils/manual/html_node/true-invocation.html), which does very little.

U is for [uniq](https://www.gnu.org/software/coreutils/manual/html_node/uniq-invocation.html), which is used after [Sort](https://www.gnu.org/software/coreutils/manual/html_node/sort-invocation.html), and<br />
V is for [vi](https://ex-vi.sourceforge.net/), which is hard to abort.

W is for [whoami](https://www.gnu.org/software/coreutils/manual/html_node/whoami-invocation.html), which tells you your name, while<br />
X is, well, [X](https://www.x.org/), of dubious fame.

Y is for [yes](https://www.gnu.org/software/coreutils/manual/html_node/yes-invocation.html), which makes an impression, and<br />
Z is for [zcat](https://www.gnu.org/software/gzip/manual/gzip.html), which handles compression.