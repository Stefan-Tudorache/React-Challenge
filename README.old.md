actions-react-hoster
A template for hosting a React app with Firebase using github actions.

What the actions do
Test code
Runs on pull requests to ensure tests pass and React app builds.

Runs all test files and check that they pass.

Runs a build and ensures that React builds without errors.

If any errors occur then the actions run fails.

Build and Deploy
Runs on merged pull requests or pushes directly to main and deploys lastest version to Firebase

Runs a build and deploys the build folder to Firebase along with deploying everything else.

In the firebase-deploy.yml file there is an args parameter that takes the arguments that come after firebase in the firebase CLI.

firebase deploy === args: deploy

firebase deploy --only hosting === args: deploy --only hosting
So this can be changed depending on your preferred level of deployment.

Setup
Setup Firebase hosting for a React app as normal, following Firebase Hosting documentation. Remembering to answer the question:
What do you want to use as your public directory? (public)
with build

Copy and paste the code from the check-code.yml and firebase-deploy.yml and insert them into your own .github/workflows folder. The code will be detailed at the end of this README.

To deploy to Firebase you need an authorisation token. To generate this ensure you have the firebase-tools cli installed:

yarn global add firebase-tools
and run

firebase login:ci
This will output an authorisation token to your command prompt.

This token will need to be placed as a secret in the github repository where you will be running your actions.

You can find this by going to your repo -> setting -> secrets and clicking new secret, entering a name of FIREBASE_TOKEN and the value is your authorisation token.

Github actions code
check-code.yml:

name: Check code

on:
pull_request:
branches: - main

jobs:
test:
name: Check code
runs-on: ubuntu-latest
steps: - name: Checkout Repo
uses: actions/checkout@master - name: Install dependencies
run: yarn install - name: Run tests
run: yarn test - name: Check build
run: yarn build

firebase-deploy.yml:

name: Build and Deploy
on:
push:
branches: - main

jobs:
build:
name: Build
runs-on: ubuntu-latest
steps: - name: Checkout Repo
uses: actions/checkout@master - name: Install Dependencies
run: yarn install - name: Build
run: yarn build - name: Archive Production Artifact
uses: actions/upload-artifact@master
with:
name: build
path: build
deploy:
name: Deploy
needs: build
runs-on: ubuntu-latest
steps: - name: Checkout Repo
uses: actions/checkout@master - name: Download Artifact
uses: actions/download-artifact@master
with:
name: build
path: build - name: Deploy to Firebase
uses: w9jds/firebase-action@master
with:
args: deploy
env:
FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
