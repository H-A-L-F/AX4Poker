import { useParams } from "react-router-dom"
import useViewModel from "./SessionViewModel"

const SessionPage = () => {
  const { sessionId } = useParams<{ sessionId: string }>()
  const {

  } = useViewModel(sessionId!)

  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center">
      <div className="rounded-md bg-background-900 px-4 py-2">
        Session
      </div>
    </div>
  )
}

export default SessionPage