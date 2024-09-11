favorites_file = input("Please copy and paste your favorites file directory here :) :")
import webbrowser
import random

favs = r"{}".format(favorites_file)
file1 = open(favs, 'r')
content = file1.readlines()
file1.close()
links = []
for line in content:
    if "Link" in line:
        links.append(line[6:])

while True:
    next = input("Type 'C' to go to your video :) :")
    if next == "C" or next == "c":
        random.shuffle(links)
        webbrowser.open(links[0])



