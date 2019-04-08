npm i
rm -rf dist
ng build
sudo http-server dist -S -p 443 -C src/environments/ssSSL.pem -K src/environments/ssKey.pem &
cd functions
sudo nodemon redirect.js
