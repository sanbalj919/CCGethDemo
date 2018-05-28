a = eth.accounts[0]
web3.eth.defaultAccount = a;

// abi and bytecode generated from simplestorage.sol:
// > solcjs --bin --abi simplestorage.sol
var abi = [{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankName","outputs":[{"name":"bankName","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"
},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"statuses","type":"string"}],"name":"updateStatusBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"
},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"_newStatus","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"},{"name":"_micr_hash","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"micr_hashes","type":"string"}],"name":"registerBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"bankName","type":"string"}],"name":"addBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankAccess","outputs":[{"name":"access","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"}],"name":"removeBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs"
:[{"name":"_hash","type":"string"}],"name":"getTimeOfRegistration","outputs":[{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs"
:[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{
"name":"_hash","type":"string"}],"name":"validate","outputs":[{"name":"status","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validateMICR","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":
"string"}],"name":"getBankOfCheque","outputs":[{"name":"bankAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_hash","type":"string"},{"indexed":false,"name":"_micr_hash","type":"string"},{"indexed":false,"name":"time","type":"uint256"}],"name":"chequeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_newStatus","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"chequeStatusUpdated","type":"event"}];

var bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612089806100606000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301da7b31146100d557806327014a6014610191578063347047cc146102405780633ffbd47f146102ef5780638503f61e1461039e5780638c4389081461044d5780638e66829c146104ee5780638f283970146105495780639649650c1461058c578063a3d7e5cb146105e7578063cfb5192814610664578063d182b83b146106e9578063fb527907146107cb578063fd28a6e61461084c575b600080fd5b3480156100e157600080fd5b50610116600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561015657808201518184015260208101905061013b565b50505050905090810190601f1680156101835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561019d57600080fd5b5061023e600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506109d9565b005b34801561024c57600080fd5b506102ed600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610e24565b005b3480156102fb57600080fd5b5061039c600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061104c565b005b3480156103aa57600080fd5b5061044b600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506112fa565b005b34801561045957600080fd5b506104d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506117e5565b604051808215151515815260200191505060405180910390f35b3480156104fa57600080fd5b5061052f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118e7565b604051808215151515815260200191505060405180910390f35b34801561055557600080fd5b5061058a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611940565b005b34801561059857600080fd5b506105cd600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119d9565b604051808215151515815260200191505060405180910390f35b3480156105f357600080fd5b5061064e600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611a9e565b6040518082815260200191505060405180910390f35b34801561067057600080fd5b506106cb600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ace565b60405180826000191660001916815260200191505060405180910390f35b3480156106f557600080fd5b50610750600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611adc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610790578082015181840152602081019050610775565b50505050905090810190601f1680156107bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107d757600080fd5b50610832600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611ba4565b604051808215151515815260200191505060405180910390f35b34801561085857600080fd5b506108b3600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611bde565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6060600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109cd5780601f106109a2576101008083540402835291602001916109cd565b820191906000526020600020905b8154815290600101906020018083116109b057829003601f168201915b50505050509050919050565b6109e1611f1e565b6109e9611f1e565b6109f1611f1e565b606080600060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615151415610e1a57610a5b88611c2e565b9550610a6687611c2e565b9450610aa66040805190810160405280600181526020017f7c00000000000000000000000000000000000000000000000000000000000000815250611c2e565b93506001610abd8588611c5c90919063ffffffff16565b01604051908082528060200260200182016040528015610af157816020015b6060815260200190600190039081610adc5790505b5092506001610b098587611c5c90919063ffffffff16565b01604051908082528060200260200182016040528015610b3d57816020015b6060815260200190600190039081610b285790505b509150600090505b82518160ff161015610e1957610b6c610b678588611cd390919063ffffffff16565b611ced565b838260ff16815181101515610b7d57fe5b90602001906020020181905250610ba5610ba08587611cd390919063ffffffff16565b611ced565b828260ff16815181101515610bb657fe5b906020019060200201819052503373ffffffffffffffffffffffffffffffffffffffff1660016000610c01868560ff16815181101515610bf257fe5b90602001906020020151611ace565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e0c57818160ff16815181101515610c6857fe5b9060200190602002015160016000610c99868560ff16815181101515610c8a57fe5b90602001906020020151611ace565b600019166000191681526020019081526020016000206000019080519060200190610cc5929190611f38565b507f34f30d8087071b359a8f29403fd1c699199154262d446148509be1cc83bc1e07838260ff16815181101515610cf857fe5b90602001906020020151838360ff16815181101515610d1357fe5b9060200190602002015142604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610d68578082015181840152602081019050610d4d565b50505050905090810190601f168015610d955780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610dce578082015181840152602081019050610db3565b50505050905090810190601f168015610dfb5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b8080600101915050610b45565b5b5050505050505050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615151415611048573373ffffffffffffffffffffffffffffffffffffffff1660016000610ea485611ace565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611047578060016000610f0885611ace565b600019166000191681526020019081526020016000206000019080519060200190610f34929190611f38565b507f34f30d8087071b359a8f29403fd1c699199154262d446148509be1cc83bc1e07828242604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610fa3578082015181840152602081019050610f88565b50505050905090810190601f168015610fd05780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015611009578082015181840152602081019050610fee565b50505050905090810190601f1680156110365780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b5b5050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151514156111e55733600160006110b685611ace565b6000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600681526020017f49737375656400000000000000000000000000000000000000000000000000008152506001600061115085611ace565b60001916600019168152602001908152602001600020600001908051906020019061117c929190611f38565b50426001600061118b85611ace565b60001916600019168152602001908152602001600020600201819055506001600260006111b785611ace565b6000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7fe31137df85b1e931194257d04697313f9a6e1b8bd67be97542762596bcc5770c828242604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015611253578082015181840152602081019050611238565b50505050905090810190601f1680156112805780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b838110156112b957808201518184015260208101905061129e565b50505050905090810190601f1680156112e65780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050565b611302611f1e565b61130a611f1e565b611312611f1e565b606080600060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16151514156117db5761137c88611c2e565b955061138787611c2e565b94506113c76040805190810160405280600181526020017f7c00000000000000000000000000000000000000000000000000000000000000815250611c2e565b935060016113de8588611c5c90919063ffffffff16565b0160405190808252806020026020018201604052801561141257816020015b60608152602001906001900390816113fd5790505b509250600161142a8587611c5c90919063ffffffff16565b0160405190808252806020026020018201604052801561145e57816020015b60608152602001906001900390816114495790505b509150600090505b82518160ff1610156117da5761148d6114888588611cd390919063ffffffff16565b611ced565b838260ff1681518110151561149e57fe5b906020019060200201819052506114c66114c18587611cd390919063ffffffff16565b611ced565b828260ff168151811015156114d757fe5b90602001906020020181905250336001600061150c868560ff168151811015156114fd57fe5b90602001906020020151611ace565b6000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600061158c858560ff1681518110151561157d57fe5b90602001906020020151611ace565b6000191660001916815260200190815260200160002060006101000a81548160ff02191690831515021790555042600160006115e1868560ff168151811015156115d257fe5b90602001906020020151611ace565b60001916600019168152602001908152602001600020600201819055506040805190810160405280600681526020017f49737375656400000000000000000000000000000000000000000000000000008152506001600061165b868560ff1681518110151561164c57fe5b90602001906020020151611ace565b600019166000191681526020019081526020016000206000019080519060200190611687929190611f38565b507fe31137df85b1e931194257d04697313f9a6e1b8bd67be97542762596bcc5770c838260ff168151811015156116ba57fe5b90602001906020020151838360ff168151811015156116d557fe5b9060200190602002015142604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561172a57808201518184015260208101905061170f565b50505050905090810190601f1680156117575780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015611790578082015181840152602081019050611775565b50505050905090810190601f1680156117bd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a18080600101915050611466565b5b5050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156118dc57604080519081016040528083815260200160011515815250600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190805190602001906118af929190611fb8565b5060208201518160010160006101000a81548160ff021916908315150217905550905050600190506118e1565b600090505b92915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156119d657806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611a94576000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060019050611a99565b600090505b919050565b600060016000611aad84611ace565b60001916600019168152602001908152602001600020600201549050919050565b600060208201519050919050565b606060016000611aeb84611ace565b600019166000191681526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b985780601f10611b6d57610100808354040283529160200191611b98565b820191906000526020600020905b815481529060010190602001808311611b7b57829003601f168201915b50505050509050919050565b600060026000611bb384611ace565b6000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600060016000611bed84611ace565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611c36611f1e565b600060208301905060408051908101604052808451815260200182815250915050919050565b6000808260000151611c808560000151866020015186600001518760200151611d4f565b0190505b836000015184602001510181111515611ccc5781806001019250508260000151611cc4856020015183038660000151038386600001518760200151611d4f565b019050611c84565b5092915050565b611cdb611f1e565b611ce6838383611e35565b5092915050565b606080600083600001516040519080825280601f01601f191660200182016040528015611d295781602001602082028038833980820191505090505b509150602082019050611d458185602001518660000151611ed3565b8192505050919050565b60008060008060008060008060008b97508c8b111515611e1f5760208b111515611dd95760018b60200360080260020a03196001029550858a511694508a8d8d010393508588511692505b84600019168360001916141515611dd1578388101515611dbe578c8c019850611e25565b8780600101985050858851169250611d9a565b879850611e25565b8a8a209150600096505b8a8d0387111515611e1e578a88209050806000191682600019161415611e0b57879850611e25565b6001880197508680600101975050611de3565b5b8c8c0198505b5050505050505050949350505050565b611e3d611f1e565b6000611e5b8560000151866020015186600001518760200151611d4f565b90508460200151836020018181525050846020015181038360000181815250508460000151856020015101811415611e9d576000856000018181525050611ec8565b8360000151836000015101856000018181510391508181525050836000015181018560200181815250505b829150509392505050565b60005b602082101515611efb5782518452602084019350602083019250602082039150611ed6565b6001826020036101000a0390508019835116818551168181178652505050505050565b604080519081016040528060008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f7957805160ff1916838001178555611fa7565b82800160010185558215611fa7579182015b82811115611fa6578251825591602001919060010190611f8b565b5b509050611fb49190612038565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ff957805160ff1916838001178555612027565b82800160010185558215612027579182015b8281111561202657825182559160200191906001019061200b565b5b5090506120349190612038565b5090565b61205a91905b8082111561205657600081600090555060010161203e565b5090565b905600a165627a7a72305820aeec8a177e91036d13a98b1527a43649013772337d6022cb8afcda77eba02dae0029";

var simpleContract = web3.eth.contract(abi);
var simple = simpleContract.new(42, {from:web3.eth.accounts[0], data: bytecode, gas: 0x47b760}, function(e, contract) {
	if (e) {
		console.log("err creating contract", e);
	} else {
		if (!contract.address) {
			console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
                        sleepFor(2000);
                        console.log("Contract mined! Address: " + contract.address);
                        console.log(contract);
 
		} else {
			console.log("Contract mined! Address: " + contract.address);
			console.log(contract);
		}
	}
});

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}



