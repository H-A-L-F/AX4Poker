import { useRef } from "react"

export default function AuthFormViewModel(mode: string) {
    const unameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleSubmit = () => {
        if(mode == "Login") {

        } else if(mode == "Register") {

        }
    }

    return {

    }
}