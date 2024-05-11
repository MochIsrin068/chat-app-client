import { TUserState } from "@/types/store";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create<TUserState>()(
  devtools(
    persist(
      (set, get) => ({
        userFocus: {
          id: 1,
          name: "John Rower",
          photo: "https://randomuser.me/api/portraits/men/1.jpg",
          position: "Frontend Developer",
        },
        setUserFocus(userFocus) {
          set({
            userFocus,
          });
        },
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUserStore;
