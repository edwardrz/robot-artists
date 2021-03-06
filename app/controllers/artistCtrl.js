"use strict";

var artistInfo = angular.module("myApp",[]); //dependencies for the app go into `[]`
//namespacing: variable myApp will contain all our application code.
//This prevents other code on the site from interfering with this module.
artistInfo.controller("artistCtrl", function artistCtrl($scope) {

	$scope.artist = [
		{"medium":"BlueSteel","first_name":"Rosalie","last_name":"O'Curneen","nick_name":"Puppy","zip_code":"37210","email":"rocurneen0@macromedia.com","description":"ut volutpat sapien arcu sed augue aliquam erat volutpat in"},
		{"medium":"Watercolor","first_name":"Ethelred","last_name":"Stockney","nick_name":"Otter","zip_code":"37201","email":"estockney1@salon.com","description":"lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec"},
		{"medium":"Marbel","first_name":"Leshia","last_name":"Sindall","nick_name":"Spectacle","zip_code":"37215","email":"lsindall2@weibo.com","description":"aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci"},
		{"medium":"Digital","first_name":"Westleigh","last_name":"Revance","nick_name":"Lizard","zip_code":"37204","email":"wrevance3@archive.org","description":"tristique fusce congue diam id ornare imperdiet sapien urna pretium"},
		{"medium":"BlueSteel","first_name":"Bertie","last_name":"Isaac","nick_name":"Hornbill","zip_code":"37201","email":"bisaac4@sciencedirect.com","description":"tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu"},
		{"medium":"Oils & Canvas","first_name":"Benedicto","last_name":"Thistleton","nick_name":"Spork","zip_code":"37210","email":"bthistleton5@bbc.co.uk","description":"interdum mauris ullamcorper purus sit amet nulla quisque arcu libero"},
		{"medium":"BlueSteel","first_name":"Ted","last_name":"Skim","nick_name":"Long-tail","zip_code":"37204","email":"tskim6@friendfeed.com","description":"viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus"},
		{"medium":"Organics","first_name":"Ingunna","last_name":"Buckham","nick_name":"Crikey","zip_code":"37201","email":"ibuckham7@clickbank.net","description":"justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in"},
		{"medium":"Marbel","first_name":"Giavani","last_name":"Minall","nick_name":"Green-back","zip_code":"37210","email":"gminall8@toplist.cz","description":"amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"},
		{"medium":"Organics","first_name":"Robin","last_name":"Siburn","nick_name":"Bushbuck","zip_code":"37215","email":"rsiburn9@google.com","description":"nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper"}
	];
}); 