import app from "./config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export const testFirebaseConnection = async () => {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      message: "Hello Firebase!",
      timestamp: new Date(),
      test: 'this is a test msg'
    });

    console.log("Firebase connected! Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Firebase connection failed:", error);
  }
};
