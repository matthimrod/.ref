---
title: Python
permalink: /python/
---

## Git

| Repostiory Operations                                                     | &nbsp;                              |
| :------------------------------------------------------------------------ | :---------------------------------- |
| Create a new repository with the specified name                           | `git init [project name]`           |
| Download a working copy of a repository locally                           | `git clone [url]`                   |
| List all new or modified files to be committed                            | `git status`                        |
| List the version history for the current branch                           | `git log [--graph] [--[short]stat]` |
| List the version history for a given file (including renames)             | `git log --follow [file]`           |
| Show the details of a given commit                                        | `git show [commit]`                 |
| Reset the working copy "HEAD" to the state at the given commit            | `git reset [commit]`                |
| Reset the working copy "HEAD" to the given commit and discard the changes | `git reset --hard [commit]`         |

| Commit Operations                                                        | &nbsp;                          |
| :----------------------------------------------------------------------- | :------------------------------ |
| Capture a copy of the file(s) in preparation for committing              | `git add [file]`                |
| Discard changes that have been made to the working copy                  | `git restore [file]`            |
| Discard changes that have staged for commit, keep the working copy       | `git restore --staged [file]`   |
| Delete the file from the working directory and stages the deletion       | `git rm [file]`                 |
| Remove the file from version control but preserves the working copy      | `git rm --cached [file]`        |
| Move/Rename the file and stage the action                                | `git mv [source] [destination]` |
| Show file differences not yet staged (local copy vs. repo)               | `git diff [file]`               |
| Show file differences staged for commit (staged copy vs. local copy)     | `git diff --staged [file`       |
| Add the staged changes permanently in version history                    | `git commit -m "[message]"`     |
| Upload commits from the local coopy to the server                        | `git push`                      |
| Download changes from the server to the local copy of the current branch | `git pull`                      |
| Download a copy of changes to the repository from the server             | `git fetch`                     |

| Stash Operations                                                    | &nbsp;                               |
| :------------------------------------------------------------------ | :----------------------------------- |
| Store a temporary copy of all modified, tracked files               | `git stash [push] [-m "message"]`    |
| Store a copy of all changed files (tracked, untracked, NOT ignored) | `git stash [push] -u [-m "message"]` |
| Store a copy of all changed files (tracked, untracked, AND ignored) | `git stash [push] -a [-m "message"]` |
| List all entries in the stash                                       | `git stash list`                     |
| Restore the most recent entry from the stash                        | `git stash pop`                      |
| Discard the most recent entry from the stash                        | `git stash drop`                     |

| Branch Operations                                                            | &nbsp;                                   |
| :--------------------------------------------------------------------------- | :--------------------------------------- |
| List the local branches in the current repository                            | `git branch [-l]`                        |
| List the remote branches in the current repository                           | `git branch -r`                          |
| List the both local and remote branches in the current repository            | `git branch -a`                          |
| Create a new branch                                                          | `git branch [branch-name]`               |
| Delete the specified branch                                                  | `git branch -d [branch-name]`            |
| Switch to the specified branch and update the files in the working directory | `git checkout [branch-name]`             |
| Combine the history from the specified branch into the current branch        | `git merge [branch]`                     |
| Shows content differences between two branches                               | `git diff [first]...[second]`            |

| Maintenance                                                 | &nbsp;                                                  |
| :---------------------------------------------------------- | :------------------------------------------------------ |
| Git Cleanup                                                 | `git gc`                                                |
| Stop showing changes on a tracked file.                     | `git update-index --assume-unchanged [<file> ...]`      |
| Resume showing changes on a tracked file.                   | `git update-index --no-assume-unchanged [<file> ...]`   |
| Prune local branches that don't exist on the remote anymore | `git remote prune origin` or `git fetch --prune origin` |

Note: Feature branches that originated locally and were merged via a merge request won't be automatically removed, but you can find these with git branch -vv. The remote will say "; gone".

### Git Flow Extension

* [Git Flow](https://github.com/nvie/gitflow)
* [Using git-flow to automate your git branching workflow](https://jeffkreeftmeijer.com/git-flow/)

| Git Flow Operations                                                          | &nbsp;                                   |
| :--------------------------------------------------------------------------- | :--------------------------------------- |
| Initialize Git Flow extensions                                               | `git flow init [-d]`                     |
| Create a Git Flow feature branch                                             | `git flow feature start [feature-name]`  |
| Finish a Git Flow feature branch (merge the changes and delete the branch)   | `git flow feature finish [feature-name]` |

| Git Flow Workflows | &nbsp;                                                                                                                                    |
| :----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| init               | Initialize a new git repo with support for the branching model.                                                                           |
| feature            | Used to add new features to the code. Created from develop and merged to develop.                                                         |
| release            | Used to prepare a release from develop to be merged with master/main. Created from develop and merged to master/main and back to develop. |
| hotfix             | Used to quickly address necessary changes for the main branch. Created from master/main and merged back to master/main and to develop.    |

#### Git Flow Equivalents

```
git flow feature start <feature-name>
---
git checkout -b feature/<feature-name> develop
```

```
git flow feature finish <feature-name>
---
git checkout develop
git merge --no-ff feature/<feature-name>
git branch -d feature/<feature-name>
```

```
git flow release start <version>
---
git checkout -b release/<version> develop
```

```
git flow release finish <version>
---
git checkout master
git merge --no-ff release/<version>
git tag <version>
git checkout develop
git merge --no-ff release/<version>
git branch -d release/<version>
```

```
git flow hotfix start <version>
---
git checkout -b hotfix/<version> master
```

```
git flow hotfix finish <version>
---
git checkout master
git merge --no-ff hotfix/<version>
git tag <version>
git checkout develop
git merge --no-ff hotfix/<version>
git branch -d hotfix/<version>
```


### Git Cleanup

Git Cleanup runs a number of housekeeping tasks within the current repository, such as compressing file revisions (to reduce disk space and increase performance), removing unreachable objects which may have been created from prior invocations of git add, packing refs, pruning reflog, rerere metadata or stale working trees. May also update ancillary indexes such as the commit-graph.
