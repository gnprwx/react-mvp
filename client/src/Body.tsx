import React, { ReactNode } from 'react'

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto 2xl:max-w-[1440px] sm:max-w-7xl px-5 pt-10">
      {children}
    </div>
  )
}

export default Body