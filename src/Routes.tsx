import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayouts";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
      </Route>
    </Routes>
  )
}