"use client";
import Stack from "@mui/material/Stack";
import React from "react";
import BadgeAvatars from "./BadgeAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useUserStore from "@/store/useUserStore";
import { useShallow } from "zustand/react/shallow";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type TPropsUser = {
  isShowBadge?: boolean;
  isShowLastDateMessage?: boolean;
  title: string;
  subtitle: string;
  photo: string;
  date?: string;
  isOnline?: boolean;
  isCanChat?: boolean;
  position: string;
  id: number;
};

export default function User({
  isShowBadge,
  isShowLastDateMessage,
  photo,
  subtitle,
  title,
  date,
  isOnline,
  isCanChat,
  position,
  id,
}: TPropsUser) {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const { userFocus, setUserFocus } = useUserStore(
    useShallow((state) => ({
      userFocus: state.userFocus,
      setUserFocus: state.setUserFocus,
    }))
  );
  const isOpen = isCanChat ? `${id}` === userId || `${id}` === `${userFocus.id}` : false;
  const handleClick = () => {
    if (isCanChat) {
      setUserFocus({
        id,
        name: title,
        photo,
        position,
      });
    }
  };
  const avatar = () => {
    return <Avatar alt={title} src={photo} sx={{ width: 40, height: 40 }} />;
  };

  return (
    <Link href={`/?userId=${id}`} onClick={handleClick}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        padding={"8px"}
        marginBottom={"8px"}
        className={`${isOpen && "bg-[#666CFF]"} rounded-lg cursor-pointer`}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
          {isShowBadge}
          {isShowBadge && (
            <BadgeAvatars color={!isOnline ? "#FF4D49" : undefined}>
              {avatar()}
            </BadgeAvatars>
          )}
          {!isShowBadge && avatar()}
          <Box>
            <Typography variant="subtitle1" color={isOpen ? "white" : ""}>
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              color={isOpen ? "white" : ""}
              className="truncate max-w-52"
            >
              {subtitle}
            </Typography>
          </Box>
        </Stack>
        {isShowLastDateMessage && (
          <Typography variant="subtitle1" color={isOpen ? "white" : ""}>
            {date}
          </Typography>
        )}
      </Stack>
    </Link>
  );
}
