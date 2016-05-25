#! /bin/bash

aws s3 sync build s3://about.blanktech.net2/ --profile aboutblank  --acl public-read --delete
