#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'pm2 restart' >> /home/ec2-user/apis/autodep/deploy.log
npm run dev >> /home/ec2-user/apis/autodep/deploy.log