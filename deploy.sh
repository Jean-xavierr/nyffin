#!/usr/bin/env sh

LAST_COMMIT="$(git rev-parse --short HEAD)"
SRC_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
TMP_BRANCH="gh-pages-deploy"
TARGET_BRANCH="gh-pages"
BUILD_DIR="dist"

if [ ! -d ${BUILD_DIR} ]; then
	echo "BUILD_DIR: ${BUILD_DIR} does not exist"
	make build
	printf "\n>>> If it successfully built, please rerun deployment script!\n"
	exit 0
fi

git checkout -b ${TMP_BRANCH} && \
git add -f ${BUILD_DIR} && git commit -m "${LAST_COMMIT}" && \
git push origin `git subtree split --prefix ${BUILD_DIR} ${TMP_BRANCH}`:${TARGET_BRANCH} --force && \
git reset --hard HEAD~1 && \
git checkout ${SRC_BRANCH} && \
git branch -D ${TMP_BRANCH}
