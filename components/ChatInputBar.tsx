"use client";

import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Button from "@mui/material/Button";
import useInputBar from "@/hooks/useInputBar";

export default function ChatInputBar() {
  const { handleChange, handleSend, message } = useInputBar();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      width={"100%"}
      justifyContent={"center"}
      className="absolute bottom-4"
    >
      <FormControl
        sx={{
          m: 1,
          width: "718px",
          backgroundColor: "#30334E",
          borderRadius: "8px",
        }}
        variant="outlined"
      >
        <OutlinedInput
          value={message}
          onChange={handleChange}
          className="!border-none !outline-none"
          id="outlined-adornment-password"
          type={"text"}
          placeholder="Type your messange here..."
          sx={{ borderRadius: "8px" }}
          endAdornment={
            <InputAdornment position="end" className="gap-4">
              <IconButton aria-label="toggle password visibility" edge="end">
                <KeyboardVoiceIcon />
              </IconButton>
              <IconButton aria-label="toggle password visibility" edge="end">
                <AttachFileIcon />
              </IconButton>
              <Button variant="contained" onClick={handleSend}>
                Send
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
    </Stack>
  );
}
