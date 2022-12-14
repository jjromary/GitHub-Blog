import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { ContainerPages, LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerPages>
        <Outlet />
      </ContainerPages>
    </>
  )
}