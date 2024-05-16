# Reference Pages



## AWS

* [AWS CDK Reference Documentation](https://docs.aws.amazon.com/cdk/api/v2/)
  * [AWS CDK Python Reference](https://docs.aws.amazon.com/cdk/api/v2/python/)
* [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/)
* [Boto3 documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
  * [CloudWatch](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/cloudwatch.html)
  * [EC2](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ec2.html)
  * [Glue](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/glue.html)
  * [IAM](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/iam.html)
  * [Lambda](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/lambda.html)
  * [RDS](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/rds.html)
  * [S3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html)
  * [SNS](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sns.html)
  * [SQS](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html)
  * [SSM](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/ssm.html)

## Java

* [Amazon Corretto JDK](https://aws.amazon.com/corretto/)
* [OpenJDK](https://openjdk.org/) ([Download](https://openjdk.org/projects/jdk/))
* [Apache Maven](https://maven.apache.org/) ([Download](https://maven.apache.org/download.cgi))
* [Spring](https://spring.io/) ([Initializr](https://start.spring.io/))
* [Maven Repository](https://mvnrepository.com/)

### Tools

* [JUnit 5](https://junit.org/junit5/)
* [Project Lombok](https://projectlombok.org/)

## Git

### Create Respositories 

* `git init [project name]` Creates a new local repository with the specified name
* `git clone [url]` Downloads a project and its entire version history
* `git flow init [-d]` Initialize Git Flow extensions

### Make Changes

* `git status` List all new or modified files to be committed
* `git diff` Shows file differences not yet staged
* `git add [file]` Snapshots the file in preparation for versioning
* `git diff --staged` Shows file differences between staging and the last file version
* `git commit -m "[descriptive message]"` Records file snapshots permanently in version history

### Branching

* `git branch` Lists all local branches in the current repository
* `git branch [branch-name]` Creates a new branch
* `git checkout [branch-name]` Switches to the specified branch and updates the working directory
* `git merge [branch]` Combines the specified branch’s history into the current branch
* `git branch -d [branch-name]` Deletes the specified branch
* `git flow feature start [feature-name]` Create a Git Flow feature
* `git flow feature finish [feature-name]` This will merge the changes into the local develop branch and delete the feature branch both locally and on the remote origin.


### Refactor Filenames

* `git rm [file]` Deletes the file from the working directory and stages the deletion
* `git rm --cached [file]` Removes the file from version control but preserves the file locally
* `git mv [file-original] [file-renamed]` Changes the file name and prepares it for commit

### Stashing

* `git stash` Temporarily stores all modified tracked files
  * Add `-u` to also stash untracked files.
  * Add `-a` to also stash 'ignored' files.
* `git stash list` Lists all stashed changesets
* `git stash pop` Restores the most recently stashed files
* `git stash drop` Discards the most recently stashed changeset

### History

* `git log` Lists version history for the current branch
* `git log --follow [file]` Lists version history for a file, including renames
* `git diff [first-branch]...[second-branch]` Shows content differences between two branches
* `git show [commit]` Outputs metadata and content changes of the specified commit
* `git reset [commit]` Undoes all commits afer [commit], preserving changes locally
* `git reset --hard [commit]` Discards all history and changes back to the specified commit

### Synchronize Changes

* `git fetch [bookmark]` Downloads all history from the repository bookmark
* `git merge [bookmark]/[branch]` Combines bookmark’s branch into current local branch
* `git push [alias] [branch]` Uploads all local branch commits to GitHub
* `git pull` Downloads bookmark history and incorporates changes

### Maintenance

* `git gc` Git Cleanup -- Runs a number of housekeeping tasks within the current repository, such as compressing file revisions (to reduce disk space and increase performance), removing unreachable objects which may have been created from prior invocations of git add, packing refs, pruning reflog, rerere metadata or stale working trees. May also update ancillary indexes such as the commit-graph.
* `git update-index --assume-unchanged [<file> ...]` Stop showing changes on a tracked file.
* `git update-index --no-assume-unchanged [<file> ...]` Resume showing changes on a tracked file.
* `git remote prune origin` or `git fetch --prune origin` Prune local branches that don't exist on the remote anymore

Note: Feature branches that originated locally and were merged via a merge request won't be automatically removed, but you can find these with git branch -vv. The remote will say "; gone". 

## Python

### Guides

* [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
* [Python Package Index](https://pypi.org/)
* [Python Packaging User Guide](https://packaging.python.org/en/latest/)
  * [pyproject.toml specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/)

### Core Python Documentation

* [Python 3 Documentation (python.org)](https://docs.python.org/3/index.html)
* [Python Module Index](https://docs.python.org/3/py-modindex.html)
* [The Python Language Reference](https://docs.python.org/3/reference/index.html)
  * [Escape Sequences](https://docs.python.org/3/reference/lexical_analysis.html#escape-sequences)
  * [Falsey Values](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
  * [Format Strings](https://docs.python.org/3/library/string.html#formatstrings) / [Format Spec Mini-Language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
* [The Python Standard Library](https://docs.python.org/3/library/index.html)
  * [base64](https://docs.python.org/3/library/base64.html)
  * [collections.abc](https://docs.python.org/3/library/collections.abc.html)
  * [dataclasses](https://docs.python.org/3/library/dataclasses.html)
  * [datetime](https://docs.python.org/3/library/datetime.html) ([format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes))
  * [hashlib](https://docs.python.org/3/library/hashlib.html)
  * [json](https://docs.python.org/3/library/json.html)
  * [logging](https://docs.python.org/3/library/logging.html)
  * [mimetypes](https://docs.python.org/3/library/mimetypes.html)
  * [os](https://docs.python.org/3/library/os.html)
  * [os.path](https://docs.python.org/3/library/os.path.html)
  * [pathlib](https://docs.python.org/3/library/pathlib.html)
  * [re](https://docs.python.org/3/library/re.html)
  * [sqlite3](https://docs.python.org/3/library/sqlite3.html)
  * [string](https://docs.python.org/3/library/string.html)
  * [sys](https://docs.python.org/3/library/sys.html)
  * [typing](https://docs.python.org/3/library/typing.html)
  * [urllib.parse](https://docs.python.org/3/library/urllib.parse.html)
  * [venv](https://docs.python.org/3/library/venv.html)
* [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)
* [Built-in Functions](https://docs.python.org/3/library/functions.html)
* [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
  * [bytes](https://docs.python.org/3/library/stdtypes.html#bytes)
  * [dict](https://docs.python.org/3/library/stdtypes.html#dict)
  * [list](https://docs.python.org/3/library/stdtypes.html#list)
  * [set](https://docs.python.org/3/library/stdtypes.html#set)
  * [str](https://docs.python.org/3/library/stdtypes.html#str) ([methods](https://docs.python.org/3/library/stdtypes.html#string-methods), [%-formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-bytes-formatting))
  * [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)
  * [TypedDict](https://docs.python.org/3/library/typing.html#typing.TypedDict)
  * [Context Manager](https://docs.python.org/3/library/stdtypes.html#context-manager-types)

### Environment/Dependency Management

* [pip](https://pip.pypa.io/en/stable/)
* [pipenv](https://pipenv.pypa.io/en/latest/)
* [pyenv-win](https://github.com/pyenv-win/pyenv-win)

### Code Analysis Tools

* [pytest](https://docs.pytest.org/)
* [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/index.html)
* [mypy](https://mypy.readthedocs.io/en/stable/index.html)
* [pylint](https://pylint.readthedocs.io/en/latest/)
* [pyflakes](https://github.com/PyCQA/pyflakes)
* [pycodestyle](https://pycodestyle.pycqa.org/en/latest/)
* [bandit](https://bandit.readthedocs.io/en/latest/)
* [checkov](https://www.checkov.io/)

### 3rd Party Libraries

* [assertpy](https://github.com/assertpy/assertpy)
* [IPython](https://ipython.readthedocs.io/en/stable/index.html)
  * [Built-in magic commands](https://ipython.readthedocs.io/en/stable/interactive/magics.html)
* [Jupyter](https://jupyter.org/)
  * [The Ultimate Markdown Guide (for Jupyter Notebook)](https://medium.com/analytics-vidhya/the-ultimate-markdown-guide-for-jupyter-notebook-d5e5abf728fd)
* [liquid template language (shopify.github.io)](https://shopify.github.io/liquid/)
* [localstack](https://github.com/localstack/localstack)
* [moto](https://docs.getmoto.org/en/latest/#)
* [pandas](https://pandas.pydata.org/docs/index.html)
  * [API reference](https://pandas.pydata.org/docs/reference/index.html)
* [requests](https://requests.kennethreitz.org/en/latest/)
* [SQLAlchemy](https://www.sqlalchemy.org/)

### Misc

* [ralsina/rst-cheatsheet: A two-page cheatsheet for restructured text](https://github.com/ralsina/rst-cheatsheet)
* [pyWhat/pywhat/Data/regex.json](https://github.com/bee-san/pyWhat/blob/main/pywhat/Data/regex.json)

## Time Zones

<table>
  <tr>
    <th>P</th>
    <th>M</th>
    <th>C</th>
    <th>E</th>
  </tr>
  <tr>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>1</td>
  </tr>
  <tr>
    <td>11</td>
    <td>12</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>12</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
  </tr>
  <tr>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
  <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
  </tr>
  <tr>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
  </tr>
  <tr>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
  </tr>
  <tr>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
  </tr>
  <tr>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
  </tr>
</table>
