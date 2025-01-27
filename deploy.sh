#!/bin/sh

npm run build
scp -r dist/* home:/var/www/home.rul.sh
