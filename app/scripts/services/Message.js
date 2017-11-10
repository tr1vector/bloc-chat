(function() {
	function Message($firebaseArray, $cookies) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		Message.all = messages;

		Message.getByRoomId = function(roomId) {
			//Filter the messages by their room ID
			return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
		};

		Message.send = function(newMessage, activeRoom) {
			// var date = new Date();
      		messages.$add({
        		content: newMessage,
        		roomId: activeRoom.$id,
        		sentAt: "12:00 PM",
        		userName: $cookies.get('blocChatCurrentUser')
			});
		};

		return Message;
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);

})();