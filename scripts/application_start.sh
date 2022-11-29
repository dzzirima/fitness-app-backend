#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'pm2 restart !!!' >> /home/ec2-user/apis/autodep/deploy.log

echo 'restarting fitness backend app ....!!' >> /home/ec2-user/apis/autodep/deploy.log


echo 'running server as  a background job ....!!' >> /home/ec2-user/apis/autodep/deploy.log
nohup node  dist/src/index.js & >> /home/ec2-user/apis/autodep/deploy.log
