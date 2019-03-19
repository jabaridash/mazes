set -e

cd ${TRAVIS_BUILD_DIR}

TAG="${TRAVIS_BRANCH}-${TRAVIS_BUILD_NUMBER}"

if [ $TRAVIS_PULL_REQUEST != "false" ]; then
  TAG="PR${TRAVIS_PULL_REQUEST}-${TRAVIS_BRANCH}-${TRAVIS_PULL_REQUEST_BRANCH}-${TRAVIS_BUILD_NUMBER}"
fi

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -t jabaridash/mazes:${TAG} .
docker push jabaridash/mazes:${TAG}
