#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'pm2 restart !!!' >> /home/ec2-user/apis/autodep/deploy.log

echo 'restarting fitness backend app ....!!' >> /home/ec2-user/apis/autodep/deploy.log
# pm2 start dist/src/index.js --name=fitness_auto >> /home/ec2-user/apis/autodep/deploy.log