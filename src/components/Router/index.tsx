import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../../pages/Home";
import DiaryPage from "../../pages/Diary";
import EditPage from "../../pages/Edit";
import NewPage from "../../pages/New";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/new" element={<NewPage />} />
    <Route path="/edit/:id" element={<EditPage />} />
    <Route path="/diary/:id" element={<DiaryPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default Router;
