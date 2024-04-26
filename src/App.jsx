import { Container, CssBaseline, ThemeProvider } from "@mui/material"
import InvoiceInformation from "./components/invoice/InvoiceInformation"
import Header1 from "./components/header/Header1"
import { ColorModeContext, useMode } from "./theme";
import Header2 from "./components/header/Header2";
import InvoiceTable from "./components/invoice/InvoiceTable";
import TotalInvoice from "./components/invoice/TotalInvoice";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/footer/ScrollToTop";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
      <Header1 />
      <Header2 />
      <InvoiceInformation/>
      <InvoiceTable />
      <TotalInvoice />
      </ThemeProvider>
      <Footer />
      <ScrollToTop />
      </ColorModeContext.Provider>
      
    
  )
}

export default App
