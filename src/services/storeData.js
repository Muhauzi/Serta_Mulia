const { Firestore } = require("@google-cloud/firestore")
async function storeData(id, data) {
  // sesuaikan databaseId dengan nama id pada database Firestore yang dibuat
  const db = new Firestore({databaseId: "(default)" });

  const predictCollection = db.collection("prediction");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;