(function() {
    function ModalCtrl(Room, $uibModalInstance) {
    	this.cancelRoom = function() {
    		console.log("Cancelled Modal");
    		$uibModalInstance.dismiss();
    	};

    	this.createRoom = function() {
    		Room.add(this.addRoom);
    		$uibModalInstance.close();
    	};
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();