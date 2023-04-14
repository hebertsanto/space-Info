import React from "react"
import { Header } from "../components/header"
import { Outlet } from "react-router-dom"


export const Page = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}