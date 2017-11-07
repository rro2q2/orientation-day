#!/bin/bash
# Adam Starr 2017-07-7
# go through folders of images, count number of slides in folder and print number to a JSON file
#find . -type d -execdir sh /Users/Adam/Box\ Sync/REU/repos/slide_show/src/SlideCounter.sh \;

echo "{ \"numSlides\" : " > slideInfo.json 
count=`ls . | wc -l`
echo $(($count-1)) >> slideInfo.json
echo "}" >> slideInfo.json