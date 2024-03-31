import db from "@/data/firebase"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"


export default function SessionViewModel(sessId: string) {
    const [session, setSession] = useState<Session | null>(null)

    function listenSession() {
        const sessRef = doc(db, "sessions/" + sessId)
        console.log(sessRef)
        return onSnapshot(sessRef, (snapshot) => {
            console.log(snapshot)
            setSession({ ...snapshot.data() as Session, id: snapshot.id })
        })
    }

    useEffect(() => {
        const unsubSess = listenSession()

        return () => {
            unsubSess()
        }
    }, [])

    useEffect(() => {
        console.log(session)
    }, [session])

    return {

    }
}

