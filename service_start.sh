#sudo http-server socialspace/dist -S -p 443 -C socialspace/src/environments/ssSSL.pem -K socialspace/src/environments/ssKey.pem &

sudo http-server socialspace/dist -p 80 &
#http-server socialspace/dist -S -p 80 -C socialspace/src/environments/ssSSL.pem -K socialspace/src/environments/ssKey.pem &
cd socialspace/functions &&
nodemon index.js 18.216.55.184
#nodemon index.js  172.31.23.111
#sudo http-server -p 3000 -a 127.0.0.1  socialspace/functions/index.js 
