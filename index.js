function scuberGreetingForFeet(parameter){
  let result
  if ( parameter < 400 ) {
    result = 'This one is on me!'
  } else if ( parameter < 2500 && 1999 < parameter) {
    result = 'I will gladly take your thirty bucks.'
  } else  { 
    result = 'No can do.'
  };
return result

}
function ternaryCheckCity(city){ 
  city === 'NYC'
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case 'generous': 
      return 'Thank you so much.'
  break;
    case 'not as generous': 
      return'Thank you.'
  break;
    default : 
      return'Bye.'
 
  }
}
