 # Base the image off of the NodeJS image
 FROM node

 # Set the working directory to be the HOME directory
 WORKDIR /root

 # Install NPM dependencies early in the build process
 COPY ./package.json /root/package.json
 COPY ./package-lock.json /root/package-lock.json
 RUN npm install

 # Copy our application files to the image
 COPY ./src /root/src
 COPY ./www /root/www
 COPY ./openapi.yaml /root/openapi.yaml
 

 # Specify what port will be available - necessary for VPC network
 EXPOSE 3000

 # Start the container running our Node app
 CMD ["node", "/root/src/index.js"]