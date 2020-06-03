import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AnnouncementsPage from "./pages/announcements";
import BiographyPage from "./pages/biography";
import GalleryPage from "./pages/gallery";
import TributesPage from "./pages/tributes";

export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BiographyPage />
                </Route>
                <Route exact path="/biography">
                    <BiographyPage />
                </Route>
                <Route path="/tributes">
                    <TributesPage />
                </Route>
                <Route path="/gallery">
                    <GalleryPage />
                </Route>
                <Route path="/announcements">
                    <AnnouncementsPage />
                </Route>
            </Switch>
        </Router>
    );
}
