import { ReactNode } from "react"

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className="w-full min-w-screen h-full min-h-screen bg-[#003049] flex">
        {children}
    </div>
  )
}

export default MainLayout