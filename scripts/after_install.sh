#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'cd /home/ec2-user/apis/autodep' >> /home/ec2-user/apis/autodep/deploy.log
cd /home/ec2-user/apis/autodep >> /home/ec2-user/apis/autodep/deploy.log

echo 'npm install' >> /home/ec2-user/apis/autodep/deploy.log 
npm install >> /home/ec2-user/apis/autodep/deploy.log
