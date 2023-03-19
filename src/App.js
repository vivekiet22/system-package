import RightCarousel from "./components/RightCarousel";
import LeftMain from "./components/LeftMain";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
function App() {
  return (
    <Container sx={{ p: 4 }} maxWidth="md">
      <Grid sx={{ height: "678px" }} container spacing={2}>
        <Grid className="main" item sm={6} xs={12}>
          <LeftMain />
        </Grid>
        <Grid className="side" item sm={6}>
          <RightCarousel />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
