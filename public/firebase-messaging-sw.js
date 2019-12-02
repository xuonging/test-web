// [START initialize_firebase_in_sw]
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '1052718398751',//'<%= SENDER_ID %>',
});

const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
