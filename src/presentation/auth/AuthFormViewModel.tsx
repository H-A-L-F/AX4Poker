import { AuthContextType, useAuthContext } from "@/core/AuthContext"
import db from "@/data/firebase"
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { useRef, useState } from "react"

export default function AuthFormViewModel(mode: string) {
    const { setUser } = useAuthContext() as AuthContextType
    const unameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const handleSubmit = () => {
        if(!unameRef.current?.value || !passwordRef.current?.value) {
            setErrorMsg("Username or password is empty")
            return
        }

        const user = {
            uname: unameRef.current?.value,
            password: passwordRef.current?.value
        }
        const userRef = collection(db, "users")

        if (mode == "Login") {
            const q = query(userRef, where("username", "==", user.uname))
            getDocs(q).then((querySnapshot) => {
                for (const doc of querySnapshot.docs) {
                    const data = doc.data()
                    if (data.username == user.uname && data.password == user.password) {
                        console.log(data)
                        setUser(data as User)
                        break
                    }
                }
                setErrorMsg("Invalid username or password")
                return
            })
        } else if (mode == "Register") {
            addDoc(userRef, { username: user.uname, password: user.password }).then((docRef) => {
                setUser({ username: user.uname, password: user.password });
            }).catch((error) => {
                console.error("Error registering user: ", error);
            });
        }
    }

    return {
        unameRef,
        passwordRef,
        handleSubmit,
        errorMsg
    }
}

