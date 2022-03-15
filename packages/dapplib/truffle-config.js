require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note sad hospital install inhale frame gate'; 
let testAccounts = [
"0xb3474b63f5648a9229be3997893d18844684a98e8fb5ab5989a2de68b1d81d5a",
"0x6f89ccbb967add4e7e5f5b699717c74c008023f7bdd4856a8e38a7fc0d7f3075",
"0x843d2fa51c88ab9fa375aa183143c137baf5e4a29fe9e9b730a8d7ba55988e25",
"0xc4b57bf773cc601766e7b80e9aa2dc41b88695e261db0b8e31305205a9193cae",
"0xd3c6b8edfba022246fe0685a393c96149b38ddd4645289ba74363629d1293e3f",
"0x3f89cffa251feeca26c0f2a6db4b764a1e961ddd3c022e6cb408e50f62e6349d",
"0xbd3dd0347c1e9af68b1ef75dc92e3f84a4c893663f803f3f9bbbcb200d09b95c",
"0x4757394c20eada7d351a93876d8385f4f7d3c77b5db7157fb9b0f38e4a66dc6e",
"0x449de5b6bc29557d2d2f4fbb9f9b9ab4dcede3f491ecb253184408f760efd85f",
"0x80ead99958729b809503eebb8edfacd8ab134bc7ff63ff2456b0f9bb5b44627d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


