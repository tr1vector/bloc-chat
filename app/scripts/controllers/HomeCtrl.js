(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, $state) {

    	this.roomList = Room.all;
        this.activeRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');

    	this.newRoom = function() {
    		$uibModal.open({
    			templateUrl: '/templates/modal.html',
    			size: 'sm',
    			controller: 'ModalCtrl as modal'
    		});
        };

        this.setActiveRoom = function(room) {
            //Change Title of Room every time user clicks
            this.activeRoom = room;
            this.messages = Message.getByRoomId(this.activeRoom.$id);
            
        };

        this.sendMessage = function() {
            Message.send(this.newMessage, this.activeRoom);
            this.newMessage = '';
        };

        this.userLogout = function() {
            
            $cookies.remove('blocChatCurrentUser');
            window.location.reload();
        }
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', '$state', HomeCtrl]);
})();