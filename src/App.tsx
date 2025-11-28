import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { ActiveFbButton } from "./pages/ActiveFbButton";
import { RippleButton } from "./pages/RippleButton";
import { ModalDialog } from "./pages/ModalDialog";
import { Accordion } from "./pages/Accordion";
import { List } from "./pages/List";
import { Dropdown } from "./pages/Dropdown";
import { ProgressRate } from "./pages/ProgressRate";
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
            <Route path="/list" element={<List />} />
            <Route path="/dropdown" element={<Dropdown />} />
            <Route path="/progress-rate" element={<ProgressRate />} />
            <Route path="/segment-button" element={<SegmentButton />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
