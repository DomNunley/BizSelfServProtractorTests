FROM microsoft/dotnet:sdk AS builder
WORKDIR /app

# Copy everything else and build
COPY . ./

RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git nano
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -yq nodejs build-essential
RUN npm install
RUN npm install express
RUN npm install protractor
RUN npm install -g protractor
CMD ["node", "app.js"]