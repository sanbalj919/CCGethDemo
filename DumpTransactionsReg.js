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

ChequesContract.methods.register('c0ac47ee17ac3d84873eb22b2e7dc78f9b5321baff458ad0b9bf3265e1907da3','d7cae446a3c38f8e57e59f08e55bfc2cbe426486be4183a42b8414eb2b77b76e').send({from: '0xed9d02e382b34818e88b8
8a309c7fe71e65f419d'}).on('transactionHash', function(hash) {
 console.log('Transaction Hash:'+hash)
})