import { Box, IconButton } from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#333",
        color: "#fff",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box sx={{ fontSize: "16px" }}>
        © {currentYear} EBLOG. All rights reserved.
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{
            color: "#fff",
            bgcolor: "#3b5998",
            mr: "10px",
            "&:hover": { bgcolor: "#2d4373" },
          }}
          href="https://www.facebook.com/"
        >
          <Facebook />
        </IconButton>
        <IconButton
          sx={{
            color: "#fff",
            bgcolor: "#0e76a8",
            "&:hover": { bgcolor: "#0c5a81" },
          }}
          href="https://www.linkedin.com/"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
