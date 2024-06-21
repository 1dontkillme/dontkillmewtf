var firebaseConfig = {
    apiKey: "****",
    authDomain: "****",
    projectId: "****",
    storageBucket: "****",
    messagingSenderId: "****",
    appId: "****",
    measurementId: "****"
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