var firebaseConfig = {
    apiKey: "AIzaSyA4EzUlq62OMtkKEnTPT-snpys0PhGYuTU",
    authDomain: "dontkillmewtf-dd070.firebaseapp.com",
    projectId: "dontkillmewtf-dd070",
    storageBucket: "dontkillmewtf-dd070.appspot.com",
    messagingSenderId: "37436061073",
    appId: "1:37436061073:web:facff20292f589fcbed630",
    measurementId: "G-7X9KET0Q6Y"
  };

firebase.initialiseApp(firebaseConfig);
var database = firebase.database();

document.addEventListener('DOMContentLoaded', function() {
    var visitCountRef = database.ref('visitCount');

    visitCountRef.once('value').then(function(snapshot) {
        var visitCount = snapshot.val();
        
        if (visitCount === null) {
            visitCount = 0;
        }

        visitCount += 1;

        visitCountRef.set(visitCount);

        document.getElementById('visit-count').textContent = visitCount;
    })
})