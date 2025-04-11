import { PluralityWallet } from "./PluralityWallet";

const App = () => {
    return (
        <div>
            <PluralityWallet
                clientId="d7e2d97e-d104-498e-a9c3-4b14a9cf8943"
                text="ahdkj"
                onLogin={() => {
                    console.log("login");
                }}
            />
        </div>
    );
};

export default App;
