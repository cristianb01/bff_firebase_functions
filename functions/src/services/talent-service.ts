// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();
const collection = db.collection('talent');



export async function listRelevantTalentsAsync() {
    const docsSnap = await collection.where('relevance', '>=', 7).get();

    return docsSnap.docs.map(doc => doc.data());
}

export async function listNewTalentsAsync() {
    const docsSnap = await collection.get();
    
    return docsSnap.docs.map(doc => doc.data());
}