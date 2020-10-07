### Clone the project 
Copy the ssh url from the github repository to clone 

### Install Dependencies
Install dependencies by running 
`npm install`
in the project root directory 

### .babelrc file config
Creat a .babelrc file and add the following 

`
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-transform-runtime"
    ]
} 
`

### .env file config
Create .env file and add

`REACT_APP_MAILGUN_API_KEY= <your-api-key>`

`REACT_APP_MAILGUN_DOMAIN= <yourdomain.com>`

`REACT_APP_DOMAIN_EMAIL= <youremail@gmail.com>`

`REACT_APP_GOOGLE_APIKEY=<your-google-api-key>`

`NODE_ENV=development`

### Run project in production mode
`npm run build`

`npm run start`

> For development mode you can run just `npm run start`
