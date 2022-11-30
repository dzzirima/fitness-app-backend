#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'pm2 restart !!!' >> /home/ec2-user/apis/autodep/deploy.log

echo 'restarting fitness backend app ....!!' >> /home/ec2-user/apis/autodep/deploy.log


echo 'running server as  a background job ....!!' >> /home/ec2-user/apis/autodep/deploy.log

echo 'killing  the current running process....!!' >> /home/ec2-user/apis/autodep/deploy.log
pkill -f fitness

echo 'starting a new instance name :fitness....!!' >> /home/ec2-user/apis/autodep/deploy.log
sudo nohup bash -c 'exec -a fitness node dist/src/index.js&' 






