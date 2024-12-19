import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Modal,
  IconButton,
  Alert,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PaymentNavbar from "./PaymentPageNavbar";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { FaEthereum } from "react-icons/fa";

const PaymentPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [playerId, setPlayerId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  // Dummy user data for login
  const users = [
    { playerId: "player123", password: "password123" },
    { playerId: "player456", password: "password456" },
  ];

  // Dummy payment addresses
  const paymentOptions = [
    { name: "Bitcoin", icon:CurrencyBitcoinIcon,address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Ethereum",icon:FaEthereum, address: "0x3f4e0663f1dd4af5b82817bc40c7d21a59f9ba6c" },
  ];

  // Handle login validation
  const handleLogin = () => {
    const user = users.find(
      (u) => u.playerId === playerId && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Player ID or Password");
    }
  };

  const handlePaymentClick = (address) => {
    setSelectedAddress(address);
    setOpenModal(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedAddress);
    alert("Address copied to clipboard!");
  };

  return (
    <Container height="80vh">
      <PaymentNavbar />
      {!isLoggedIn ? (
        <Box maxWidth="sm" sx={{ mt: 5, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            fullWidth
            label="Player ID"
            variant="outlined"
            margin="normal"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Log In
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Payment Options
          </Typography>
          <Grid container spacing={2}>
            {paymentOptions.map((option, index) => (
              <Grid  size={{xs:12}} key={index}>
                <Card
                  onClick={() => handlePaymentClick(option.address)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <CardContent>

                    <Typography variant="h5" color='success' textAlign={'center'}>{option.name} {<Typography>{ <option.icon/>} </Typography>} </Typography>
                   
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Modal for QR Code and Address */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="payment-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Payment Address
          </Typography>
          <Typography id="payment-modal-description" sx={{ mb: 2 }}>
            {selectedAddress}
            <IconButton onClick={handleCopyAddress}>
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            {/* QR Code Placeholder */}
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedAddress}`}
              alt="QR Code"
            />
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default PaymentPage;