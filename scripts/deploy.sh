set -e

cd ${TRAVIS_BUILD_DIR}

if [ $TRAVIS_PULL_REQUEST == "false" ]; then
  firebase deploy --token $FIREBASE_TOKEN
fi