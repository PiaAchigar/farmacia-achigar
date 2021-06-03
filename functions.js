const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(); // inicializo el modulo de fierbase admin

function newStockFunction() {
  exports.orderCreate = functions.firestore
    .document("orders/{id}")
    .onCreate((snapshot, context) => {
      const order = snapshot.data();
      console.log("Orden ID:" + order.id);
    });
}

//const orderData = snapshot.child("id").val(); // const orderData = snapshot.child ("stock").val
// const newStock = newStockFunction(orderData);
//creo una funcion --- ctrl + clic = llevarme a la funcion??
//onCreate (handler: (snapshot: DataSnapchot, context: EventContext) -> PromiseLike <any> | <any> ):
//si devuelve Promise es q lo hace async
