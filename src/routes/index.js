import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/notfound";
import NimoTVPage from "../pages/NimoTVPage.js";
import YoutubePage from "../pages/YoutubePage";
import TwitchPage from "../pages/TwitchPage";
import ContactPage from "../pages/ContactPage";
import FavPage from "../pages/FavPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/tech-wiz-heroman" element={<HomePage />}></Route>
      <Route path="*" element={<HomePage></HomePage>}></Route>
      <Route path="/NimoTV-page" element={<NimoTVPage />}></Route>
      <Route path="/Youtube-page" element={<YoutubePage />}></Route>
      <Route path="/Twitch-page" element={<TwitchPage />}></Route>
      <Route path="/Feedback-page" element={<ContactPage />}></Route>
      <Route path="/FavPage" element={<FavPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
