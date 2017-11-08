(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
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
            console.log(this.username);
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();