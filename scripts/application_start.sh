#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/apis/autodep/deploy.log

echo 'pm2 restart' >> /home/ec2-user/apis/autodep/deploy.log
pm2 restart fitness >> /home/ec2-user/apis/autodep/deploy.log