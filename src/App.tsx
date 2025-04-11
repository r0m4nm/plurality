import { PluralityWallet } from "./PluralityWallet";

const App = () => {
    return (
        <div>
            <PluralityWallet
                clientId=""
                text="ahdkj"
                onLogin={() => {
                    console.log("login");
                }}
            />
        </div>
    );
};

export default App;
