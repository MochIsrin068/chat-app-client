"use client";

import Box from "@mui/material/Box";
import React, { Suspense } from "react";
import User from "./User";
import useUserStore from "@/store/useUserStore";
import { useShallow } from "zustand/react/shallow";

export default function UserFocus() {
  const { userFocus } = useUserStore(
    useShallow((state) => ({ userFocus: state.userFocus }))
  );

  return (
    <Box height={"68px"}>
      <Suspense>
        <User
          photo={userFocus.photo}
          subtitle={userFocus.position}
          id={userFocus.id}
          title={userFocus.name}
          isOnline
          isShowBadge
          isShowLastDateMessage={false}
          position={userFocus.position}
        />
      </Suspense>
    </Box>
  );
}
