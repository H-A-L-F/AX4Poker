import { AuthContextType, useAuthContext } from "@/core/AuthContext"
import db from "@/data/firebase"
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"

export default function AuthFormViewModel(mode: string) {
    const { setUser } = useAuthContext() as AuthContextType
    const unameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [errorMsg, setErrorMsg] = useState<string>("")

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleSubmit = async () => {
        if (!unameRef.current?.value || !passwordRef.current?.value) {
            setErrorMsg("Username or password is empty")
            return
        }

        const user = {
            uname: unameRef.current?.value,
            password: passwordRef.current?.value
        }
        const userRef = collection(db, "users")

        if (mode == "Login") {
            const q = query(userRef, where("username", "==", user.uname), where("password", "==", user.password))
            getDocs(q).then((querySnapshot) => {
                for (const doc of querySnapshot.docs) {
                    const data = { ...doc.data(), id: doc.id }
                    console.log(data)
                    setUser(data as User)
                    navigate(from, { replace: true })
                    break
                }
                setErrorMsg("Invalid username or password")
                return
            }).catch((err) => {
                console.log(err)
            })
        } else if (mode == "Register") {
            addDoc(userRef, { username: user.uname, password: user.password }).then((docRef) => {
                setUser({ username: user.uname, password: user.password, id: docRef.id })
                navigate(from, { replace: true })
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

