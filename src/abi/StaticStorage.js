export const StaticStorage = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "AddPhysical",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "AddSocial",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addDownTownInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addEmotionalInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addEnvInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addIntellectualInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addOCInfos",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addPhysicalInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addSocialInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_xPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_yPos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "_image",
                "type": "bytes"
            }
        ],
        "name": "addSpirtualInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllDowntownInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.DownTown[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllEmotionalInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Emotional[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllEnvInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Env[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllIntellectualInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Intellectual[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllOCInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.OC[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllPhysicalInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Physical[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllSocialInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Social[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllSpirtualInfos",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "xPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "yPos",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "image",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct StaticStorage.Spirtual[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]