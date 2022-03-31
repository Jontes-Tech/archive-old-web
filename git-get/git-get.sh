#!/bin/bash
dialog --title "Git-Get" --msgbox 'Made by Jontes.Page - GPL 3.0' 0 100
dialog --title "Github" --msgbox 'Git-Get only support Github as of now...Sorry.' 0 100
#Assumes Github is used
dialog --inputbox \
"What is your username?" 0 0 2> /tmp/username.tmp.$$
dialog --inputbox \
"What is the name of your repo? Create one if you haven't already" 0 0 2> /tmp/reponame.tmp.$$
gameval=$?
repoval=$?
username=`cat /tmp/username.tmp.$$`
reponame=`cat /tmp/reponame.tmp.$$`
rm -f /tmp/username.tmp.$$
rm -f /tmp/reponame.tmp.$$
echo "Your username is '$username' and your repo name is '$reponame'"
echo "# test-repo" >> README.md
git init
git add .
git commit -m "Initial Commit"
git branch -M main
echo "Follow instructions on webpage."
if which xdg-open > /dev/null; then
  xdg-open 'https://jontes.page/git-get/get-token'> /dev/null
elif which gnome-open > /dev/null; then
  gnome-open 'https://jontes.page/git-get/get-token'> /dev/null
else
  echo "Could not detect the web browser to use."
fi
clear
sleep 1
dialog --inputbox \
"Input your Github token you got before!" 0 0 2> $HOME/secret-github-token.txt
token=$?
token=`cat $HOME/secret-github-token.txt`
clear
echo "Your token is $token"
git remote add origin https://github.com/$username/$reponame.git
git push -u origin main