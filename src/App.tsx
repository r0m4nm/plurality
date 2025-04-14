import { PluralityWallet } from "./PluralityWallet";

const App = () => {
    return (
        <div>
            <PluralityWallet
                clientId=""
                text=""
                onLogin={() => {
                    console.log("login");
                }}
            />
            <h1>Hello World</h1>
        </div>
    );
};

export default App;
