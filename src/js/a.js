const callsomeone = (someone) => {
   return someone + '做事情' 
}

document.getElementById('person').innerHTML = callsomeone('是館長');


console.log(callsomeone('小明'))