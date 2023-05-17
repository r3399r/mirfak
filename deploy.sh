#!/bin/bash
set -e

env=$1
project=mirfak

echo ====================================================================================
echo project: $project
echo env: $env
echo ====================================================================================

echo deploy backend AWS...
npm i
npm run pre:deploy
aws cloudformation package --template-file aws/cloudformation/template.yaml --output-template-file packaged.yaml --s3-bucket y-cf-midway-singapore
aws cloudformation deploy --template-file packaged.yaml --stack-name $project-$env-stack --parameter-overrides TargetEnvr=$env Project=$project --no-fail-on-empty-changeset --s3-bucket y-cf-midway-singapore --capabilities CAPABILITY_NAMED_IAM
echo ====================================================================================

echo run scripts...
npm run script:richmenu
npm run script:brochure