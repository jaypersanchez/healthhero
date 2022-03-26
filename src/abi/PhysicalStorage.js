export const PhysicalStorage = [
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
        "name": "addPhysicalInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "struct PhysicalStorage.Physical[]",
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