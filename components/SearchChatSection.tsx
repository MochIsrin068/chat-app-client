import Stack from "@mui/material/Stack";
import React from "react";
import BadgeAvatars from "./BadgeAvatar";
import InputAdornment from "@mui/material/InputAdornment";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Avatar from "@mui/material/Avatar";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function SearchChatSection() {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"68px"}
      className="px-4"
    >
      <BadgeAvatars>
        <Avatar
          alt="avatar"
          src="https://randomuser.me/api/portraits/men/3.jpg"
          sx={{ width: 40, height: 40 }}
        />
      </BadgeAvatars>
      <div className="rounded-[50px] border border-solid border-[#595d75] w-full ml-4 flex">
        <OutlinedInput
          type={"text"}
          placeholder="Search..."
          sx={{ borderRadius: "50px", width: "100%" }}
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
        />
      </div>
    </Stack>
  );
}
