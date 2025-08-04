---
title: Python
permalink: /python/
---

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

### Test for List of Elements in a List

* Uses a generator expression inside the `any()` or `all()` functions.

```python
any(x in test_list for x in list_of_values)
```

```python
all(x in test_list for x in list_of_values)
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
