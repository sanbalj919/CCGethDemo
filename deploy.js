var browser_untitled_sol_chequechainContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankName","outputs":[{"name":"bankName","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"statuses","type":"string"}],"name":"updateStatusBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"_newStatus","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"},{"name":"_micr_hash","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"micr_hashes","type":"string"}],"name":"registerBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"bankName","type":"string"}],"name":"addBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankAccess","outputs":[{"name":"access","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"}],"name":"removeBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getTimeOfRegistration","outputs":[{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validate","outputs":[{"name":"status","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validateMICR","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getBankOfCheque","outputs":[{"name":"bankAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_hash","type":"string"},{"indexed":false,"name":"_micr_hash","type":"string"},{"indexed":false,"name":"time","type":"uint256"}],"name":"chequeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_newStatus","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"chequeStatusUpdated","type":"event"}]);
var browser_untitled_sol_chequechain = browser_untitled_sol_chequechainContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611f918061005e6000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301da7b31146100d557806327014a6014610187578063347047cc146102275780633ffbd47f146102c75780638503f61e146103675780638c438908146104075780638e66829c1461049b5780638f283970146104ec5780639649650c14610525578063a3d7e5cb14610576578063cfb51928146105e7578063d182b83b14610660578063fb52790714610736578063fd28a6e6146107ab575b600080fd5b34156100e057600080fd5b61010c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610848565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014c578082015181840152602081019050610131565b50505050905090810190601f1680156101795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019257600080fd5b610225600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610932565b005b341561023257600080fd5b6102c5600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610daa565b005b34156102d257600080fd5b610365600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fd2565b005b341561037257600080fd5b610405600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611280565b005b341561041257600080fd5b610481600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611798565b604051808215151515815260200191505060405180910390f35b34156104a657600080fd5b6104d2600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061183b565b604051808215151515815260200191505060405180910390f35b34156104f757600080fd5b610523600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611894565b005b341561053057600080fd5b61055c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061192d565b604051808215151515815260200191505060405180910390f35b341561058157600080fd5b6105d1600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611992565b6040518082815260200191505060405180910390f35b34156105f257600080fd5b610642600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506119c2565b60405180826000191660001916815260200191505060405180910390f35b341561066b57600080fd5b6106bb600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506119d0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106fb5780820151818401526020810190506106e0565b50505050905090810190601f1680156107285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561074157600080fd5b610791600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a9e565b604051808215151515815260200191505060405180910390f35b34156107b657600080fd5b610806600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611ad8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610850611dea565b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109265780601f106108fb57610100808354040283529160200191610926565b820191906000526020600020905b81548152906001019060200180831161090957829003601f168201915b50505050509050919050565b61093a611dfe565b610942611dfe565b61094a611dfe565b610952611e18565b61095a611e18565b600060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615151415610da0576109c188611b28565b95506109cc87611b28565b9450610a0c6040805190810160405280600181526020017f7c00000000000000000000000000000000000000000000000000000000000000815250611b28565b93506001610a238588611b5690919063ffffffff16565b01604051805910610a315750595b908082528060200260200182016040528015610a6757816020015b610a54611e2c565b815260200190600190039081610a4c5790505b5092506001610a7f8587611b5690919063ffffffff16565b01604051805910610a8d5750595b908082528060200260200182016040528015610ac357816020015b610ab0611e2c565b815260200190600190039081610aa85790505b509150600090505b82518160ff161015610d9f57610af2610aed8588611bcd90919063ffffffff16565b611be7565b838260ff16815181101515610b0357fe5b90602001906020020181905250610b2b610b268587611bcd90919063ffffffff16565b611be7565b828260ff16815181101515610b3c57fe5b906020019060200201819052503373ffffffffffffffffffffffffffffffffffffffff1660016000610b87868560ff16815181101515610b7857fe5b906020019060200201516119c2565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610d9257818160ff16815181101515610bee57fe5b9060200190602002015160016000610c1f868560ff16815181101515610c1057fe5b906020019060200201516119c2565b600019166000191681526020019081526020016000206000019080519060200190610c4b929190611e40565b507f34f30d8087071b359a8f29403fd1c699199154262d446148509be1cc83bc1e07838260ff16815181101515610c7e57fe5b90602001906020020151838360ff16815181101515610c9957fe5b9060200190602002015142604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610cee578082015181840152602081019050610cd3565b50505050905090810190601f168015610d1b5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610d54578082015181840152602081019050610d39565b50505050905090810190601f168015610d815780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b8080600101915050610acb565b5b5050505050505050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615151415610fce573373ffffffffffffffffffffffffffffffffffffffff1660016000610e2a856119c2565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610fcd578060016000610e8e856119c2565b600019166000191681526020019081526020016000206000019080519060200190610eba929190611e40565b507f34f30d8087071b359a8f29403fd1c699199154262d446148509be1cc83bc1e07828242604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b83811015610f29578082015181840152602081019050610f0e565b50505050905090810190601f168015610f565780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610f8f578082015181840152602081019050610f74565b50505050905090810190601f168015610fbc5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b5b5050565b60011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161515141561116b57336001600061103c856119c2565b6000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040805190810160405280600681526020017f4973737565640000000000000000000000000000000000000000000000000000815250600160006110d6856119c2565b600019166000191681526020019081526020016000206000019080519060200190611102929190611e40565b504260016000611111856119c2565b600019166000191681526020019081526020016000206002018190555060016002600061113d856119c2565b6000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055505b7fe31137df85b1e931194257d04697313f9a6e1b8bd67be97542762596bcc5770c828242604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156111d95780820151818401526020810190506111be565b50505050905090810190601f1680156112065780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561123f578082015181840152602081019050611224565b50505050905090810190601f16801561126c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050565b611288611dfe565b611290611dfe565b611298611dfe565b6112a0611e18565b6112a8611e18565b600060011515600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161515141561178e5761130f88611b28565b955061131a87611b28565b945061135a6040805190810160405280600181526020017f7c00000000000000000000000000000000000000000000000000000000000000815250611b28565b935060016113718588611b5690919063ffffffff16565b0160405180591061137f5750595b9080825280602002602001820160405280156113b557816020015b6113a2611e2c565b81526020019060019003908161139a5790505b50925060016113cd8587611b5690919063ffffffff16565b016040518059106113db5750595b90808252806020026020018201604052801561141157816020015b6113fe611e2c565b8152602001906001900390816113f65790505b509150600090505b82518160ff16101561178d5761144061143b8588611bcd90919063ffffffff16565b611be7565b838260ff1681518110151561145157fe5b906020019060200201819052506114796114748587611bcd90919063ffffffff16565b611be7565b828260ff1681518110151561148a57fe5b9060200190602002018190525033600160006114bf868560ff168151811015156114b057fe5b906020019060200201516119c2565b6000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002600061153f858560ff1681518110151561153057fe5b906020019060200201516119c2565b6000191660001916815260200190815260200160002060006101000a81548160ff0219169083151502179055504260016000611594868560ff1681518110151561158557fe5b906020019060200201516119c2565b60001916600019168152602001908152602001600020600201819055506040805190810160405280600681526020017f49737375656400000000000000000000000000000000000000000000000000008152506001600061160e868560ff168151811015156115ff57fe5b906020019060200201516119c2565b60001916600019168152602001908152602001600020600001908051906020019061163a929190611e40565b507fe31137df85b1e931194257d04697313f9a6e1b8bd67be97542762596bcc5770c838260ff1681518110151561166d57fe5b90602001906020020151838360ff1681518110151561168857fe5b9060200190602002015142604051808060200180602001848152602001838103835286818151815260200191508051906020019080838360005b838110156116dd5780820151818401526020810190506116c2565b50505050905090810190601f16801561170a5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015611743578082015181840152602081019050611728565b50505050905090810190601f1680156117705780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a18080600101915050611419565b5b5050505050505050565b6000604080519081016040528083815260200160011515815250600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908051906020019061180d929190611ec0565b5060208201518160010160006101000a81548160ff0219169083151502179055509050506001905092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561192a57806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b600080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060019050919050565b6000600160006119a1846119c2565b60001916600019168152602001908152602001600020600201549050919050565b600060208201519050919050565b6119d8611dea565b600160006119e5846119c2565b600019166000191681526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a925780601f10611a6757610100808354040283529160200191611a92565b820191906000526020600020905b815481529060010190602001808311611a7557829003601f168201915b50505050509050919050565b600060026000611aad846119c2565b6000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600060016000611ae7846119c2565b6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611b30611dfe565b600060208301905060408051908101604052808451815260200182815250915050919050565b6000808260000151611b7a8560000151866020015186600001518760200151611c45565b0190505b836000015184602001510181111515611bc65781806001019250508260000151611bbe856020015183038660000151038386600001518760200151611c45565b019050611b7e565b5092915050565b611bd5611dfe565b611be0838383611d01565b5092915050565b611bef611dea565b611bf7611dea565b60008360000151604051805910611c0b5750595b9080825280601f01601f19166020018201604052509150602082019050611c3b8185602001518660000151611d9f565b8192505050919050565b60008060008060008887111515611cef57602087111515611ca65760018760200360080260020a031980875116888b038a018a96505b818388511614611c9b57600187019650806001880310611c7b578b8b0196505b505050839450611cf5565b8686209150879350600092505b86890383111515611cee578684209050806000191682600019161415611cdb57839450611cf5565b6001840193508280600101935050611cb3565b5b88880194505b50505050949350505050565b611d09611dfe565b6000611d278560000151866020015186600001518760200151611c45565b90508460200151836020018181525050846020015181038360000181815250508460000151856020015101811415611d69576000856000018181525050611d94565b8360000151836000015101856000018181510391508181525050836000015181018560200181815250505b829150509392505050565b60005b602082101515611dc75782518452602084019350602083019250602082039150611da2565b6001826020036101000a0390508019835116818551168181178652505050505050565b602060405190810160405280600081525090565b604080519081016040528060008152602001600081525090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e8157805160ff1916838001178555611eaf565b82800160010185558215611eaf579182015b82811115611eae578251825591602001919060010190611e93565b5b509050611ebc9190611f40565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f0157805160ff1916838001178555611f2f565b82800160010185558215611f2f579182015b82811115611f2e578251825591602001919060010190611f13565b5b509050611f3c9190611f40565b5090565b611f6291905b80821115611f5e576000816000905550600101611f46565b5090565b905600a165627a7a72305820431060d48951fd9c0090f8dfd242fd5f09b03ad78fb01f06a0453a2e0d6ab1450029', 
     gas: '470000000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })


var chequechainContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankName","outputs":[{"name":"bankName","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"statuses","type":"string"}],"name":"updateStatusBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"_newStatus","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"},{"name":"_micr_hash","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"micr_hashes","type":"string"}],"name":"registerBulk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"bankName","type":"string"}],"name":"addBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankAccess","outputs":[{"name":"access","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"}],"name":"removeBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getTimeOfRegistration","outputs":[{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validate","outputs":[{"name":"status","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validateMICR","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getBankOfCheque","outputs":[{"name":"bankAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_hash","type":"string"},{"indexed":false,"name":"_micr_hash","type":"string"},{"indexed":false,"name":"time","type":"uint256"}],"name":"chequeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_newStatus","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"chequeStatusUpdated","type":"event"}]);
var instance = chequechainContract.at("0x0dfea0bbe5bb4c0ce82d688a2643eaf2b4ea3678");
instance.validate.call("7542ffb9606ed4ce0aa95a84b82caf01e50c2a5e09d02cf1faae740a1d0ba552", function(e, r){
	console.log(e, r);
})

var events = instance.allEvents({fromBlock: 126292, toBlock: 126292});
events.get(function(error, logs){
	console.log(JSON.stringify(logs));
});

instance .registerBulk.sendTransaction("7542ffb9606ed4ce0aa95a84b82caf01e50c2a5e09d02cf1faae740a1d0ba552|7b717fc81dff7965579cc4f770c31004577130fa8e3dd6ad931d34e313bdb6c1|266b3ae0e54140510d4a96a3437e404c105958cd3377c2312d0dda864d1e56e7|92a3e17178008554f259c0e63c7bd7e514753d346afccd443c2d4beab06a15e2|f670ef4a6730c93121b2ef6f1778efdbeb3e46f1507a2d20540df1cb62b02396|8578ff58e589ce7b3774056600ac7705883758ad172d080df07fb7e177357f59|d5bbdc5d49f9c2e188a2bc830dec70d6685892de6d8d13a788160335cc71c484|92cb4029a03166b690e48c2543e0acc1e87200f1735938c9fed9386783d47970|ad81b0e7841928f3238316c52b2f3b138f2a3a59f275548d486c6c2e81386ec3|bf410fb70c7e18f2cf42e3fca8d3bc6624a9be06f50f9c35523b530f6b4af912|eb3a5782d5f3c05c1bb5f32778a4e955b9c9983ffcd0ec341f5fbed229aebad2|c9443dc194b20ced30fb4642aa077c78ae43a44528dab9440494dfc653123e3c|16cce8f8ba9c33a042f348b8d548f71d2d82685ccb20287cb85fd2022c68f28d|ba56c710697ccc440cbd733c934a16b2387fe7389fac4a164810b7758bfa01bd|e1159939d935606cc441ab1c86f91826257e6bf09916b41342d62d4dd3ea350e|e328f8395cd73fbdc8fa48ecffee72553c18492f8ffaeda325fc2df57e0caf41|cd9bde286454493de91c2eb1da93d89bb8a9c9cdcf9f24a521ae1a4dcd4f8c27|d7d9ec610d906e84004bcdd5b830da5a79859bea79fb44192a14c4f37e55ba7a|5c62ca560a2cac7e07a38e1662de404f39f3c6c79d1ca798547b7c1c0a0825c1|91e9246482f89c4d0130f3a03080de7287539e7921c1473c2fed0ee4886c221f|d473f180359aed1e757a4fad8f9b184746261474b79f7427a63943553336ed19|6d6b6842707e85fd09db05ec9fe7aea3e77152b48837b65990d063b7dfc968d3|21090893ebf19151b0810b19f296807d8d5c91719847cd40a26be484e589351c|84eca01e2b8bad3a4fe915e32498fae84b302acd1e543dba05004e3a20fd9ffd|5131d3a1f4294f3072e3e8e882a18bb8dd8f682f18c550439b3f6301b8ed981d|858866085dd9e6f55600cec334f0b82138c472d985c20cb8a0de1376b40600db|79e3e723a5e3b3f02b4bbb121fa1edaa8c720b534e952dcbbaf3b4c3663a43ab|e145ce667ae876c53348bbe021f32011337aa09bc1c8a40623d21ae52c95bfd7|e5d7ed790c328e8ab8dc75033a928c8c48ca62ee5d086ffac52ed5fc6faf747b|27b877cb8cc2d0c29fdc89969fe44cf7314caa6e43877504f9395fe7e3ad749c|a900b5f3c4555d55dfa7e725dd2da6a624a12f2b1cf9e1221166abad49df5e0f|d4744b7bef14b3389574e8dff7045238aa4d13859833ec656adcc55603c43979|eb86abb0bc29b3e744b96a477f5292348744fa250fe679b186413f9dd57cb14c|79431017be26a5ac64890c762eb3c4ff29e4812cb65f18b3c14c382e6197f4e2|0e6360915ed8d9a07f4d2ccf8ba41214a918bd53ec63c0f39b59e0eea054c83f|0ea8ec14381d6bab53d60816b14db2d10e71e1c36490a3ba2532654392ad876b|b437fbe048d0d8ebe85e95bf50c24897d7073d379a2e3711c121e860f662b539|4716def7bdc45b7086ee65b763074aa07f5586cca2102a303cd2fad058d990cb|f0ca1e24873bc6223578bffd1a9c6f08a4ee0732577ef3242cf370c3751e1b6d|1d33f60834be77564e4590858d6c460661f07bc3b6bb2382de603d61cf4284ce|1278fc8b7c719f4c5939f205763aeb1278cb9d67b14ab4ccb10d8e09f7388313|ed1d61d2b3377f7ca4b5a89d3d126522580f8cab726c4580d3393c131ddcc7a3|00a82015ace49dcfd12a5209cf567b718c78e07013061f8abbf02fab048562cb|0bdd4d00a4dad633bf2daa73df8288f9875db26bfef1269a24f598538bb1cbae|64a7e3a02e06ddfbe6ea4d909a76898a03f49bf6b9f3008b10aa0e0313245af8|1e6c5743293f0e6aaf3e310326357f32a019db9e7a807827c812e5404ec319b2|b804fe94b3f22eb108d3cee76ca929ab242dabc83f259ed33a22ff8924928d62|71e0a38bbf33db0fdaebdbaa0c06f76957aea000aa722c2b8df09565c86a27be|be45acb5528fab721eb44d3fcd1588bd75740ca88031c688a4163ef5723048ba|44a0bc68069e7981fb551eaa77e0b8e0e3abbef0a365a9c2e3349c2556cf3572|6ff9e01fcf12059b00a0d03add65a2915e436448b99ac63a2f221cf0cdae53e4|8b240ff170dac8155f8ece92ffebe5c6fbc5dc0fa8ec1d4cdfab6af09717ecb6|ba5f2a1405b4a2c3d0d61393f376c55a6486bbb98d860cc1a33b35332b7b992b|d8c4c5287ac714ae9e20efd1983b380cde56d2c3057da94de26a558e838472f2|2e655261bfa15850202978eb0e32d38a7fdd7cccf3f94b58eed65ad5883d5fb4|48f54d4a5ab54aacbf95889a7664f131d286a78025f5b5796457186c9395bc6b|437fa8e71b2af4aa5e7acf362f55d8bd570e8af855d7f8f494d9c976482089e8|7b257b532e320a9d7fb075e3960b30367c0b4ba253798fe968fdc7aab3b937f0|e2b1b0fa8af96d9854fd343f94859f2c7a304c0795f9a4cec5b1c9303d0af257|8578d3f2afb0bc9979b384328f4a63fa20ca103a21b87985b32dce9b19305b1d|d4c6c075818ea82f244a26ead2bba210924f1e2c69621d3bd8ad858a7f68ee05|4d4e12d2aded1e34b4b8d4d3a6cf8f5a76f1b0981e72d81dd65584f9b620d006|e92afea2ba016ebd0c29cc9770e580a809fae9f9fc768a36def41f20fd125463|1383ef055bf9474c0f28360afb70fc9138ae0fb927e2e0fcdcd914d55494cd23|9c6c09f813cdb38f874b59570bea1c983ae72f279e373ac7a272e2463c6ae98c|9a88178e2bb61b63b0f410e3b54b06dda835b7343d3958a362dc9b6d6319cb0b|3096d54861f50b09dcb0436aa0c357fa79c3b916b6c62fdc645f96ba94b42ede|aef713fe582712d1a423fa60c42a8b162b6e5c58dcc7124125148d57d2eb6467|b64a541b55b577c48c53a87f3fab2bc2f9aecdc0c1e9279a48584a3dc30325c9|3ce5090bfd5d8a4286ae39091faf019309ca0cbec3dda65a4ad9a325ca83c0a4|15ac2c708a99585d31f13f070c0af1cb057ed177eda8bbeaba7131ddc6fcf1b3|29659f23cac4ff0a274d8e1249f891ea18dc6d64b753541997f59dac391f4c68|4fc7c9c548d6b2c84f7ea8e77d9ca641d2f6ee01f02ba9acc601770d98fc5c38|fe543785582cf5dcd1753dcee27bae51943701c3b27758322efdc9d05412aa2b|fb16cd0f4653fd83288ef6feb94a65c3f4d8159952b61d3dd31ca419b73c8140|d3bb3450f98ba7a3d05d48c2e7e3a5e332b1d8a3025c68aa0d00996cab5f344f|211ba428b957e7caa729f28ec7af8b5035efeba59d62fe3b8159387199461ca5|b287a6537ee89b513da03f35ffff94d04c6d4577c6e0523943a0d957caee752b|4fb7ea903de0a70aad6842e18ef86d295e46c4949477347a483cdf516c77f65a|0e287a8401f87d2028eed863b7a16e864d2e595eb3aa2a74caf4a58cbc7b206c|c92180837e045cde13876817edb40eaa0f1a1cf5d798279b147c563c34eeaf0c|ec777f44cab60307d493d88180ec49f49d9f25dd559331ae1a2b4d18270e23f3|b9b885a48113e011a0ee49744caf5fba732a82518edeeac1020a84cebe58f605|a632f56c0a24e4b9ec9a23d530a5c725a6c0da1b897d4285a1a4f9a2e4117fb4|646efaf48a12e1e5c4a3d176b375c9745a9c44e477ff45f65e240c56e7031868|ab9bc298fec66cf634a837291d711d53b6e3f7845f650adad2102f47e7b8a7fe|2476ca9934d40fa8408172c2437f3f68df0302d93f67267785650c20d8f2b622|00cd48614fe210d309638f3d26dd0e7e51aafec380bb335b5ce0b7829595b9ba|83deb234cfa808ce177be55181b4d9e2e51e903045cfcc09801b073434553049|09e45affe1b7f806974ffa16bb419f500de6b10038cb491a8d6a762dcee22bf3|bc210855739c9528c6998c28b3dd37f34ba882c1a96cfe710a09ba0ef89857a3|5d1db5be71fa4d40db39fc270298c1f1e75f4731ccc0e11b80b4ca392e52e619|369d26d1c011cff605dc84254346be7cc9b0d79acc103d85f312bd442a928dca|525630626bfd38212fb5305f8ced3ed57c23eedb103914bf7317d9da79b487ba|d340a0e6f7564579f1c93c0628d0e6dbfae1158a5564649db99d68e8e2966f38|77ac66aedc7380ce436f1b325180518a775c24744e4eef1b60f72ba02e3e1496|68a7e63df2a8e16a4baf92eb2ae1b5cb6185307bb2a3071fe1440f3c8c6c14f2|dc839d9269fcf065c782734de370c7ee9f8450cc871452bf5b0ec707e7bfd2f1|61672cbf4e8be874416c35f3d98f5226a07a4f39c712093a093f822e3c774807|ee7697b6eac93557194c914fc9e16beeb7df8e47670b6e2bc75bf3e3bfff2b06|df05cf6aa249c0544e5462f648aef1994f2d74dd73df421657e69d62a1c1fbfb", "1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e|1d4f85a4b3e186c6d945f5cdc9a187ec25a49ab80cc5325ee9af79ac31e5656e", {
					        	from: web3.eth.accounts[0],
					            gas: '100000000'
					        }, function(e, r){
							console.log(e, r);
						})
