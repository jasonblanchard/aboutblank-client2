#! /bin/bash

npm run build && aws s3 sync build s3://about.blanktech.net --profile aboutblank  --acl public-read --delete
