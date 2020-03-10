module.exports = function check(str, bracketsConfig) {
  var pairToCloseBracket = Object.assign(...bracketsConfig.map(([open, close]) => ({[close]: open})));
return str.split('').reduce(function(singleBrackets, bracket){
  var len = singleBrackets.length;
      if (len > 0 && singleBrackets[len-1] === pairToCloseBracket[bracket])
        singleBrackets.pop(); 
      else 
        singleBrackets.push(bracket); 
      return singleBrackets;
    }, []).length == 0;
}
