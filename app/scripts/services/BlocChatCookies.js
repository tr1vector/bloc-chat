(function() {

	function BlocChatCookies($cookies, $uibModal){
		var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser === '') {
			// Do something to allow users to set their username
			$uibModal.open({
				// Modal configuration object properties
				templateUrl: '/templates/userModal.html',
    			size: 'sm',
    			controller: 'ModalCtrl as modal'
    		});
		};
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);

})();