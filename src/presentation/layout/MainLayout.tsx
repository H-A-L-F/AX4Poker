import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode,
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="w-full min-w-screen h-full min-h-screen bg-background">
        {children}
    </div>
  )
}

export default MainLayout