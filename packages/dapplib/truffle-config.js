require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name release noble erosion just end army gaze'; 
let testAccounts = [
"0x77c0fa2a7583a61b4d160c929f39cdbb33579377aa6742874b0dbf0eece86021",
"0xdbe70c1045e80be277ef6ff9ce96a52ded84a7068fb0216a9077917909e4239c",
"0xd005079986d1b6f5195570f3296cea2718495d1f53381c0dc1a12a2b2a48b8b8",
"0xc608bffb7c21405c796597a1ae68bb3c387c8af70ad36c8d7ac51ce8c8b3740b",
"0x30497426cd2d0d68b02cca5b23958c8efda14c4212551ae2e0fec0714bdfff1a",
"0x6650455c78309b9a0a3d53cbf0def49460958fcd5a479e37d9cca5098f2338ab",
"0x70b5b5e7724b60c524c361f675327218ef0e113d132a64e44f011345ae4ab5d6",
"0x2c99c8237435a9275ca0099292f966e068c09d514b2b9264af35d29267d04f31",
"0x45a47ab2f9b562a052365c08b416a369ac075556a3531c1ada9abe177bb965bb",
"0xafd90ded40adcf2f460a5bef0947dc86773631d74bab018300f97e7d1824ae47"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

