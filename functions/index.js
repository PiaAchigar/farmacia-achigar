const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(); // inicializo el modulo de fierbase admin
//tengo que cambiar de plan a ->blaze para usar Claud firebase y functions de firebase
exports.orderCreate = functions.firestore
  .document("orders/{id}")
  .onCreate((snapshot, context) => {
    const order = snapshot.data();
    console.log("Orden ID:" + order.id);
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
