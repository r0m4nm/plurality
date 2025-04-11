interface PluralityWalletProps {
    clientId: string;
    theme?: "light" | "dark";
    text?: string;
    onLogin?: (data: any) => void;
}
export declare const PluralityWallet: ({ clientId, theme, text, onLogin, }: PluralityWalletProps) => import("react/jsx-runtime").JSX.Element;
export default PluralityWallet;
