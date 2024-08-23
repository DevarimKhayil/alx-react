#!/bin/bash

#for dir in task_*; do
#    cd "$dir"
#    mkdir dashboard
#    cd dashboard
#    mkdir _mocks_ config dist public src
#    cd ..
#    cd ..
#done
for dir in task_*; do
	cd "$dir"
	cd dashboard/src
	mkdir App Footer Header Login Notifications assets utils
	cd ..
	cd ..
	cd ..
done

