module.exports = function getZerosCount(number, base) {
let  zerosCount, zerosCountArr, result;
  let notation = base;
  let prime = {};
  let zerosCountArr = [];

 	 for (let i = 2; i <= notation; i++) {
  		while (notation % i === 0) {
  			if (prime[i]) {
  				prime[i] = prime[i] + 1;
  			} else {
  				prime[i] = 1;
  			}
  			notation = notation/i;
  		}
    }
    
	function zerosByPrime(number, prime, count) {
		zerosCount = 0;
		while(number>0){
			number = Math.floor(number/prime);
			zerosCount+=number;
		}
	 	return Math.floor(zerosCount/count);	
	}
	
		for(let key in prime){
			zerosCountArr.push(zerosByPrime(number, +key, prime[key]));
		}
	result = Math.min.apply(null, zerosCountArr);
	
	return result;
}
