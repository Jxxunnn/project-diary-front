import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/Home";
import DiaryPage from "../../pages/Diary";
import EditPage from "../../pages/Edit";
import NewPage from "../../pages/New";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/new" element={<NewPage />} />
    <Route path="/edit" element={<EditPage />} />
    <Route path="/diary/:id" element={<DiaryPage />} />
  </Routes>
);

export default Router;
