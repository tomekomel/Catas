function createPhoneNumber(arr){
  const phoneNumber = arr.join('');
  return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`;
}

module.exports = createPhoneNumber;
