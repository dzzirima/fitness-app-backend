#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'cd /home/ec2-user/apis/autodep' >> /home/ec2-user/apis/autodep/deploy.log
cd /home/ec2-user/apis/autodep >> /home/ec2-user/apis/autodep/deploy.log

echo 'npm install' >> /home/ec2-user/apis/autodep/deploy.log 
npm install >> /home/ec2-user/apis/autodep/deploy.log

echo 'building app now ....!' >> /home/ec2-user/apis/autodep/deploy.log 
tsc

echo 'copying env to dist....!' >> /home/ec2-user/apis/autodep/deploy.log 
cp .env  ./dist/.env

echo 'app ready for deployment' >> /home/ec2-user/apis/autodep/deploy.log 




