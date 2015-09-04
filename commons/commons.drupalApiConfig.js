(function() {
    'use strict';

    /**
	 *  Constants for Drupal Services 3.x API
	 */
	var DrupalApiConstant =  {
		      //					   
		      // Drupal depending settings
		      //
			
			  // Sites domain
			  drupal_instance	: 'http://your.site.name/',
			 
			  // Service endpoint 
			  api_endpoint : 'api/',
			  
			  //response format of a request. possible values are
			  //look at https://www.drupal.org/node/1699450
			  responseFormat : "application/json;text/plain;charset=utf-8",
			  //- bencode: The encoding used by the BitTorrent file sharing system.
			  //- json => JavaScript Object Notation
			  //- jsonp: JSON with padding
			  //- php: Responses are encoded using the data format emitted by PHPs "serialize()" function
			  //- rss
			  //- xml
			  //- yaml
			  

			  // By default, Drupal is configured with a session expiration time of 2000000 seconds which is 23 day 3 hr. 33 min. 20 sec
			  // To customize this install the session expire module => https://www.drupal.org/project/session_expire
			  // and also set same value here
		  	  session_expiration_time : 2000000,
		  	  
			  // Session Expriation untis (seconds because Drupals default time is in seconds)
			  session_expiration_unite : 'seconds',
			  
			  //path to public folder
			  publicFilePath : "public://",
			  
			  //path to public folder
			  privateFilePath : "private://",
			
	};
    
	/**
	 *  DrupalApiConstant Module
	 */
	angular
	    .module('ngDrupal7Services-3_x.commons.configurations', [])
	    .constant("DrupalApiConstant", DrupalApiConstant);
	

})();
