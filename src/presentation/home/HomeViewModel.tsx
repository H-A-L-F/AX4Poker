import db from "@/data/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function HomeViewModel() {

    function genRandString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }


    function createSession() {
        const sessRef = collection(db, "sessions")
        // addDoc(sessRef, {
        //     name: genRandString(),
        //     host: 
        // })
        return {
        }
    }
}