# AngularJS for your Headless Drupal 

You want to create an app or custom frontend for your headless or decoupled Drupal? Using AngularJS??
This is repository makes your live easyer!

# ng-drupal 7-services
An api client for Drupal 7 Services 3.x designed to work with Ionic also!

Implement this files into any angular project work with the drupal services implementation in AngularJS

CORS settings:
api/v1*|<mirror>|POST,PUT,GET,DELETE|Content-Type,Authorization,X-CSRF-TOKEN|true

All resources can be tested in the following project: [ng-drupal-services-tests-with-ng](https://github.com/BioPhoton/ng-drupal-services-tests-with-ng)

A live demo and showcases can be found here: [Ionic-Headless-Drupal-Demo](https://github.com/BioPhoton/Ionic-Drupal-Client-Demo)

#Confiurables

- drupal_instance	
- api_endpoint
- session_expiration_time
- session_expiration_unite 
- publicFilePath
- privateFilePath

# API Endpoints

## Comment Resource
- Retrieve
- Create
- Update
- Delete 
- Index
- CountAll
- CountNew
- Retrieve
- Retrieve

## EntityNode Resource
- Retrieve
- Create
- Update
- Delete
- Index
- Files
- Comments
- Attach_file

## TaxonomyTerm Resource
- Retrieve
- Create
- Update
- Delete
- Index
- SelectNodes

## File Resource
- Retrieve
- Create
- Delete
- Index
- Create_raw

## Menu Resource
- Retrieve

## Node Resource
- Retrieve
- Create
- Update
- Delete
- Index
- Files
- Comments
- Attach_file

## SearchNode Resource 
- Retrieve

## System Resource
- Connect
- Get_variable
- Set_variable
- Del_variable

## TaxonomyTerm Resource
- Retrieve
- Create
- Update
- Delete
- Index
- SelectNodes

## TaxonomyVocabulary Resource
- Retrieve
- Create
- Update
- Delete
- Index
- GetTree

## User Resource 
- Retrieve
- Create
- Update
- Delete
- Index
- Login
- Logout
- Token 
- Request_new_password
- Register
- Cancel
- Password_reset
- Resend_welcome_email

##Views Resource
- Retrieve

# Services

## Authentication service
- storeTokenData
- deleteTokenData
- refreshToken
- storeSessionData
- deleteSessionData
- getConnectionState
- setConnectionState
- getCurrentUser
-	setCurrentUser
- refreshConnection
- getLastConnectTime

# Helper

## localstorageServices 
- setItem
- getItem
- removeItem
- setObject
- getObject
- removeObject
- clearAll

## AccessControl

### Configurables
- roles
- accessLevels 

### Methods
- authorize 

### Directives
- accessLevel => show hide elem based on role and acessLevel

#Links
Testing resources on a test server => https://www.drupal.org/node/1447020
promises http://blog.ninja-squad.com/2015/06/04/angularjs-promises-2/
