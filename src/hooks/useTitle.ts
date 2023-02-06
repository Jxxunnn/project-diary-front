import React, { useEffect } from "react";
import { useParams } from "react-router";

type useTitleType = (
  page: "diaryPage" | "editPage" | "newPage",
  id?: number
) => void;

export const useTitle: useTitleType = (page) => {
  const { id } = useParams();

  useEffect(() => {
    if (page === "diaryPage") {
      const $title = document.getElementsByTagName("title")[0];

      $title.innerHTML = `감정 일기장 | ${id}번 일기`;
    }

    if (page === "editPage") {
      const $title = document.getElementsByTagName("title")[0];

      $title.innerHTML = `감정 일기장 | ${id}번 일기 수정`;
    }
    if (page === "newPage") {
      const $title = document.getElementsByTagName("title")[0];

      $title.innerHTML = `감정 일기장 | 새 일기`;
    }
  }, []);
};
