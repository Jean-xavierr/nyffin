#!/usr/bin/env bash

set -euo pipefail

LAST_COMMIT="$(git rev-parse --short HEAD)"
SRC_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
TMP_BRANCH="gh-pages-deploy"
TARGET_BRANCH="gh-pages"
BUILD_DIR="dist"

DEFAULT_MODE="keep"
MODE=$([[ -z "$1" ]] && echo "${DEFAULT_MODE}" || echo "$1")

if [ ! -d ${BUILD_DIR} ]; then
	echo "BUILD_DIR: ${BUILD_DIR} does not exist"
	make build
	printf "\n>>> If it successfully built, please rerun deployment script!\n"
	exit 0
else
	echo -n 'Do you want to re-build ? (y/n): ' && read -n 1 choice
	echo ''
	[ "${choice}" = 'y' ] && make build || echo 'No rebuilding'
fi

if [[ "${MODE}" == "overwrite" ]]; then
	git checkout -b ${TMP_BRANCH}
	git add -f ${BUILD_DIR} && git commit -m "${LAST_COMMIT}"
	git push origin $(git subtree split --prefix ${BUILD_DIR} ${TMP_BRANCH}):${TARGET_BRANCH} --force
	git reset --hard HEAD~1
	git checkout ${SRC_BRANCH}
	git branch -D ${TMP_BRANCH}
elif [[ "${MODE}" == "keep" ]]; then
	git checkout -b ${TMP_BRANCH}
	git add -f ${BUILD_DIR} && git commit -m "${LAST_COMMIT}"
	git checkout ${TARGET_BRANCH}
	git revert --no-edit HEAD
	git merge --allow-unrelated-histories --no-edit --strategy-option theirs $(git subtree split --prefix ${BUILD_DIR} ${TMP_BRANCH})
	git reset --soft HEAD~2
	git commit -m "${LAST_COMMIT}" && git push
	git checkout ${SRC_BRANCH}
	git branch -D ${TMP_BRANCH}
else
	echo "Usage ${0} [mode=${DEFAULT_MODE}]"
	echo "MODE:"
	echo " - overwrite mode: erase git history of TARGET_BRANCH"
	echo " - keep mode: keep git history of TARGET_BRANCH"
fi
