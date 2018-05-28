pragma solidity ^ 0.4.11;

import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract ChequeChain {
    using strings for *;
    
    address admin;
    
    struct Cheque
    {
        string status;
        address bankAddress;
        uint256 registrationTime;
    }
    
    mapping (bytes32 => Cheque) cheques;
    mapping (bytes32 => bool) cheques_micr;
    
    event chequeRegistered(string _hash, string _micr_hash, uint256 time);
    event chequeStatusUpdated(string _proof, string _newStatus, uint256 _time);

    struct Bank
    {
        string bankName;
        bool access;
    }
    
    mapping (address => Bank) banks;

    function ChequeChain(){
        admin = msg.sender;
    }
    
    function changeAdmin(address newAdmin){
        if(msg.sender == admin)
        {
            admin = newAdmin;
        }
    }
    
    function addBank(address bankAddress, string bankName) returns (bool result)
    {
	if(msg.sender == admin)
        {
        banks[bankAddress] = Bank(bankName, true);
        return true;
		}
		return false;
    }
    
    function removeBank(address bankAddress) returns (bool result)
    {
	if(msg.sender == admin)
        {
        banks[bankAddress].access = false;
        return true;
		}
		return false;
    }
    
    function stringToBytes32(string memory source) returns (bytes32 result) {
        assembly {
            result := mload(add(source, 32))
        }
    }
    
    function register(string _hash, string _micr_hash) {
        if(banks[msg.sender].access == true)
        {
            cheques[stringToBytes32(_hash)].bankAddress = msg.sender;
            cheques[stringToBytes32(_hash)].status = "Issued";
            cheques[stringToBytes32(_hash)].registrationTime = now;
            cheques_micr[stringToBytes32(_hash)] = true;
        }
        
        chequeRegistered(_hash, _micr_hash, now);
    }
    
    function registerBulk(string hashes, string micr_hashes){
        if(banks[msg.sender].access == true)
        {
            var _hashes = hashes.toSlice();
            var _micr_hashes = micr_hashes.toSlice();
            var delim = "|".toSlice();
            
            var _hashes_splitted = new string[](_hashes.count(delim) + 1);
            var _micr_hashes_splitted = new string[](_micr_hashes.count(delim) + 1);
            
            for(var count = 0; count < _hashes_splitted.length; count++)
            {
                _hashes_splitted[count] = _hashes.split(delim).toString();
                _micr_hashes_splitted[count] = _micr_hashes.split(delim).toString();
                
                cheques[stringToBytes32(_hashes_splitted[count])].bankAddress = msg.sender;
                cheques_micr[stringToBytes32(_micr_hashes_splitted[count])] = true;
                cheques[stringToBytes32(_hashes_splitted[count])].registrationTime = now;
                cheques[stringToBytes32(_hashes_splitted[count])].status = "Issued";
                
                chequeRegistered(_hashes_splitted[count], _micr_hashes_splitted[count], now);
            }
        }
    }
    
    function updateStatusBulk(string hashes, string statuses) {
        if(banks[msg.sender].access == true)
        {
            var _hashes = hashes.toSlice();
            var _statuses = statuses.toSlice();
            var delim = "|".toSlice();
            
            var _hashes_splitted = new string[](_hashes.count(delim) + 1);
            var _statuses_splitted = new string[](_statuses.count(delim) + 1);
            
            for(var count = 0; count < _hashes_splitted.length; count++)
            {
                _hashes_splitted[count] = _hashes.split(delim).toString();
                _statuses_splitted[count] = _statuses.split(delim).toString();
                
                if(cheques[stringToBytes32(_hashes_splitted[count])].bankAddress == msg.sender)
                {
                    cheques[stringToBytes32(_hashes_splitted[count])].status = _statuses_splitted[count]; 
                    chequeStatusUpdated(_hashes_splitted[count],  _statuses_splitted[count],  now);
                }
                
            }
        }
    }

    function updateStatus(string hash, string _newStatus) {
        if(banks[msg.sender].access == true)
        {
            if(cheques[stringToBytes32(hash)].bankAddress == msg.sender)
            {
                cheques[stringToBytes32(hash)].status = _newStatus;
                chequeStatusUpdated(hash, _newStatus, now);
            }
        }
    }
    
    function validate(string _hash) returns (string status) {
        return cheques[stringToBytes32(_hash)].status;
    }
    
    function validateMICR(string _hash) returns (bool status){
         return cheques_micr[stringToBytes32(_hash)];
    }
    
    function getTimeOfRegistration(string _hash) returns (uint256 time){
        return cheques[stringToBytes32(_hash)].registrationTime;
    }
    
    function getBankOfCheque (string _hash) returns (address bankAddress) {
        return cheques[stringToBytes32(_hash)].bankAddress;
    }
    
    function getBankName(address _bankAddress) returns (string bankName)
    {
        return banks[_bankAddress].bankName;
    }
    
    function getBankAccess(address _bankAddress) returns (bool access)
    {
        return banks[_bankAddress].access;
    }
}
