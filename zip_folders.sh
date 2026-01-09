#!/bin/bash

# Loop through all directories
for dir in */; do
    # Remove trailing slash
    dirname=${dir%/}
    
    echo "Zipping contents of $dirname..."

    # 1. Change directory into the folder
    # 2. Zip everything inside (*) to a zip file one level up (../)
    # 3. Change directory back
    (cd "$dirname" && zip -rq "../$dirname.zip" .)

done

echo "Done! The zips now contain only the internal contents."