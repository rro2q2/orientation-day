#!/bin/bash
# Chiara Zizza, Adam Starr, and Andrew Crutcher 2017-07-10
# go through inputs given and convert .ppt(x) to .png in their own directories with json file indicating the number of pngs


#find . -type d -execdir sh /Users/chiarazizza/Desktop/University\ of\ Missouri\ REU\ Documents/Autism\ VR/pptxToPdf \;
#./soffice --headless --convert-to pdf ~/vSocialSlidesApp/TestFolder/*.pptx

#sh /Users/chiarazizza/Desktop/University\ of\ Missouri\ REU\ Documents/Autism\ VR/pptxToPdf \;

SAVEIFS=$IFS
IFS=$'\n'

orig=$(pwd)

mkdir newDirs #Creates directory for converted .ppt(x) file


for fold in $(find . -type d) ; do
	echo "$fold"
    cd "$fold"
    
    #Converts .ppt(x) files to .pdf
    /Applications/LibreOffice.app/Contents/MacOS/soffice --headless --convert-to pdf *.ppt* #uses LibreOffice commandline

    #Converts .pdf files to .png
    for x in *.pdf; do
	if [ "${#x}" -gt "5" ] #Checks for null cases
  	then
	    #Replaces spaces in title with underscores and creates new directory with (underscored) slide name to store .png images
	    curDir=$(pwd)
	    y=${x// /_}

	    #Creates individual file for each .pdf/.ppt(x)
	    dirName="$orig/newDirs/${y%.pdf}"
	    mkdir $dirName
	    mv "$x" "$dirName/$y"
	    
  	    t=Slide_%02d.png
	    
	    cd "$dirName"
	    convert ${y} ${t} && echo "converted $y -> $t" #uses imageMagick to convert from .pdf to .png
	    rm $y #removes .pdf file

	    #Makes json file with number of slides
	    echo "{ \"numSlides\" : " > slideInfo.json
	    count=`ls . | wc -l`
	    echo $(($count-1)) >> slideInfo.json
	    echo "}" >> slideInfo.json
	    cd "$curDir"
 	fi
    done
    cd "$orig"
done
