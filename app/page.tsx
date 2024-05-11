import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import User from "@/components/User";
import ChatContainer from "@/components/ChatContainer";
import UserFocus from "@/components/UserFocus";
import { getContact, getContactChat } from "@/actions/contact";
import { convertUTCtoCustomFormat } from "@/helpers/date";
import ChatInputBar from "@/components/ChatInputBar";
import { TContact, TContactItem } from "@/types/contact";
import { TMessageItem } from "@/types/message";
import SearchChatSection from "@/components/SearchChatSection";

const getContactChatData = async () => {
  const contactsChat = await getContactChat();
  const finalResult = contactsChat.map((item: TContactItem) => {
    const messageOwner = item?.messages?.filter(
      (msg: TMessageItem) => msg?.is_owner
    );
    return {
      ...item,
      lastMessage: messageOwner?.[messageOwner.length - 1],
    };
  });
  return finalResult;
};

export default async function HomePage() {
  const contacts = await getContact();
  const contactsChat = await getContactChatData();

  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#282a42" }}
      width={"100%"}
      height={"100vh"}
      padding={"48px"}
    >
      <Stack
        component="main"
        sx={{ backgroundColor: "#3E4461" }}
        width={"100%"}
        height={"100%"}
        borderRadius={"10px"}
        className="drop-shadow-xl"
        direction="row"
      >
        <Box
          width={"370px"}
          sx={{ backgroundColor: "#30334E" }}
          className="rounded-l-lg"
        >
          <SearchChatSection />
          <Divider />
          {/* Chats */}
          <Box className="py-5 px-3">
            <Typography variant="h6" gutterBottom>
              Chats
            </Typography>
            <Box>
              {contactsChat?.map((chat: TContactItem) => (
                <User
                  id={chat?.id}
                  key={chat?.id}
                  photo={chat?.photo}
                  subtitle={chat?.lastMessage?.message}
                  title={chat?.name}
                  date={convertUTCtoCustomFormat(chat?.lastMessage?.created_at)}
                  isOnline
                  isShowBadge
                  isShowLastDateMessage
                  isCanChat
                  position={chat?.position}
                />
              ))}
            </Box>
          </Box>
          {/* Contacts */}
          <Box className="px-3">
            <Typography variant="h6" gutterBottom>
              Contacts
            </Typography>
            <Box>
              {contacts?.map((contact: TContact) => (
                <User
                  id={contact?.id}
                  key={contact?.id}
                  photo={contact?.photo}
                  subtitle={contact?.position}
                  title={contact?.name}
                  isOnline={false}
                  isShowBadge={false}
                  isShowLastDateMessage={false}
                  isCanChat
                  position={contact?.position}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right */}
        <Divider orientation="vertical" />
        <Box className="h-full" sx={{ width: "calc(100% - 370px)" }}>
          <UserFocus />
          <Divider />
          <Box className="relative" sx={{ height: "calc(100% - 68px)" }}>
            <ChatContainer />
            <ChatInputBar />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
