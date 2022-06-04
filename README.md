# metadata_nft_server
Back-end application to fetch token metadata from a Solana wallet.

1/ Create a .env file and fill in the following variable:  
SOLANA_NETWORK=

2/ run `npm install` in the root directory.

3/ run `nodemon` to start the development server.

4/ Send back-end post requests to http://localhost:5000/getTokens from your front-end setup, include the pubKey string in request's body.

5/ Deploy site on a hosting service like Heroku.

# Features:  
- Metadata fetching

# Related video tutorials:  
- Fetch your NFT metadata from a Phantom wallet (https://youtu.be/2HnpSxxef4c)
