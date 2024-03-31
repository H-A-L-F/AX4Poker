import db from "@/data/firebase"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"


export default function SessionViewModel(sessId: string) {
    const [session, setSession] = useState<Session | null>(null)
    const [players, setPlayers] = useState<User[]>([])

    function listenSession() {
        const sessRef = doc(db, "sessions/" + sessId)
        return onSnapshot(sessRef, (snapshot) => {
            setSession({ ...snapshot.data() as Session, id: snapshot.id })
        })
    }

    function updatePlayers(ids: string[]) {
        ids.forEach(async (id) => {
            const res = await getDoc(doc(db, "users/" + id))
            const user = { ...res.data(), id: res.id } as User
            setPlayers(prev => [...prev, user])
        })
    }

    useEffect(() => {
        const unsubSess = listenSession()

        return () => {
            unsubSess()
        }
    }, [])

    useEffect(() => {
        if (session != null) {
            setPlayers([])
            updatePlayers(session.players)
        }
    }, [session])

    return {
        session,
        players
    }
}

