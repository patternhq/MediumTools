#!/usr/bin/env python
"""Compile files using the closure compiler."""

from __future__ import print_function
import argparse
import httplib
import urllib


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser()
    parser.add_argument('files', nargs='+')

    args = parser.parse_args()
    data = []
    for filename in args.files:
        with open(filename, 'r') as fin:
            data.append(fin.read())

    js_code = '\n'.join(data)

    params = urllib.urlencode([
        ('js_code', js_code),
        ('compilation_level', 'SIMPLE_OPTIMIZATIONS'),
        ('language', 'ECMASCRIPT5'),
        ('output_format', 'text'),
        ('output_info', 'compiled_code'),
    ])

    headers = {'Content-type': 'application/x-www-form-urlencoded'}
    conn = httplib.HTTPConnection('closure-compiler.appspot.com')
    conn.request('POST', '/compile', params, headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()

if __name__ == '__main__':
    main()
