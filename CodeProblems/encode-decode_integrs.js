// This function needs to accept a signed integer in the 14-bit range [-8192..+8191] and return a 4 character
function encodeTheInteger(num){
  var minInteger = -8191; // Min integer
  var maxInteger = 8191;  // Max integer

  var encodeInteger; //Final integer for encoding into 16-bit integer

// Check If inserted amount greater than -8191 and less than 8191
  if(num > minInteger && num < maxInteger){

    // Add 8192 to the raw value, so its range is translated to [0..16383]
    encodeInteger = num + 8192;

    return encodeInteger.toString(16);

  }else{
    console.log('not valid number')
  }
}
encodeTheInteger(6111);


// Decode the gaven String
function decodeTheInteger(hexnum){
  var decode = parseInt(hexnum, 16);
  console.log(decode)
  return decode;
}
decodeTheInteger("ffff")