angular.module('WebController', []); 

			function mainController($scope, $http) { 
				 $scope.formData = {};
				 getEmployees();

			// Create Employee
				 $scope.createEmployee = function(){
				 	$http.post('/api/employees', $scope.formData)
				 	.success(function(data) {
				 		$scope.formData = {};
				 		getEmployees();
				 	})
				 	.error(function(data) {
				 		console.log('Error:' + data);
				 	});
				 };
			
			// Delete Employee

				$scope.deleteEmployee = function(id) {
				  $http.delete('/api/employees/' + id)
				  .success(function(data) {
				 		getEmployees();
				  })
				  .error(function(data) {
				 		console.log('Error:' + data);
				  	});
				  };

				$scope.findEmployee = function(id){
					$http.get('/api/employees/' + id)
					.success(function(data){
						$scope.femployee = data;
						console.log(data)
					})
					.error(function(data){
						console.log('Error: ' + data);
					})
				}

				function getEmployees(){
			 		$http.get('/api/employees')
	 			  .success(function(data) {
			  		$scope.employees = data;
			 			console.log(data)
			 		})
			 		.error(function(data) {
			 			console.log('Error: ' + data);
			 		}); 
			  };
			}
