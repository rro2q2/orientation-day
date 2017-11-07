#!/usr/bin/env python
# Adam Starr 2017-07-7
# take a list of directory names to array and convert array to json string and save


import subprocess
import json

proc = subprocess.Popen(['find', '../public/Slides/', '-maxdepth', '1', '-type', 'd'], stdout=subprocess.PIPE)

directories = []

for elt in proc.stdout.readlines():
	directories.append(elt[18:-1])
directories = filter(None, directories)
print json.dumps(directories)
