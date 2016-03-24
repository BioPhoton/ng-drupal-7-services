# Angular Drupal7 Services
#### Well structured angular modules mimic the architecture of [Drupal Services 3.x](https://www.drupal.org/project/services)

[![Bower version](https://badge.fury.io/bo/ng-drupal-7-services.svg)](https://badge.fury.io/bo/ng-drupal-7-services)
[![npm version](https://badge.fury.io/js/ng-drupal-7-services.svg)](https://badge.fury.io/js/ng-drupal-7-services)  
[![Package Quality](http://npm.packagequality.com/shield/ng-drupal-7-services.svg)](http://packagequality.com/#?package=ng-drupal-7-services)

Angular Drupal7 Services is a REST client for AngularJS, which allows you to user predefined functions when communication with Drupal's api endpoints.   
Unlike the other project focusing on the same topic, Angular Drupal7 Services is precisely organized around the [Drupal Services 3.x](https://www.drupal.org/project/services) architecture and naming conventions.   
  
It optionally provides events next to the common used promise approach.

A full set of Drupal's resources is available, and all basic workflow's depending to authentication or helpers for CRUD operations are also provided as a set of extra modules.

##DEMOS
Check out the [Drupal-API-Explorer](https://github.com/BioPhoton/ng-drupal-services-tests-with-ng) for a full demo  
Or check out the sample implementation for [Ionic-Headless-Drupal](https://github.com/BioPhoton/Ionic-Angular-Headless-Drupal-Demo)


## Get Started

**(1)** Get Angular Drupal7 Services:
 - clone & build this repository
 - [download as .zip](https://github.com/BioPhoton/ng-drupal-7-services/archive/master.zip)
 - or via **[npm](https://www.npmjs.org/)**: by running `$ npm install ng-drupal-7-services` from your console
 - or via **[Bower](http://bower.io/)**: by running `$ bower install ng-drupal-7-services` from your console

**(2)** Include `ng-drupal-7-services.js` in your `index.html`.

**(3)** Add `'d7-services'` to your main module's list of dependencies


## [API Documentation](http://www.drupalionic.org/docs) (!!!in progress!!!)

## Quickstart

**(1)** Insert the ```ng-drupal-7-services.js``` bundle into your ```index.html``` file.

```
<!doctype html>
<html ng-app="myApp">
<head>

    <script src="bower_components/angular/angular.min.js"></script>
    <!-- ng-drupal-7-services and it's dependencies-->
    <script src="bower_components/angular-cookies/angular-cookies.min.js"></script>
    <script src="bower_components/ngstorage/ngStorage.js"></script>
    <script src="bower_components/ng-drupal-7-services/dist/ng-drupal-7-services.js"></script>

    <script>
        angular.module('myApp', ['d7-services'])
        .config(function configFunction(DrupalApiConstant) {
                		//configure your drupal instance
                		DrupalApiConstant.drupal_instance = 'http://your.projects.domain/';
                	});
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```

**(2)** Using the services.

```
angular
    angular.module('myApp')
    .controller('NodeController', ['NodeResource', 'NodeChannel', function(NodeResource, NodeChannel){

        //fire request
         var retrievePromis = NodeResource.retrieve({nid:1});

        //react over promise.then
        retrievePromis.then(function(data) { ... },function(error) { ... });

        //react over event
        //This could happen in another directive/controller too
        NodeChannel.subRetrieveConfirmed($scope, function(data){ ... });
        NodeChannel.subRetrieveFailed($scope, function(error){ ... });

    }]);
```

##Configuration
Basically all configurable options are wrapped in an angular constant.
So if you want to change the defaults constant values do so in angulars config phase.
```
  angular.module('myApp', ['d7-services'])
        .config(function configFunction(DrupalApiConstant) {
           ...
           //your changes here
           ...
        });
```


### API configuration options

Define your drupal instance.

```
DrupalApiConstant.drupal_instance = 'http://your.projects.domain/';
```

Override the path to your api.
This path is defined in "Edit Resource" under tab "Edit".

```
DrupalApiConstant.api_endpoint += 'v1/'; // results in "api/v1/";
```

Override the default response format. (json,jsonp,php,rss,xml,yaml,...)
Find a list of profided fromats in "Edit Resource" under tab "Server".

```
DrupalApiConstant.responseFormat = "application/json";
```

Override the default public and private folders

```
DrupalApiConstant.publicFilePath = "new_public/";
DrupalApiConstant.privateFilePath = "new_private/";
```

Override the Drupals default path to files.

```
DrupalApiConstant.filesPath = "sites/default/my_files/";
```


Override the Drupals default image styles path.

```
DrupalApiConstant.imageStylesPath = "my_styles/";
```

Override the default image styles and add custom once.

```
DrupalApiConstant.imageStyles.large = 'modified_large';
DrupalApiConstant.imageStyles.new_style = 'new_style_name';
```

Override the default language.

```
DrupalApiConstant.LANGUAGE_NONE = 'und';
```

###Supported Drupal Modules
Here is a list of supported Drupal services 3.x modules:
- [x] [Services](https://www.drupal.org/project/services) **7 Resources** | **51 Requests**
- [x] [Services Views](https://www.drupal.org/project/services_view) **1 Resources** | **1 Requests**
- [x] [Services Menu](https://www.drupal.org/project/services_menu) **1 Resources** | **1 Requests**
- [ ] [Services Search](https://www.drupal.org/project/services_search) **2 Resources** | **2 Requests**
- [ ] [Services Entity](https://www.drupal.org/project/services_entity) **6 Resources** | **47 Requests**
- [x] [Services Definitions](https://www.drupal.org/project/services_tools) **1 Resources** | **1 Requests**
- [x] [Geocoder](https://www.drupal.org/project/geocoder) **1 Resources** | **2 Requests**

- **Drupal Services**
  - Comment Resource
    - Retrieve
    - Create
    - Update
    - Delete
    - Index
    - CountAll
    - CountNew
    - Retrieve
  - File Resource
    - Retrieve
    - Create
    - Delete
    - Index
    - Create_raw
  - Node Resource
    - Retrieve
    - Create
    - Update
    - Delete
    - Index
    - Files
    - Comments
    - Attach_file
  - System Resource
    - Connect
    - Get_variable
    - Set_variable
    - Del_variable
  - TaxonomyTerm Resource
    - Retrieve
    - Create
    - Update
    - Delete
    - Index
    - SelectNodes  
  - TaxonomyVocabulary Resource
    - Retrieve
    - Create
    - Update
    - Delete
    - Index
    - GetTree
  -User Resource
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

- **Drupal Services Views**
  - Views Resource
    - Retrieve

- **Drupal Geocoder**
  -Views Geocoder
    - Retrieve
    - Index

- **Drupal Services Menu**
  - Menu Resource
    - Retrieve

- **Drupal Services Definition**
  - Definition Resource
    - Index

- **Extra Resources**
  - Authentication service
    - storeTokenData
    - deleteTokenData
    - refreshToken
    - storeSessionData
    - deleteSessionData
    - getConnectionState
    - setConnectionState
    - getCurrentUser
    - setCurrentUser
    - refreshConnection
    - getLastConnectTime

# Extra Services
##AccessControl
- roles
- accessLevels 
- authorize 

### Directives
- accessLevel => show hide elem based on role and acessLevel

## Setup for Drupal
- Start with a fresh Drupal7 installation.

###Services
- install [Drupal Services](https://www.drupal.org/project/services) 
- Go to  admin/structure/services/add and create a new endpoint with following settings:
  - machine name: api
  - server: REST
  - path: api
  - debug: unchecked
  - session authentication: checked
- Then click the edit resources link and open the resources tab.
  Now every resource you like by check box. 
- Then click Save
- Click the Server tab
- For Response formatters check following:
  - json
- For Request parsing check following:
  - application/json
  - application/x-www-form-urlencoded
  - multipart/form-data (for file upload)
  - text/xml
- Click Save. 
- Flush all of Drupal's caches.

###Setup for CORS
- install [CORS](https://www.drupal.org/project/cors) 
- Go to admin/config/services/cors  and paste following into the textarea `api/v1*|<mirror>|POST,PUT,GET,DELETE|Content-Type,Authorization,X-CSRF-TOKEN|true`

#Links
Testing resources on a test server => https://www.drupal.org/node/1447020
