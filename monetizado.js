const networks = {
    "opbnb:testnet":"0x0702B45d590372b5456BeC39e13a46c00Fc8F733",
    "bnb:testnet":"0x13cbEaAaBcC8a126dF2f7b1aA955251574191231"
}

const monetizadoAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "usuario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "GrantedAccess",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "accessCost",
				"type": "uint256"
			}
		],
		"name": "addProtectedContent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "newCost",
				"type": "uint256"
			}
		],
		"name": "changeAccessCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "feePlatform",
				"type": "uint256"
			}
		],
		"name": "changePlatformFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "currentUserHasAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlatformBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPlatformFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "getProtectedContentByAddressAndId",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "accessCost",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isProtected",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "sequenceId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amountAvailable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					}
				],
				"internalType": "struct Monetizadov1.ProtectedContentInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProtectedContentsForCurrentUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "accessCost",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isProtected",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "sequenceId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amountAvailable",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					}
				],
				"internalType": "struct Monetizadov1.ProtectedContentInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hosting",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "payAccess",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "protectContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			}
		],
		"name": "unprotectContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "sequenceId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMoneyFromContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawMoneyPlatform",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



async function getContract(web3,contractNetwork, userAddress) {
    var contractPublic = await new web3.eth.Contract(monetizadoAbi,contractNetwork);
    if(userAddress != null && userAddress != undefined) {
      contractPublic.defaultAccount = userAddress;
    }
    return contractPublic;
  }


// Nombre de la nueva propiedad
const monetizadoProp = 'monetizado';


window[monetizadoProp] = {
    isPageEnabled : function() {
        const monetizationTag = document.querySelector('link[rel="monetizado"]');

        if (monetizationTag == null) {
            return false;
        }
        else {
            return true;
        }
    },
    validateNetworkFormat: function(networkFormat) {
        const parts = networkFormat.split("://");
        if(parts.length == 2) {
            if (networks.hasOwnProperty(parts[0])) {
                const subpartsCreator = parts[1].split("/");
                if(subpartsCreator.length == 2) {
                    return true;
                }
                else {
                    console.error("The content format is wrong. It should be:<creator address like 0x...>/<sequence Id for content>");
                    return false;
                }
            }
            else {
                console.error("The network doesn't exist for this Monetizado version");
                return false;
            }
        }else {
            console.error("Format error. It should be <network (bnb/opbnb)>:<type (mainnet/testnet)>://<creator address like 0x...>/<sequence Id for content>");
            return false;
        }
    },
    connectWeb3 : function(urlRPC) {
        return new Web3(new Web3.providers.HttpProvider(urlRPC));
    },
    userHasAccess: async function(Web3) {

        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var user = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.currentUserHasAccess(creatorId,sequenceId).encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              user = iface.decodeFunctionResult("currentUserHasAccess", user);
              return user[0];
          }
    },
    getContentInfo: async function(Web3){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            var contentInfo = await ethereum
              .request({
                method: 'eth_call',
                params: [
                  {
                    from: account, // The user's active address.
                    data: contractPublic.methods.getProtectedContentByAddressAndId(creatorId,sequenceId).encodeABI(),
                    to: contractNetwork
                  },
                ],
              });
              contentInfo = iface.decodeFunctionResult("getProtectedContentByAddressAndId", contentInfo);
              return contentInfo;
          }
    },
    payContent: async function(Web3,amount){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        var account = accounts[0];
        
        const monetizationTag = document.querySelector('link[rel="monetizado"]');
        const parts = monetizationTag.href.split("://");

        const contractNetwork = networks[parts[0]];
        const creatorParts = parts[1].split("/");
        const creatorId = creatorParts[0];
        const sequenceId = creatorParts[1];

        var contractPublic = await getContract(Web3,contractNetwork,account);

        if(contractPublic != undefined) {
            const query = contractPublic.methods.payAccess(creatorId,sequenceId);
            const encodedABI = query.encodeABI();
            const gasPrice = web3.utils.toHex(await web3.eth.getGasPrice());
            var payContentId = await ethereum
            .request({
              method: 'eth_sendTransaction',
              params: [
                {
                  from: account, 
                  to: contractNetwork,
                  data: encodedABI,
                  value: web3.utils.numberToHex(amount),
                  gasLimit: '0x5208', // Customizable by the user during MetaMask confirmation.
                  maxPriorityFeePerGas: gasPrice, // Customizable by the user during MetaMask confirmation.
                  //maxFeePerGas: gasPrice, // Customizable by the user during MetaMask confirmation.
                },
              ],
            });

            return payContentId;
          }
    }
}
