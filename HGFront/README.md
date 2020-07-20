Project created as a test for HostGator


##Backend

Requiremens: [Composer](https://getcomposer.org/)

To run the project you need to setup the backend of the aplication:

Using the composer installed globally, go to the backend folder of the application and run the command:
`composer install`

Go to the file 'phinx.php' and inset the Database information for migration

Now, go to the folder 'config' and edit the configuration file to match with your database settings.

To create the DB go to the root of the backend application and run:
`vendor/bin/phinx migrate -e development`

To populate the DB run the seed command:
`vendor/bin/phinx seed:run`

The backend should be up and running on your PHP server.
URL_Ex.: YourServerBaseURL/PathToBackendFolder/index.php

##Frontend

Requiremens:
[NPM](https://www.npmjs.com/get-npm)
or
[YARN](https://classic.yarnpkg.com/pt-BR/docs/install)

Go to the root folder of the frontend application and run:

`yarn`

or

`npm install`


Go to the 'services' folder and edit the 'baseURL' parameter to match your backend URL.


Now you can run the aplication using the script:

`yarn start`

The appplication should be runnig on port 3000.
[Localhost HostGator Application](http://localhost:3000/)

