import { ReactNode } from "react"

const Header = ({children}:{children: ReactNode}) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 px-10 py-5 bg-indigo-900 border-b-2 border-indigo-500 shadow-lg shadow-indigo-500/40">
      {children}
    </div>
  )
}

export default Header