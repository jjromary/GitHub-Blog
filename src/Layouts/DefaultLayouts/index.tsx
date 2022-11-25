import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}