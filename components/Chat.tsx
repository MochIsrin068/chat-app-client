import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";

type TPropsChat = {
  message: string;
  time: string;
  photo: string;
  isOwnChat?: boolean;
};

export default function Chat({ message, photo, time, isOwnChat }: TPropsChat) {
  const avatar = () => {
    return (
      <Box>
        <Avatar
          alt="avatar"
          src={photo}
          sx={{ width: 40, height: 40 }}
        />
      </Box>
    );
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={isOwnChat ? "end" : "start"}
    >
      {!isOwnChat && avatar()}
      <Box>
        <Paper
          square
          sx={{ backgroundColor: isOwnChat ? "#666CFF" : "", paddingX: '16px', paddingY: '12px' }}
          className={
            isOwnChat
              ? "!rounded-l-lg !rounded-br-lg"
              : "!rounded-r-lg !rounded-bl-lg"
          }
        >
          <Typography variant="body2" color={isOwnChat ? "white" : ""}>
            {message}
          </Typography>
        </Paper>
        <Stack direction="row" spacing={1} marginTop={1}>
          {isOwnChat && (
            <DoneAllIcon color="success" sx={{ width: 16, height: 16 }} />
          )}
          <Typography variant="caption" display="block" gutterBottom>
            {time}
          </Typography>
        </Stack>
      </Box>
      {isOwnChat && avatar()}
    </Stack>
  );
}
