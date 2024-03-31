import { useParams } from "react-router-dom"
import useViewModel from "./SessionViewModel"
import { BiCopy } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const SessionPage = () => {
  const { sessionId } = useParams<{ sessionId: string }>()
  const {
    session,
    players
  } = useViewModel(sessionId!)

  if (session == null) return <div>Loading...</div>
  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center p-[10%]">
      <div className="rounded-md bg-background-900 px-6 py-4 w-full text-xl font-semibold flex flex-row justify-between">
        {session.name}
        <Button className="bg-background-950">
          <BiCopy size={28} />
        </Button>
      </div>
      <div className="h-4"></div>
      <div className="flex flex-row gap-4 w-full">
        <div className="rounded-md bg-background-900 px-4 py-2 w-2/3">
          {Array.from({ length: 4 }, (_, i) => {
            if (!players[i]) return (
              <div key={i}>
                Empty
              </div>
            )
            return (
              <div key={i}>
                {players[i].username}
              </div>
            )
          })}
        </div>
        <div className="rounded-md bg-background-900 px-4 py-2 w-1/3">
        </div>
      </div>
    </div>
  )
}

export default SessionPage