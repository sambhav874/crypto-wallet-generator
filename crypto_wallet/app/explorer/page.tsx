import { PublicKey , Transaction } from "@solana/web3.js";

 function getExplorerUrl(
    endpoint : string ,
    viewTypeOrItemAddress: "inspector" | PublicKey | string,
    itemType = "address"
) {
    const getClusterUrlParam = () => {
        let cluster = "";
        if(endpoint === "localnet") {
            cluster = `custome&customeUrl=${encodeURIComponent(
                "https://127.0.0.1:8899"
            )}`;
            } else if(endpoint === "https://api.devnet.solana.com") {
                cluster = "devnet";
        }
        return cluster ? `?cluster=${cluster}` : "";
    };

    return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`;
}

export default getExplorerUrl;