import { AuthContextType, useAuthContext } from "@/core/AuthContext";
import db from "@/data/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function HomeViewModel() {
    const { user } = useAuthContext() as AuthContextType
    const navigate = useNavigate()

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
        addDoc(sessRef, {
            name: genRandString(),
            host: user?.id,
            players: [user?.id]
        }).then((docRef) => {
            navigate(`/session/${docRef.id}`)
        })
    }

    return {
        createSession,
    }
}