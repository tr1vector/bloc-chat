(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies, $state) {
    	this.cancelRoom = function() {
    		console.log("Cancelled Modal");
    		$uibModalInstance.dismiss();
    	};

    	this.createRoom = function() {
    		Room.add(this.addRoom);
    		$uibModalInstance.close();
    	};

        this.createUserName = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
            $state.reload();
            console.log(this.username);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', '$state', ModalCtrl]);
})();