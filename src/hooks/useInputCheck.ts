import { KeyboardEvent, useRef } from "react";
import card from "../store/card";

export const useInputCheck = (id: number) => {
  const ref = useRef<HTMLInputElement>(null);

  const addCheckItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const title = ref.current!.value.trim();
      title && card.addCheckItem(id, title);
      ref.current!.value = "";
      card.toggleAddCheckList(id, false)
    }
  };
  return {
    ref,
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => {
      addCheckItem(e);
    },
  };
};
