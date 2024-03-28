import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center">
      <Button>Create Session</Button>
      <div className="h-4"></div>
      <Button>Join Session</Button>
    </div>
  )
}

export default HomePage