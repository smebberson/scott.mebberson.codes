#!/bin/sh

set -e

# We need to keep the CNAME in place, so gh-pages will work
cp CNAME ./out

# Commit all updates and push to GitHub
cd ./out
git add .
git commit -m "Deploying commit $GITHUB_SHA to gh-pages 🚀"
git push origin gh-pages