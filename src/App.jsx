import { testFirebaseConnection } from "./firebase/testConnection";
import BootstrapTest from "./components/BootstrapTest";

function App() {
    const handleTest = () => {
        testFirebaseConnection();
    }   

    return (
        <>
            <div style={{ padding: "40px" }}>
                <h2>Firebase Connection Test</h2>
                <p>Click the button below to check Firebase connectivity.</p>
                <button onClick={handleTest}>Test Firebase</button>
            </div>

            <BootstrapTest />
        </>
    );
}

export default App;
