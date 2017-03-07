DIRECTORY="junk"
if [ ! -d "$DIRECTORY" ]; then
	echo "Making directory at ./junk to hold MongoDB log/config files."
	echo "   (A 'junk' folder is by default ignored by git.)"
	mkdir junk
fi
mongod --dbpath junk