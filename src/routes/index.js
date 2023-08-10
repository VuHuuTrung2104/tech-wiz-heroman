import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/notfound";
import TodoPage from "../pages/SteamPage";
import YoutubePage from "../pages/YoutubePage";
import TwitchPage from "../pages/TwitchPage";


function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/NimoTV-page" element={<TodoPage/>}></Route>
            <Route path="/Youtube-page" element={<YoutubePage/>}></Route>
            <Route path="/Twitch-page" element={<TwitchPage/>}></Route>
        </Routes>
    );
}export default AppRoutes;