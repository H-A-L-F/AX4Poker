import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import useViewModel from "./HomeViewModel"

const HomePage = () => {
  const {
    createSession,
  } = useViewModel()

  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center">
      <Button onClick={createSession}>Create Session</Button>
      <div className="h-4"></div>
      <Link to={"/session"}>
        <Button>Join Session</Button>
      </Link>
    </div>
  )
}

export default HomePage