#!/bin/sh

set -e

cd ./out

git add .
git commit -m "Deploying commit $GITHUB_SHA to gh-pages 🚀"
git push origin gh-pages