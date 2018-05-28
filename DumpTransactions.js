var Web3 = require('web3');
var keccak = require('keccak');
var randomString = require('random-string');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));

var ChequesContract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankName","outputs":[{"name":"bankName","type":"string"}],"payable":false,"sta
teMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"statuses","type":"string"}],"name":"updateStatusBulk","outputs":[],"payable":false,"sta
teMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"_newStatus","type":"string"}],"name":"updateStatus","outputs":[],"payable":false,"stateMu
tability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"},{"name":"_micr_hash","type":"string"}],"name":"register","outputs":[],"payable":false,"stateMutabilit
y":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hashes","type":"string"},{"name":"micr_hashes","type":"string"}],"name":"registerBulk","outputs":[],"payable":false,"stateMutability
":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"},{"name":"bankName","type":"string"}],"name":"addBank","outputs":[{"name":"result","type":"bool"}],"pay
able":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_bankAddress","type":"address"}],"name":"getBankAccess","outputs":[{"name":"access","type":"bool"}],"paya
ble":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayab
le","type":"function"},{"constant":false,"inputs":[{"name":"bankAddress","type":"address"}],"name":"removeBank","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"nonpayable","
type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getTimeOfRegistration","outputs":[{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","
type":"function"},{"constant":false,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","typ
e":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validate","outputs":[{"name":"status","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function
"},{"constant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"validateMICR","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"const
ant":false,"inputs":[{"name":"_hash","type":"string"}],"name":"getBankOfCheque","outputs":[{"name":"bankAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inpu
ts":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_hash","type":"string"},{"indexed":false,"name":"_micr_hash","type":"strin
g"},{"indexed":false,"name":"time","type":"uint256"}],"name":"chequeRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_new
Status","type":"string"},{"indexed":false,"name":"_time","type":"uint256"}],"name":"chequeStatusUpdated","type":"event"}]);

ChequesContract.options.address='0x1932c48b2bf8102ba33b4a6b545c32236e342f34';

(function sendTransactions(ChequesContract, loopCount) {
	setTimeout(function() {
		registerBulk(ChequesContract)
		if(--loopCount) {
			sendTransactions(ChequesContract,loopCount)
		}
	}, 1000);
})(ChequesContract, 1000);

//registerBulk(ChequesContract);

function registerBulk(ChequesContract) {
	var qrHashList = "";
	var nonQrHashList = "";

 	var i = 0;
 	for(i=0;i<100;i++) {
       	 let randomNumber = randomString({length: 20});
       	 let randomAccount = randomString({length: 10, numeric: true, letters: false})
       	 let randomCheque = randomString({length: 15, numeric: true, letters: false})
       	 let qrString = randomNumber + randomAccount + randomCheque
       	 var qrHash = keccak('keccak256').update(qrString).digest('hex')

       	 var nonQrString = randomAccount + randomCheque
         var nonQrHash = keccak('keccak256').update(nonQrString).digest('hex')

         qrHashList = qrHashList + qrHash + "|"
         nonQrHashList = nonQrHashList + nonQrHash + "|"
 	}

	qrHashList = qrHashList.substring(0,qrHashList.length-1);
	nonQrHashList = nonQrHashList.substring(0,nonQrHashList.length-1)

	ChequesContract.methods.registerBulk(qrHashList,nonQrHashList).send({from: '0xed9d02e382b34818e88b88a309c7fe71e65f419d',gas: 1000000}).on('transactionHash', function(hash) {
	  console.log('Transaction Hash:'+hash)
	 });
}