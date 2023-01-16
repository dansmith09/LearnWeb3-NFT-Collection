export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "NFT GAME TEST #" + tokenId,
      annimation_url: "https://arweave.net/p9IgwICVOS8F8FdBfZdZI3LoUZ8FngbZPutqP4J1a24",
      description: "Crypto Devs is a collection of developers in crypto",
      image: "https://zewiiits5b6m6pgnnzz574ghdvz2saaqjuxw3swc3r73nicxl56q.arweave.net/ySyEInLofM88zW5z3_DHHXOpABBNL23Kwtx_tqBXX30",
      attributes: [
        {
          "trait_type": "Chain of Preference", 
          "value": "Ethereum"
        }, 
        {
          "trait_type": "Deployed By", 
          "value": "BigSmith.eth"
        }, 
      ]
    });
  }

  // {
//     "description": "If only to see the tree for the forest",
//     "external_url": "https://luke.gallery",
//     "image": "https://arweave.net/7u5wKj0j_WlzmhO2knmoQIlT9c0Ggai1z_lDfuPbA6k",
//     "name": "Luke Cassady-Dorion",
//     "animation_url": "https://arweave.net/ya16e5Ur1enjUv7kdY8sMlBEAn_7QM4cRMo0HqRmq_U"
// }