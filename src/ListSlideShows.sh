#!/bin/bash
# Adam Starr 2017-07-7
# go through folders of images, count number of slides in folder and print number to a JSON file
echo "{\"slideShowArray\":" > ../public/Slides/SlideShows.json 
./DirectoryNamesTOJSON.py >> ../public/Slides/SlideShows.json 
echo "}">> ../public/Slides/SlideShows.json 