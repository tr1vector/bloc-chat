(function() {
    function HomeCtrl(Room, Message, $uibModal) {

    	this.roomList = Room.all;

    	this.newRoom = function() {
    		$uibModal.open({
    			templateUrl: '/templates/modal.html',
    			size: 'sm',
    			controller: 'ModalCtrl as modal'
    		});
        };

        this.activeRoom = null;

        this.setActiveRoom = function(room) {
            //Change Title of Room every time user clicks
            this.activeRoom = room;
            this.messages = Message.getByRoomId(this.activeRoom.$id);
            
        };
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();