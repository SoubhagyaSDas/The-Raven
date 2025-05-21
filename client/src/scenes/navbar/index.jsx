import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Modal,
  Button,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = user.friends || [];
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  // Fetch chat history when a friend is selected
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedFriend) return;
      setLoadingMessages(true);
      try {
        const res = await fetch(
          `http://localhost:3001/messages/${user._id}/${selectedFriend._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setChatHistory(data);
      } catch (err) {
        setChatHistory([]);
      }
      setLoadingMessages(false);
    };
    fetchMessages();
  }, [selectedFriend, user._id, token]);

  // Send a message
  const handleSendMessage = async () => {
    if (!messageInput.trim() || !selectedFriend) return;
    const newMessage = {
      sender: user._id,
      receiver: selectedFriend._id,
      text: messageInput.trim(),
    };
    try {
      const res = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newMessage),
      });
      const savedMessage = await res.json();
      setChatHistory((prev) => [...prev, savedMessage]);
      setMessageInput("");
    } catch (err) {
      // Optionally show error
    }
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate("/home")}
        sx={{
          "&:hover": {
            color: primaryLight,
            cursor: "pointer",
          },
        }}
      >
        The Raven
      </Typography>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton onClick={() => setIsMessageOpen(true)}>
            <Message sx={{ fontSize: "25px" }} />
          </IconButton>
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton onClick={() => setIsMessageOpen(true)}>
              <Message sx={{ fontSize: "25px" }} />
            </IconButton>
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
      <Modal open={isMessageOpen} onClose={() => { setIsMessageOpen(false); setSelectedFriend(null); setChatHistory([]); }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Messages
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, overflowX: 'auto' }}>
            {friends.length > 0 ? (
              friends.map((friend) => (
                <Box key={friend._id} sx={{ cursor: 'pointer', border: selectedFriend && selectedFriend._id === friend._id ? '2px solid #1976d2' : '2px solid transparent', borderRadius: '50%' }} onClick={() => setSelectedFriend(friend)}>
                  <UserImage image={friend.picturePath} size="50px" />
                </Box>
              ))
            ) : (
              <Typography>No friends found.</Typography>
            )}
          </Box>
          {selectedFriend && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Chat with {selectedFriend.firstName} {selectedFriend.lastName}
              </Typography>
              <Box sx={{ height: 150, bgcolor: '#f5f5f5', borderRadius: 2, mb: 2, p: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                {loadingMessages ? (
                  <Typography color="text.secondary">Loading...</Typography>
                ) : chatHistory.length === 0 ? (
                  <Typography color="text.secondary">No messages yet.</Typography>
                ) : (
                  chatHistory.map((msg) => (
                    <Box key={msg._id} alignSelf={msg.sender === user._id ? 'flex-end' : 'flex-start'} mb={0.5}>
                      <Box sx={{
                        bgcolor: msg.sender === user._id ? '#1976d2' : '#e0e0e0',
                        color: msg.sender === user._id ? '#fff' : '#333',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.5,
                        maxWidth: 220,
                        wordBreak: 'break-word',
                        fontSize: 14,
                      }}>
                        {msg.text}
                      </Box>
                    </Box>
                  ))
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <InputBase
                  placeholder="Type a message..."
                  sx={{ flex: 1, bgcolor: '#fff', borderRadius: 2, px: 2, border: '1px solid #ccc' }}
                  value={messageInput}
                  onChange={e => setMessageInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
                  autoFocus
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage} disabled={!messageInput.trim()}>
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </FlexBetween>
  );
};

export default Navbar;
