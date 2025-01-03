import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";

function Footer() {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Stack direction="row" spacing={2} justifyContent="center">
                <Avatar className="text-center" alt="Peter Wilson" src="/headshot-close.jpeg" />
                <Typography variant="h6" align="center" gutterBottom>
                    Peter Wilson
                </Typography>
            </Stack>

            <Stack direction="row" spacing={2} pt={3} justifyContent="center">
                <IconButton sx={{ width: 36, height: 36 }} color="primary" onClick={() => window.open("https://www.linkedin.com/in/peterrwilson99/")}>
                    <LinkedInIcon sx={{ width: 36, height: 36 }} fontSize="inherit" />
                </IconButton>
                <Tooltip title="Resume">
                    <IconButton sx={{ width: 36, height: 36 }} color="primary" onClick={() => window.open("/files/resume.pdf")}>
                        <WorkOutlineIcon sx={{ width: 36, height: 36 }} fontSize="inherit" />
                    </IconButton>
                </Tooltip>
                <IconButton sx={{ width: 36, height: 36 }} color="primary" onClick={() => window.open("https://github.com/peterrwilson99")}>
                    <GitHubIcon sx={{ width: 36, height: 36 }} fontSize="inherit" />
                </IconButton>
            </Stack>
        </Box>
    );
}

export default Footer;
