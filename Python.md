---
title: Python
permalink: /python/
---

# Python

## Guides

* [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/)
* [Python Package Index](https://pypi.org/)
* [Python Packaging User Guide](https://packaging.python.org/en/latest/)
  * [pyproject.toml specification](https://packaging.python.org/en/latest/specifications/pyproject-toml/)

## Core Python Documentation

* [Status of Python Versions](https://devguide.python.org/versions/)
* [Python 3 Documentation (python.org)](https://docs.python.org/3/index.html)
* [Python Module Index](https://docs.python.org/3/py-modindex.html)
  * [Modules CLI](https://docs.python.org/3/library/cmdline.html)
* [The Python Language Reference](https://docs.python.org/3/reference/index.html)
  * [Escape Sequences](https://docs.python.org/3/reference/lexical_analysis.html#escape-sequences)
  * [Falsey Values](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
  * [Format Strings](https://docs.python.org/3/library/string.html#formatstrings) / [Format Spec Mini-Language](https://docs.python.org/3/library/string.html#format-specification-mini-language)

## [The Python Standard Library](https://docs.python.org/3/library/index.html)

### [Built-in Functions](https://docs.python.org/3/library/functions.html)

### [Built-in Constants](https://docs.python.org/3/library/constants.html)

### [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)

### [Built-in Types](https://docs.python.org/3/library/stdtypes.html)

* [boolean operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
* [comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons)
* [Boolean Type](https://docs.python.org/3/library/stdtypes.html#boolean-type-bool)
  * [bool](https://docs.python.org/3/library/functions.html#bool): boolean
* [Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)
  * [int](https://docs.python.org/3/library/functions.html#int): integers
  * [float](https://docs.python.org/3/library/functions.html#float): floating point (typically a double in underlying C)
  * [complex](https://docs.python.org/3/library/functions.html#complex): real part + imaginary part (&radic;i)
* [Iterator Types](https://docs.python.org/3/library/stdtypes.html#iterator-types)
* [Sequence Types](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)
  * [list](https://docs.python.org/3/library/stdtypes.html#list): mutable sequences typically of homogenous data
  * [tuple](https://docs.python.org/3/library/stdtypes.html#tuple): an immutable sequences
  * [range](https://docs.python.org/3/library/stdtypes.html#range): an immutable sequence of numbers
  * [Text Sequence Type](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
    * [str](https://docs.python.org/3/library/stdtypes.html#str)
      * [str-specific methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
      * [format string syntax](https://docs.python.org/3/library/string.html#format-string-syntax)
      * [format specification mini-language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
      * [printf-style string formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)
  * [Binary Sequence Types](https://docs.python.org/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview)
    * [bytes](https://docs.python.org/3/library/stdtypes.html#bytes): immutable sequences of single bytes
    * [bytearray](https://docs.python.org/3/library/stdtypes.html#bytearray): mutable sequences of single bytes
    * [memoryview](https://docs.python.org/3/library/stdtypes.html#memoryview): objects that allow Python code to access the internal data of an object that supports the [buffer protocol](https://docs.python.org/3/c-api/buffer.html#bufferobjects) without copying.
* [Set Types](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)
  * [set](https://docs.python.org/3/library/stdtypes.html#set)
  * [frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)
* [Mapping Types](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict): currently only dict
  * [dict](https://docs.python.org/3/library/stdtypes.html#dict): maps hashable values to arbitrary objects
* [Context Manager Types](https://docs.python.org/3/library/stdtypes.html#context-manager-types)

### [Text Processing Services](https://docs.python.org/3/library/text.html)

* [string](https://docs.python.org/3/library/string.html): Common string operations
* [re](https://docs.python.org/3/library/re.html): Regular expression operations
* [difflib](https://docs.python.org/3/library/difflib.html): Helpers for computing deltas
* [textwrap](https://docs.python.org/3/library/textwrap.html): Text wrapping and filling
* [unicodedata](https://docs.python.org/3/library/unicodedata.html): Unicode Character Database
* [stringprep](https://docs.python.org/3/library/stringprep.html): Internet String Preparation

### [Binary Data Services](https://docs.python.org/3/library/binary.html)

* [struct](https://docs.python.org/3/library/struct.html): Interpret bytes as packed binary data
* [codecs](https://docs.python.org/3/library/codecs.html): Codec registry and base classes

### [Data Types](https://docs.python.org/3/library/datatypes.html)

* [datetime](https://docs.python.org/3/library/datetime.html): Basic date and time types
  * [strftime/strptime format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes)
* [zoneinfo](https://docs.python.org/3/library/zoneinfo.html): IANA time zone support
* [calendar](https://docs.python.org/3/library/calendar.html): General calendar-related functions
* [collections](https://docs.python.org/3/library/collections.html): Container datatypes
* [collections.abc](https://docs.python.org/3/library/collections.abc.html): Abstract Base Classes for Containers
* [heapq](https://docs.python.org/3/library/heapq.html): Heap queue algorithm
* [bisect](https://docs.python.org/3/library/bisect.html): Array bisection algorithm
* [array](https://docs.python.org/3/library/array.html): Efficient arrays of numeric values
* [weakref](https://docs.python.org/3/library/weakref.html): Weak references
* [types](https://docs.python.org/3/library/types.html): Dynamic type creation and names for built-in types
* [copy](https://docs.python.org/3/library/copy.html): Shallow and deep copy operations
* [pprint](https://docs.python.org/3/library/pprint.html): Data pretty printer
* [reprlib](https://docs.python.org/3/library/reprlib.html): Alternate repr() implementation
* [enum](https://docs.python.org/3/library/enum.html): Support for enumerations
* [graphlib](https://docs.python.org/3/library/graphlib.html): Functionality to operate with graph-like structures

### [Numeric and Mathematical Modules](https://docs.python.org/3/library/numeric.html)

* [numbers](https://docs.python.org/3/library/numbers.html): Numeric abstract base classes
* [math](https://docs.python.org/3/library/math.html): Mathematical functions
* [cmath](https://docs.python.org/3/library/cmath.html): Mathematical functions for complex numbers
* [decimal](https://docs.python.org/3/library/decimal.html): Decimal fixed-point and floating-point arithmetic
* [fractions](https://docs.python.org/3/library/fractions.html): Rational numbers
* [random](https://docs.python.org/3/library/random.html): Generate pseudo-random numbers
* [statistics](https://docs.python.org/3/library/statistics.html): Mathematical statistics functions

### [Functional Programming Modules](https://docs.python.org/3/library/functional.html)

* [itertools](https://docs.python.org/3/library/itertools.html): Functions creating iterators for efficient looping
* [functools](https://docs.python.org/3/library/functools.html): Higher-order functions and operations on callable objects
* [operator](https://docs.python.org/3/library/operator.html): Standard operators as functions

### [File and Directory Access](https://docs.python.org/3/library/filesys.html)

* [pathlib](https://docs.python.org/3/library/pathlib.html): Object-oriented filesystem paths
* [os.path](https://docs.python.org/3/library/os.path.html): Common pathname manipulations
* [stat](https://docs.python.org/3/library/stat.html): Interpreting stat() results
* [filecmp](https://docs.python.org/3/library/filecmp.html): File and Directory Comparisons
* [tempfile](https://docs.python.org/3/library/tempfile.html): Generate temporary files and directories
* [glob](https://docs.python.org/3/library/glob.html): Unix style pathname pattern expansion
* [fnmatch](https://docs.python.org/3/library/fnmatch.html): Unix filename pattern matching
* [linecache](https://docs.python.org/3/library/linecache.html): Random access to text lines
* [shutil](https://docs.python.org/3/library/shutil.html): High-level file operations

### [Data Persistence](https://docs.python.org/3/library/persistence.html)

* [pickle](https://docs.python.org/3/library/pickle.html): Python object serialization
* [copyreg](https://docs.python.org/3/library/copyreg.html): Register pickle support functions
* [shelve](https://docs.python.org/3/library/shelve.html): Python object persistence
* [marshal](https://docs.python.org/3/library/marshal.html): Internal Python object serialization
* [sqlite3](https://docs.python.org/3/library/sqlite3.html): DB-API 2.0 interface for SQLite databases

### [Data Compression and Archiving](https://docs.python.org/3/library/archiving.html)

* [zlib](https://docs.python.org/3/library/zlib.html): Compression compatible with gzip
* [gzip](https://docs.python.org/3/library/gzip.html): Support for gzip files
* [bz2](https://docs.python.org/3/library/bz2.html): Support for bzip2 compression
* [lzma](https://docs.python.org/3/library/lzma.html): Compression using the LZMA algorithm
* [zipfile](https://docs.python.org/3/library/zipfile.html): Work with ZIP archives
* [tarfile](https://docs.python.org/3/library/tarfile.html): Read and write tar archive files

### [File Formats](https://docs.python.org/3/library/fileformats.html)

* [csv](https://docs.python.org/3/library/csv.html): CSV File Reading and Writing
* [configparser](https://docs.python.org/3/library/configparser.html): Configuration file parser
* [tomllib](https://docs.python.org/3/library/tomllib.html): Parse TOML files
* [netrc](https://docs.python.org/3/library/netrc.html): netrc file processing

### [Cryptographic Services](https://docs.python.org/3/library/crypto.html)

* [hashlib](https://docs.python.org/3/library/hashlib.html): Secure hashes and message digests
* [hmac](https://docs.python.org/3/library/hmac.html): Keyed-Hashing for Message Authentication
* [secrets](https://docs.python.org/3/library/secrets.html): Generate secure random numbers for managing secrets

### [Generic Operating System Services](https://docs.python.org/3/library/allos.html)

* [os](https://docs.python.org/3/library/os.html): Miscellaneous operating system interfaces
* [io](https://docs.python.org/3/library/io.html): Core tools for working with streams
* [time](https://docs.python.org/3/library/time.html): Time access and conversions
* [logging](https://docs.python.org/3/library/logging.html): Logging facility for Python
* [logging.config](https://docs.python.org/3/library/logging.config.html): Logging configuration
* [logging.handlers](https://docs.python.org/3/library/logging.handlers.html): Logging handlers
* [platform](https://docs.python.org/3/library/platform.html): Access to underlying platform’s identifying data
* [errno](https://docs.python.org/3/library/errno.html): Standard errno system symbols
* [ctypes](https://docs.python.org/3/library/ctypes.html): A foreign function library for Python

### [Command Line Interface Libraries](https://docs.python.org/3/library/cmdlinelibs.html)

* [argparse](https://docs.python.org/3/library/argparse.html): Parser for command-line options, arguments and subcommands
* [optparse](https://docs.python.org/3/library/optparse.html): Parser for command line options
* [getpass](https://docs.python.org/3/library/getpass.html): Portable password input
* [fileinput](https://docs.python.org/3/library/fileinput.html): Iterate over lines from multiple input streams

### [Concurrent Execution](https://docs.python.org/3/library/concurrency.html)

* [threading](https://docs.python.org/3/library/threading.html): Thread-based parallelism
* [multiprocessing](https://docs.python.org/3/library/multiprocessing.html): Process-based parallelism
* [multiprocessing.shared_memory](https://docs.python.org/3/library/multiprocessing.shared_memory.html): Shared memory for direct access across processes
* [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html): Launching parallel tasks
* [subprocess](https://docs.python.org/3/library/subprocess.html): Subprocess management
* [sched](https://docs.python.org/3/library/sched.html): Event scheduler
* [queue](https://docs.python.org/3/library/contextvars.html): A synchronized queue class
* [contextvars](https://docs.python.org/3/library/contextvars.html): Context Variables
* [_thread](https://docs.python.org/3/library/_thread.html): Low-level threading API

### [Networking and Interprocess Communication](https://docs.python.org/3/library/ipc.html)

* [asyncio](https://docs.python.org/3/library/asyncio.html): Asynchronous I/O
* [socket](https://docs.python.org/3/library/socket.html): Low-level networking interface
* [ssl](https://docs.python.org/3/library/ssl.html): TLS/SSL wrapper for socket objects

### [Internet Data Handling](https://docs.python.org/3/library/netdata.html)

* [email](https://docs.python.org/3/library/email.html): An email and MIME handling package
* [json](https://docs.python.org/3/library/json.html): JSON encoder and decoder
* [mailbox](https://docs.python.org/3/library/mailbox.html): Manipulate mailboxes in various formats
* [mimetypes](https://docs.python.org/3/library/mimetypes.html): Map filenames to MIME types
* [base64](https://docs.python.org/3/library/base64.html): Base16, Base32, Base64, Base85 Data Encodings
* [binascii](https://docs.python.org/3/library/binascii.html): Convert between binary and ASCII
* [quopri](https://docs.python.org/3/library/quopri.html): Encode and decode MIME quoted-printable data

### [Structured Markup Processing Tools](https://docs.python.org/3/library/markup.html)

* [html](https://docs.python.org/3/library/html.html): HyperText Markup Language support
* [html.parser](https://docs.python.org/3/library/html.parser.html): Simple HTML and XHTML parser
* [html.entities](https://docs.python.org/3/library/html.entities.html): Definitions of HTML general entities
* [XML Processing Modules](https://docs.python.org/3/library/xml.html)
  * [xml.etree.ElementTree](https://docs.python.org/3/library/xml.etree.elementtree.html): The ElementTree XML API

### [Internet Protocols and Support](https://docs.python.org/3/library/internet.html)

* [webbrowser](https://docs.python.org/3/library/webbrowser.html): Convenient web-browser controller
* [wsgiref](https://docs.python.org/3/library/wsgiref.html): WSGI Utilities and Reference Implementation
* [urllib](https://docs.python.org/3/library/urllib.html): URL handling modules
* [urllib.request](https://docs.python.org/3/library/urllib.request.html): Extensible library for opening URLs
* [urllib.response](https://docs.python.org/3/library/urllib.request.html#module-urllib.response): Response classes used by urllib
* [urllib.parse](https://docs.python.org/3/library/urllib.parse.html): Parse URLs into components
* [urllib.error](https://docs.python.org/3/library/urllib.error.html): Exception classes raised by urllib.request
* [urllib.robotparser](https://docs.python.org/3/library/urllib.robotparser.html): Parser for robots.txt
* [http](https://docs.python.org/3/library/http.html): HTTP modules
* [http.client](https://docs.python.org/3/library/http.client.html): HTTP protocol client
* [ftplib](https://docs.python.org/3/library/ftplib.html): FTP protocol client
* [uuid](https://docs.python.org/3/library/uuid.html): UUID objects according to RFC 4122
* [socketserver](https://docs.python.org/3/library/socketserver.html): A framework for network servers
* [http.server](https://docs.python.org/3/library/http.server.html): HTTP servers
* [http.cookies](https://docs.python.org/3/library/http.cookies.html): HTTP state management
* [http.cookiejar](https://docs.python.org/3/library/http.cookiejar.html): Cookie handling for HTTP clients
* [xmlrpc](https://docs.python.org/3/library/xmlrpc.html): XMLRPC server and client modules
* [xmlrpc.client](https://docs.python.org/3/library/xmlrpc.client.html): XML-RPC client access
* [xmlrpc.server](https://docs.python.org/3/library/xmlrpc.server.html): Basic XML-RPC servers
* [ipaddress](https://docs.python.org/3/library/ipaddress.html): IPv4/IPv6 manipulation library

### [Multimedia Services](https://docs.python.org/3/library/mm.html)

### [Internationalization](https://docs.python.org/3/library/i18n.html)

### [Program Frameworks](https://docs.python.org/3/library/frameworks.html)

* [cmd](https://docs.python.org/3/library/cmd.html): Support for line-oriented command interpreters
* [shlex](https://docs.python.org/3/library/shlex.html): Simple lexical analysis

### [Graphical User Interfaces with Tk](https://docs.python.org/3/library/tk.html)

### [Development Tools](https://docs.python.org/3/library/development.html)

* [typing](https://docs.python.org/3/library/typing.html): Support for type hints
* [pydoc](https://docs.python.org/3/library/pydoc.html): Documentation generator and online help system

### [Debugging and Profiling](https://docs.python.org/3/library/debug.html)

### [Software Packaging and Distribution](https://docs.python.org/3/library/distribution.html)

* [ensurepip](https://docs.python.org/3/library/ensurepip.html): Bootstrapping the pip installer
* [venv](https://docs.python.org/3/library/venv.html): Creation of virtual environments
* [zipapp](https://docs.python.org/3/library/zipapp.html): Manage executable Python zip archives

### [Python Runtime Services](https://docs.python.org/3/library/python.html)

* [sys](https://docs.python.org/3/library/sys.html): System-specific parameters and functions
* [sys.monitoring](https://docs.python.org/3/library/sys.monitoring.html): Execution event monitoring
* [sysconfig](https://docs.python.org/3/library/sysconfig.html): Provide access to Python’s configuration information
* [builtins](https://docs.python.org/3/library/builtins.html): Built-in objects
* [__main__](https://docs.python.org/3/library/__main__.html): Top-level code environment
* [warnings](https://docs.python.org/3/library/warnings.html): Warning control
* [dataclasses](https://docs.python.org/3/library/dataclasses.html): Data Classes
* [contextlib](https://docs.python.org/3/library/contextlib.html): Utilities for with-statement contexts
* [abc](https://docs.python.org/3/library/abc.html): Abstract Base Classes
* [atexit](https://docs.python.org/3/library/atexit.html): Exit handlers
* [traceback](https://docs.python.org/3/library/traceback.html): Print or retrieve a stack traceback
* [__future__](https://docs.python.org/3/library/__future__.html): Future statement definitions
* [gc](https://docs.python.org/3/library/gc.html): Garbage Collector interface
* [inspect](https://docs.python.org/3/library/inspect.html): Inspect live objects
* [site](https://docs.python.org/3/library/site.html): Site-specific configuration hook

### [Custom Python Interpreters](https://docs.python.org/3/library/custominterp.html)

### [Importing Modules](https://docs.python.org/3/library/modules.html)

* [zipimport](https://docs.python.org/3/library/zipimport.html): Import modules from Zip archives
* [pkgutil](https://docs.python.org/3/library/pkgutil.html): Package extension utility
* [modulefinder](https://docs.python.org/3/library/modulefinder.html): Find modules used by a script
* [runpy](https://docs.python.org/3/library/modulefinder.html): Locating and executing Python modules
* [importlib](https://docs.python.org/3/library/importlib.html): The implementation of import
* [importlib.resources](https://docs.python.org/3/library/importlib.resources.html): Package resource reading, opening and access
* [importlib.resources.abc](https://docs.python.org/3/library/importlib.resources.abc.html): Abstract base classes for resources
* [importlib.metadata](https://docs.python.org/3/library/importlib.metadata.html): Accessing package metadata
* [The initialization of the sys.path module search path](https://docs.python.org/3/library/sys_path_init.html)


### [Python Language Services](https://docs.python.org/3/library/language.html)

### [MS Windows Specific Services](https://docs.python.org/3/library/windows.html)

### [Unix Specific Services](https://docs.python.org/3/library/unix.html)

### [Modules command-line interface (CLI)](https://docs.python.org/3/library/cmdline.html)

## Environment/Dependency Management

* [pip](https://pip.pypa.io/en/stable/)
* [pipenv](https://pipenv.pypa.io/en/latest/)
* [pyenv-win](https://github.com/pyenv-win/pyenv-win)
* [uv](https://github.com/astral-sh/uv)

## Testing and Code Analysis Tools

* [pytest](https://docs.pytest.org/)
* [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/index.html)
* [assertpy](https://github.com/assertpy/assertpy)
* [mypy](https://mypy.readthedocs.io/en/stable/index.html)
* [pylint](https://pylint.readthedocs.io/en/latest/)
* [pyflakes](https://github.com/PyCQA/pyflakes)
* [pycodestyle](https://pycodestyle.pycqa.org/en/latest/)
* [bandit](https://bandit.readthedocs.io/en/latest/)
* [checkov](https://www.checkov.io/)

## Templating

* [liquid template language (shopify.github.io)](https://shopify.github.io/liquid/)
* [liquid reference](https://shopify.dev/docs/api/liquid)

## Data Frames

* [pandas](https://pandas.pydata.org/docs/index.html)
  * [API Reference](https://pandas.pydata.org/docs/reference/index.html)
* [PySpark](https://spark.apache.org/docs/latest/api/python/index.html)
  * [API Reference](https://spark.apache.org/docs/latest/api/python/reference/index.html)

## 3rd Party Libraries

* [IPython](https://ipython.readthedocs.io/en/stable/index.html)
  * [Built-in magic commands](https://ipython.readthedocs.io/en/stable/interactive/magics.html)
* [Jupyter](https://jupyter.org/)
  * [The Ultimate Markdown Guide (for Jupyter Notebook)](https://medium.com/analytics-vidhya/the-ultimate-markdown-guide-for-jupyter-notebook-d5e5abf728fd)
* [localstack](https://github.com/localstack/localstack)
* [requests](https://requests.kennethreitz.org/en/latest/)
* [SQLAlchemy](https://www.sqlalchemy.org/)

## Misc

* [ralsina/rst-cheatsheet: A two-page cheatsheet for restructured text](https://github.com/ralsina/rst-cheatsheet)
* [pyWhat/pywhat/Data/regex.json](https://github.com/bee-san/pyWhat/blob/main/pywhat/Data/regex.json)

## Sample Patterns

### Command-line Argument Parsing / Runnable Executable

* Uses [argparse](https://docs.python.org/3/library/argparse.html)
* Runner function for use in pyproject.toml [project.scripts] section

#### pyproject.toml

```toml
[project.scripts]
main = "main:run"
```

#### main.py

```python
class MainKwargs[TypedDict]:
  config_file: str
  output_path: str
  loglevel: str
  filter: list[str]


def main(**kwargs: Unpack[MainKwargs]):
  ...


def run() -> None:
    """
    Runner Function
    """
    parser = argparse.ArgumentParser(prog='ProgramName',
                                     description='What the program does',
                                     epilog='Text at the bottom of help')
    parser.add_argument('-c', '--config_file', required=True, help="Config file path")
    parser.add_argument('-o', '--output_path', default=f'output-{datetime.now():%Y%m%d%H%M%S}.txt'
                        help="Output directory for the generated files")
    parser.add_argument('-l', '--loglevel',
                        help='Specifies the level of verbosity for logging.',
                        choices=['CRITICAL', 'ERROR', 'WARNING', 'INFO', 'DEBUG', 'NOTSET'],
                        default='INFO')
    parser.add_argument('-f', '--filter', required=False,
                        help='Filter the sources to run against.', nargs='*', default=[])
    args = parser.parse_args()

    main(config_file=args.config_file,
         output_path=args.output_path,
         source_path=args.loglevel,
         filter=args.filter)


if __name__ == '__main__':
    run()
```

### Multithreaded Processor

* Creates the worker threads as [Thread](https://docs.python.org/3/library/threading.html#thread-objects) objects.
* Uses [Queue](https://docs.python.org/3/library/queue.html#module-queue) objects to get data into and out of the worker threads -- a work queue for the inputs and a result queue for the outputs.
* **Note:** Boto3 Sessions are [not threadsafe](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/session.html#multithreading-or-multiprocessing-with-sessions)!

```python
import logging
import threading
from queue import Queue

def worker(work_queue: Queue[Any], result_queue: Queue[Any]) -> None:
    logger = logging.getLogger(__name__).getChild(f'thread {threading.current_thread()}')
    while not work_queue.empty():
        work_payload = work_queue.get()

        # all incoming data needs to be in queue object
        # do something to populate work_result
        logger.info("Info about this thread's work: %s", something)

        result_queue.put(work_result)

def main():
    logger = logging.getLogger(__name__)

    # ...
    payloads: list[Any] = # some data

    work_queue = Queue()
    for payload in payloads:
        work_queue.put(payload)

    result_queue: Queue[dict] = Queue()
    threads = []
    for thread in range(0, max_threads):
        logger.info('Creating thread')
        thread = threading.Thread(target=worker, args=(work_queue, result_queue))
        threads.append(thread)
        thread.start()

    logger.info('Waiting for workers to complete.')
    for thread in threads:
        thread.join()

    results = []
    logger.info('Collecting results.')
    while not result_queue.empty():
        results.append(result_queue.get())
```

### Multithreaded Processor using ThreadPoolExecutor

* The worker function is written like a normal function with normal inputs and returning its result.
* Uses [concurrent.futures.ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor) to handle creating the threads, getting parameters to the function, and getting results back to the caller.
* Submitting a payload returns a [Future](https://docs.python.org/3/library/concurrent.futures.html#future-objects) object which is similar to a JavaScript Promise.
* Iterate through the collection of future objects with [concurrent.futures.as_completed](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.as_completed) to get the objects that are completed as they complete.
* **Note:** Boto3 Sessions are [not threadsafe](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/session.html#multithreading-or-multiprocessing-with-sessions)!

```python
import concurrent.futures
import logging


def worker(payload: Any, *args, **kwargs) -> Any:
    logger = logging.getLogger(__name__).getChild(f'thread {threading.current_thread()}')

    # use args/kwargs like a normal funciton
    # do something to populate work_result
    logger.info("Info about this thread's work: %s", something)

    return work_result


def main():
    logger = logging.getLogger(__name__)

    # ...
    payloads: list[Any] = # some data
    results = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        result_futures = []
        for payload in payloads:
            # Submit the payload to the executor and append the resulting "future" to a list.
            result_futures.append(executor.submit(worker, payload, *args, **kwargs))
            
        # Iterate through the "futures" until they're complete and append the results to a list.
        for future in concurrent.futures.as_completed(result_futures):
            results.append(future.result())
```

### Requests Session with Larger Thread Pool

```python
from requests import Session
from requests.adapters import HTTPAdapter

MAX_THREADS = 20
MAX_POOL_SIZE = 2 * MAX_THREADS
# The pool size should be double the thread count so that each thread can get a new connection

with Session() as session:
    adapter = HTTPAdapter(pool_connections=MAX_POOL_SIZE, pool_maxsize=MAX_POOL_SIZE)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    # ...
```

### S3 Client with Larger Thread Pool

```python
from boto3 import Session
from botocore.config import Config

MAX_THREADS = 20
MAX_POOL_SIZE = 2 * MAX_THREADS
# The pool size should be double the thread count so that each thread can get a new connection

client = Session().client('s3', config=Config(max_pool_connections=MAX_POOL_SIZE))
```
