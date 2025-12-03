import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { ActiveFbButton } from "./pages/ActiveFbButton";
import { RippleButton } from "./pages/RippleButton";
import { ModalDialog } from "./pages/ModalDialog";
import { Accordion } from "./pages/Accordion";
import { ScrollTriggeredAnimation } from "./pages/ScrollTriggeredAnimation";
import { HamburgerMenu } from "./pages/HamburgerMenu";
import { SvgAndValues } from "./pages/SvgAndValues";
import { SegmentButton } from "./pages/SegmentButton";

const App = () => {
  return (
    <>
      <Header />
      <div className="globalContainer">
        <main className="globalMain">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/active-fb-button" element={<ActiveFbButton />} />
            <Route path="/ripple-button" element={<RippleButton />} />
            <Route path="/modal-dialog" element={<ModalDialog />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/scroll-triggered-animation" element={<ScrollTriggeredAnimation />} />
            <Route path="/hamburger-menu" element={<HamburgerMenu />} />
            <Route path="/svg-and-values" element={<SvgAndValues />} />
            <Route path="/segment-button" element={<SegmentButton />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
