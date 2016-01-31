# Angular Drupal7 Services
#### Well structured angular modules mimic the architecture of [Drupal Services 3.x](https://www.drupal.org/project/services)

Angular Drupal7 Services is a REST client for AngularJS, which allows you to user predefined functions when communication with Drupal's api endpoints.   
Unlike the other project focusing on the same topic, Angular Drupal7 Services is precisely organized around the [Drupal Services 3.x](https://www.drupal.org/project/services) architecture and naming conventions.   
  
It optionally provides events next to the common used promise approach.

A full set of Drupal's resources is available, and all basic workflow's depending to authentication or helpers for CRUD operations are also provided as a set of extra modules.

Check out the [Drupal-API-Explorer](https://github.com/BioPhoton/ng-drupal-services-tests-with-ng) for a full demo  
Or check out the sample implementation for [Ionic-Headless-Drupal](https://github.com/BioPhoton/Ionic-Angular-Headless-Drupal-Demo)


## Get Started

**(1)** Get Angular Drupal7 Services:
Download or install via **[Bower](http://bower.io/)**: by running `$ bower install https://github.com/BioPhoton/ng-drupal-7-services` from your console

**(2)** Include `ng-drupal-7-services.js` in your `index.html`.

**(3)** Add `'d7-services'` to your main module's list of dependencies


##Architecture
Angular Drupal7 Services consists holds a resources and commons folder.
The resources folder consists of resource modules each in a folder named as the corresponding Drupal resource.
All other general modules, the authentication modules and the helper modules are located in the commons folder.

A resource generally consists out of 4 components. 

Two components that manages the event communication:
- [resourcename].channelConstant.js
- [resourcename]ChannelConstant.js

And Two components that manages the http requests and promise logic:
- [resourcename].resourceConstant.js
- [resourcename].resource.js

The .constant modules hold the api paths, event names and other constants and the .resource and .channel modules manage the communication to server and inside the application.
Same resources also hold additional modules like the view resource, that provides the Drupal views filter and sort operators and so on.

##Useage

For example a node retreive call look's like this:

```javascript
angular
    .module('myApp', ['ngDrupal7Services-3_x'])
    .controller('NodeController', ['NodeResource', 'NodeChannel', function(NodeResource, NodeChannel){
    
		//fire request
		 var retrievePromis = NodeResource.retrieve(vm.retrieveData);
		
		//react over then
		retrievePromis.then(function(data) { ... },function(error) { ... });
						    
		//react over event
		NodeChannel.subRetrieveConfirmed($scope, function(data){ ... });
		NodeChannel.subRetrieveFailed($scope, function(error){ ... });	    
	    
    }]);
```

###Supported Drupal Modules
Here is a list of supported Drupal services 3.x modules:
- [x] [Services](https://www.drupal.org/project/services)
- [x] [Services Views](https://www.drupal.org/project/services_view)
- [ ] [Services Menu](https://www.drupal.org/project/services_menu)
- [ ] [Services Search](https://www.drupal.org/project/services_search)
- [ ] [Services Entity](https://www.drupal.org/project/services_entity)

##Drupal Services
Following of Drupal's resources and their endpoint's are currently implemented:

###Comment Resource
- Retrieve
- Create
- Update
- Delete 
- Index
- CountAll
- CountNew
- Retrieve
- Retrieve

###File Resource
- Retrieve
- Create
- Delete
- Index
- Create_raw

###Node Resource
- Retrieve
- Create
- Update
- Delete
- Index
- Files
- Comments
- Attach_file

###System Resource
- Connect
- Get_variable
- Set_variable
- Del_variable

###TaxonomyTerm Resource
- Retrieve
- Create
- Update
- Delete
- Index
- SelectNodes

###TaxonomyVocabulary Resource
- Retrieve
- Create
- Update
- Delete
- Index
- GetTree

###User Resource 
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

##Drupal Services Views
Following of Drupal's resources and their endpoint's are currently implemented:

###Views Resource
- Retrieve

##Extra Modules

###Authentication service
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

###AccessControl
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
