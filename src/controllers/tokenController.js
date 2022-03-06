import { Connection } from "@solana/web3.js";
import tokenService from "../services/tokenService.js";

const tokenController = {
    getMetaData: async (pubKey) => {
        const endpoint = process.env.SOLANA_RPC_HOST;

        //connect
        const connection = new Connection(endpoint, { commitment: "confirmed", disableRetryOnRateLimit: true });

        //get accounts
        let accounts = await tokenService.getTokenAccounts(connection, pubKey);

        if (accounts?.length > 0) {
            //reformat the account with only token information.
            let tokenList = accounts.map(accountInfo => accountInfo?.account?.data?.parsed?.info);
            //filter out tokens owned previously but no longer in wallet.
            let ownedTokens = tokenList.filter(token => token.owner === pubKey && parseInt(token.tokenAmount?.amount) > 0);

            //get token data
            let ownedTokenData = [];
            for (let token of ownedTokens) {
                let tokenData = await tokenService.getTokenData(connection, token)
                if (tokenData) {
                    ownedTokenData.push(tokenData);
                }
            }
            console.log(`Found ${ownedTokens?.length} tokenData for pubKey ${pubKey}.`);

            //get meta data
            let metaDataList = [];
            for (let tokenData of ownedTokenData) {
                let metaData = await tokenService.getMetaData(tokenData);
                if (metaData) {
                    metaDataList.push(metaData);
                }
            }
            console.log(`Found ${metaDataList?.length} metaData for pubKey ${pubKey}.`);

            return metaDataList;

        } else {
            return [];
        }
    },
}

export default tokenController;