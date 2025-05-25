
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

export default function TopLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}