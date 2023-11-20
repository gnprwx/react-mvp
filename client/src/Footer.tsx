import { ReactNode } from "react"

const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <footer className="text-center mx-auto py-5 border-t-2 border-indigo-500 bg-indigo-900">
      <a
        href="https://pappas.sh"
        className="decoration shadow-md shadow-indigo-400/50 rounded bg-indigo-800/40 border-2 border-indigo-400 text-indigo-300 font-bold text-xs p-1"
        target="_blank"
      >
        {children}
      </a>
    </footer>
  )
}

export default Footer