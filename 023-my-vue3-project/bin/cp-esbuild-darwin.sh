#!/bin/bash

set -ex

arch=$(uname -m)

if [[ $arch = "arm64" ]]; then
  cp -r node_modules/@esbuild/darwin-arm64 node_modules/@esbuild/darwin-x64
fi
