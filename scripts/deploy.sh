#!/bin/bash

echo 'deplyoying....!!' >> /home/ec2-user/apis/autodep/deploy.log
cd /home/ec2-user/apis/autodep

nohup bash -c "exec -a fitness node dist/src/index.js&" >> /home/ec2-user/apis/autodep/deploy.log

exit 0




