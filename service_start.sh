sudo http-server socialspace/dist -S -p 443 -C socialspace/src/environments/ssSSL.pem -K socialspace/src/environments/ssKey.pem &
cd socialspace/functions
sudo nodemon redirect.js &

