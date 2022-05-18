import Intro from './components/intro/Intro';
import LaunchInfo from "./components/launch-info/LaunchInfo";
import { Routes, Route} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/launch" element={<LaunchInfo />}>
                <Route path=":id" element={<LaunchInfo />} />
            </Route>
        </Routes>
    );
}

export default App;
