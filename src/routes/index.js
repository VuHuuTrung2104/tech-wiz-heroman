import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/notfound";
import SteamPage from "../pages/SteamPage";
import YoutubePage from "../pages/YoutubePage";
import TwitchPage from "../pages/TwitchPage";
import CardPage from "../component/Card";

function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path="/NimoTV-page" element={<SteamPage/>}></Route>
            <Route path="/Youtube-page" element={<YoutubePage/>}></Route>
            <Route path="/Twitch-page" element={<TwitchPage/>}></Route>
            <Route path="/cards" element={<CardPage/>}></Route>
        </Routes>
    );
}export default AppRoutes;
