# #!/bin/bash

prname=generator

# Add the project command to the system path
sudo ln -s $(pwd)/src/main.js /usr/local/bin/$prname;

chmod +x $(pwd)/src/main.js;

echo "Run project GENERATOR keyword! Congratulations success installed!!!"
