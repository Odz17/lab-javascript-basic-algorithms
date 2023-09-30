console.log ( 'i am ready');
let hacker1 = 'Jose';


console.log (`The drivers name is ${hacker1}`);

let hacker2 = 'Maksim';


console.log (`the navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log ('The driver1 has the longest name, it has `hacker1.lenght`} characters');
    
}
else if (hacker2.length > hacker1.length) {
    console.log ('the navigator has the longest name, it has `hacker2.length`} characters');

    }
    else  {
        console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }


// Iteration 3: Loops

let name1 = hacker1;
console.log (hacker1.toUpperCase()+ '');

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i]);
  }

  let str = "Jose";
  let reversed = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  console.log(reversed);

  if (hacker1.localeCompare(hacker2) === 0) {
    console.log ('What?! You both have the same name?');

  }  else if (hacker1.localeCompare(hacker2) < 0) {
    console.log ('The drivers name goes first.');
  }  if (hacker1.localeCompare(hacker2) > 0) {
    console.log ('Yo, the navigator goes first, definitely.');
  }

  

