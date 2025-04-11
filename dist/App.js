import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PluralitySocialConnect } from "@plurality-network/smart-profile-wallet";
import { useState } from "react";
const App = () => {
    const [isLogin, setLogin] = useState(false);
    // options for the embedded profiles wallet
    const options = {
        clientId: "d7e2d97e-d104-498e-a9c3-4b14a9cf8943",
        theme: "light",
        text: "Login",
    };
    console.log("clientId", options.clientId);
    const abi = '[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
    const rawTx = JSON.stringify({
        to: "0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2",
        value: "10000000000000000", //ethers.parseEther("0.01") but keep in string
        gasLimit: "21000", // we need bigInt, so keep it in string
        gasPrice: "50000000000", //ethers.parseUnits("50", "gwei") but keep in string
    });
    const txParams = JSON.stringify([8]);
    const txOptions = JSON.stringify({ gasLimit: 2000000 });
    const getAllAccounts = async () => {
        const response = (await PluralitySocialConnect.getAllAccounts());
        if (response) {
            const allAccounts = response.data;
            alert(`All Accounts: ${allAccounts[0]}`);
            return allAccounts[0]?.address;
        }
    };
    const getConnectedAccount = async () => {
        const response = (await PluralitySocialConnect.getConnectedAccount());
        if (response) {
            const connectedAccount = response.data;
            alert(`Connected Account: ${connectedAccount}`);
            return connectedAccount?.address;
        }
    };
    const getMessageSignature = async (message) => {
        const response = (await PluralitySocialConnect.getMessageSignature(message));
        if (response) {
            const signMessage = response.data;
            alert(`Sign Message Data: ${signMessage}`);
            console.log(signMessage);
            return signMessage;
        }
    };
    const getVerifyMessageData = async (message, key) => {
        const response = (await PluralitySocialConnect.verifyMessageSignature(message, key));
        if (response) {
            const verifyMessage = response.data;
            alert(`Verification Signature Data: ${verifyMessage}`);
            return verifyMessage;
        }
    };
    const getBalanceData = async (rpc, chainId) => {
        const response = (await PluralitySocialConnect.getBalance(rpc, chainId));
        if (response) {
            const getBalance = response.data;
            alert(`Balance: ${getBalance}`);
            return getBalance;
        }
    };
    const sendTransactionData = async (rawTx, rpc, chainId) => {
        const response = (await PluralitySocialConnect.sendTransaction(rawTx, rpc, chainId));
        if (response) {
            console.log("Send Transaction Response (Inisde dApp): ", response.data);
            const sendTransactionData = response.data;
            return sendTransactionData;
        }
    };
    const fetchBlockNumber = async (rpc, chainId) => {
        const response = (await PluralitySocialConnect.getBlockNumber(rpc, chainId));
        if (response) {
            const blockNumber = response.data;
            alert(`Block Number: ${blockNumber}`);
            return blockNumber;
        }
    };
    const fetchTransactionCount = async (address, rpc, chainId) => {
        const response = (await PluralitySocialConnect.getTransactionCount(address, rpc, chainId));
        if (response) {
            const transactionCount = response.data;
            alert(`Transaction Count: ${transactionCount}`);
            return transactionCount;
        }
    };
    const readFromContractData = async (address, abiVal, action, params, rpc, chainId) => {
        const response = (await PluralitySocialConnect.readFromContract(address, abiVal, action, params, rpc, chainId));
        if (response) {
            const readContract = response.data;
            alert(`Read From Contract Data: ${readContract}`);
            return readContract;
        }
    };
    const writeToContractData = async (address, abiVal, action, params, rpc, chainId, options) => {
        const response = (await PluralitySocialConnect.writeToContract(address, abiVal, action, params, rpc, chainId, options));
        console.log("res", response);
        if (response) {
            const writeContract = response.data;
            alert(`Write To a Contract: ${writeContract}`);
            return writeContract;
        }
    };
    const loadPublicData = async () => {
        const response = (await PluralitySocialConnect.getPublicData("name"));
        if (response) {
            alert(response.data);
            console.log("Load Public Data  (Inside dApp):", response.data);
        }
    };
    const storePublicData = async () => {
        const response = (await PluralitySocialConnect.setPublicData("name", "plural-abc"));
        if (response) {
            alert(response.data);
            console.log("response", response.data);
        }
    };
    const loadPrivateData = async () => {
        const response = (await PluralitySocialConnect.getPrivateData("work"));
        if (response) {
            alert(response.data);
            console.log("response", response.data);
        }
    };
    const storePrivateData = async () => {
        const response = (await PluralitySocialConnect.setPrivateData("work", "Plurality"));
        if (response) {
            alert(response.data);
            console.log("response", response.data);
        }
    };
    const updateConsent = async () => {
        const response = (await PluralitySocialConnect.updateConsentOption());
        if (response) {
            const smartProfileData = response.data;
            alert(`Connected Account: ${JSON.stringify(response.data)}`);
            return smartProfileData;
        }
    };
    const fetchSmartProfileData = async () => {
        const response = (await PluralitySocialConnect.getSmartProfileData());
        if (response) {
            const smartProfileData = response.data;
            alert(`Connected Account: ${JSON.stringify(response.data)}`);
            return smartProfileData;
        }
    };
    const fetchLoginInfo = async () => {
        const response = (await PluralitySocialConnect.getLoginInfo());
        if (response) {
            const loginInfoData = response.data;
            console.log("Connected Account Info (Inisde dApp)::", loginInfoData);
            alert(`Connected Account: ${JSON.stringify(loginInfoData)}`);
            return loginInfoData;
        }
    };
    const handleDataReturned = (data) => {
        const receivedData = JSON.parse(JSON.stringify(data));
        console.log("Login info callback data (Inisde dApp)::", receivedData);
        setLogin(true);
    };
    return (_jsxs("div", { style: {
            height: "100vh" /* Full viewport height */,
            width: "100vw" /* Full viewport width */,
        }, children: [_jsx("div", { style: {
                    display: "flex",
                    justifyContent: "right" /* Centers horizontally */,
                    padding: "20px",
                }, children: _jsx(PluralitySocialConnect, { options: options, onDataReturned: handleDataReturned }) }), _jsx("div", { style: {
                    padding: "20px",
                    gap: "8px",
                }, children: isLogin && (_jsxs("div", { children: [_jsx("h1", { children: " Wallet SDK Functions " }), _jsx("br", {}), _jsx("button", { onClick: () => getAllAccounts(), children: "Get All Accounts" }), "\u00A0", _jsx("button", { onClick: () => getConnectedAccount(), children: "Get Connected Account" }), "\u00A0", _jsx("button", { onClick: () => getMessageSignature("Example `personal_sign` message."), children: "Sign Message" }), "\u00A0", _jsx("button", { onClick: () => getVerifyMessageData("Example `personal_sign` message.", "0x8e2eeb0a7fe472bcd9751e2a8f27b60050c98a3140c07679bd1a00082de1fce86c9dbaad511503e1c4b2e9f57f7ddf971865eb9f177387879417ef0776c02cf41b"), children: "Verify Message" }), "\u00A0", _jsx("button", { onClick: () => getBalanceData("https://ethereum-sepolia.rpc.subquery.network/public", "11155111"), children: "Get Balance" }), "\u00A0", _jsx("button", { onClick: () => sendTransactionData(rawTx, "https://ethereum-sepolia.rpc.subquery.network/public", "11155111"), children: "Send Transaction" }), "\u00A0", _jsx("button", { onClick: () => fetchTransactionCount("0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2", "https://ethereum-sepolia.rpc.subquery.network/public", "11155111"), children: "Get Transaction count" }), "\u00A0", _jsx("button", { onClick: () => readFromContractData("0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937", abi, "retrieve", "", "https://ethereum-sepolia.rpc.subquery.network/public", "11155111"), children: "Read Contract" }), "\u00A0", _jsx("button", { onClick: () => writeToContractData("0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937", abi, "store", txParams, "https://ethereum-sepolia.rpc.subquery.network/public", "11155111", txOptions), children: "Write Contract" }), _jsx("hr", {}), _jsx("br", {}), _jsx("h1", { children: "Profile SDK Functions" }), _jsx("br", {}), _jsx("button", { onClick: () => storePublicData(), children: "Set Public Metadata" }), "\u00A0", _jsx("button", { onClick: () => loadPublicData(), children: "Get Public Metadata" }), "\u00A0", _jsx("button", { onClick: () => storePrivateData(), children: "Set Private Metadata" }), "\u00A0", _jsx("button", { onClick: () => loadPrivateData(), children: "Get Private Metadata" }), "\u00A0", _jsx("button", { onClick: () => fetchLoginInfo(), children: "Get Login Info" }), "\u00A0", _jsx("button", { onClick: () => updateConsent(), children: "Update Consent" }), "\u00A0", _jsx("button", { onClick: () => fetchSmartProfileData(), children: "Get Smart Profile Data" })] })) })] }));
};
export default App;
