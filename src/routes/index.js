import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/notfound";
import TodoPage from "../pages/to-do";
import CardPage from "../pages/Card";

function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/my-todo" element={<TodoPage/>}></Route>
            <Route path="/cards" element={<CardPage/>}></Route>
        </Routes>
    );
}export default AppRoutes;