import db from "@/data/firebase"
import { ref } from "firebase/database"
import { useRef } from "react"

export default function AuthFormViewModel(mode: string) {
    const unameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if(mode == "Login") {
            const usersRef = ref(db, "users ")
        } else if(mode == "Register") {

        }
    }

    return {
        unameRef,
        passwordRef,
    }
}