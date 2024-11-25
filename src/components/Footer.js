import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#002147",
      color: "#fff",
      padding: "3rem 2rem",
    }}
  >
    {/* Footer Content */}
    <Grid container spacing={4}>
      {/* Column 1: Logo and Description */}
      <Grid item xs={12} sm={2}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Whitepace
        </Typography>
        <Typography variant="body2">
          Whitepace was created for the new ways we live and work. We make a
          better workspace around the world.
        </Typography>
      </Grid>

      {/* Column 2: Product Links */}
      <Grid item xs={12} sm={2}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Product
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Overview
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Pricing
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Customer stories
        </Link>
      </Grid>

      {/* Column 3: Resources Links */}
      <Grid item xs={12} sm={2}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Resources
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Blog
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Guides & tutorials
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Help center
        </Link>
      </Grid>

      {/* Column 4: Company Links */}
      <Grid item xs={12} sm={2}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Company
        </Typography>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          About us
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Careers
        </Link>
        <Link
          href="#"
          underline="none"
          sx={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Media kit
        </Link>
      </Grid>

      {/* Column 5: Try It Today */}
      <Grid item xs={12} sm={4}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Try It Today
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#ddd", marginBottom: "1rem" }}
        >
          Get started for free. Add your whole team as your needs grow.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1E88E5",
            color: "#fff",
            textTransform: "none",
            padding: "0.5rem 2rem",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#1565C0",
            },
          }}
        >
          Start today →
        </Button>
      </Grid>
    </Grid>

    <Box
    sx={{
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Subtle line
      backgroundColor: '#002147',
      color: '#fff',
      padding: '1.5rem 2rem',
      marginTop: '1rem'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Space between left-center and right sections
        alignItems: 'center',
        flexWrap: 'wrap', // Ensure wrapping on smaller screens
        gap: '1rem',
      }}
    >
      {/* Combined Left and Center Sections */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap', // Ensure wrapping for links on smaller screens
        }}
      >
        {/* Left Section: Language Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <LanguageIcon sx={{ fontSize: '20px' }} />
          <Typography variant="body2" sx={{ fontSize: '14px' }}>
            English
          </Typography>
        </Box>

        {/* Center Section: Links */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Link href="#" underline="none" sx={{ color: '#fff', fontSize: '14px' }}>
            Terms & privacy
          </Link>
          <Link href="#" underline="none" sx={{ color: '#fff', fontSize: '14px' }}>
            Security
          </Link>
          <Link href="#" underline="none" sx={{ color: '#fff', fontSize: '14px' }}>
            Status
          </Link>
          <Typography
            variant="body2"
            sx={{ fontSize: '14px', whiteSpace: 'nowrap' }}
          >
            ©2021 Whitepace LLC.
          </Typography>
        </Box>
      </Box>

      {/* Right Section: Social Icons */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          <FacebookIcon sx={{ fontSize: '20px' }} />
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          <TwitterIcon sx={{ fontSize: '20px' }} />
        </Link>
        <Link href="#" underline="none" sx={{ color: '#fff' }}>
          <LinkedInIcon sx={{ fontSize: '20px' }} />
        </Link>
      </Box>
    </Box>
  </Box>
  </Box>
);

export default Footer;
