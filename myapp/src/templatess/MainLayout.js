import Header from "../components/organisms/Header";
import ThemePanel from "../components/organisms/ThemePanel";
import Content from "../components/organisms/Content";
import Footer from "../components/organisms/Footer";

function MainLayout() {
  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",      // Horizontal center
      //   justifyContent: "center",  // Vertical center
      //   minHeight: "100vh",        // Full page height
      //   gap: "70px",               // Space between components
      //   padding: "50px 0",         // Top & Bottom space
      // }}
    >
      <Header />
      <ThemePanel />
      <Content />
      <Footer />
    </div>
  );
}

export default MainLayout;