import tokenController from "./tokenController.js";

const apiController = {
    getTokens: async (req, res) => {
        let pubKey = req.body.pubKey;

        if (!pubKey) {
            return res.status(400).json({ message: "Error. Please connect wallet and send pubKey to verify." });
        }

        let metaDataArray = await tokenController.getMetaData(pubKey);

        let response = {
            pubKey,
            data: metaDataArray,
            message: "Token metaData found in user wallet.",
        };

        res.json(response);
    },
}

export default apiController;