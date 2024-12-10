let diff = 1;
let correctGuess = 0;
let n1;
let n2;
let op;
let negIsTrue;
let QR = false;
let isAnswered;
let currentQ;

document.getElementById('randomize').onclick = function() {
  rand();
}

function rand() {
  QR = true;
  isAnswered = false;
  op = Math.floor(Math.random() * 2);
  let neg = Math.floor(Math.random() * 2);
  negIsTrue = neg == 0 ? true : false;

  currentQ = diff;

  if (diff == 2 && op == 1) {
    do {
      n1 = Math.round(Math.random() * 100) + 1;
      n2 = Math.round(Math.random() * 10) + 1;
    } while ((n1 / n2) % 2 != 0);
    //console.log('hi')
  }
  else if (diff == 2 && op == 0) {
    if (negIsTrue) {
      n1 = Math.round(Math.random() * 20) * -1;
      n2 = Math.round(Math.random() * 10) * -1;
    }
    else {
      n1 = Math.round(Math.random() * 20);
      n2 = Math.round(Math.random() * 10);
    }
  }
  else if (diff == 3) {
    n1 = Math.round(Math.random() * 5);
    n2 = Math.round(Math.random() * 5);
  }
  else {
    //do{
    n1 = Math.round(Math.random() * 100);
    n2 = Math.round(Math.random() * 100);
    //}while(n1<n2);
  }

  //console.log(op)

  switch (diff) {
    case 1:
      document.getElementById('Q').innerHTML = op == 0 ? `${n1} + ${n2}` : `${n1} - ${n2}`;

      break;
    case 2:
      document.getElementById('Q').innerHTML = op == 0 ? `${n1} × ${n2}` : `${n1} ÷ ${n2}`;

      break;
    case 3:
      document.getElementById('Q').innerHTML = `${n1} ^ ${n2}`;

      break;
    default:
      // Optional: Handle cases where diff is not 1, 2, or 3
      console.log('Invalid difficulty level');
  }
}

document.getElementById('submit').onclick = function() {

  let isNotEmpty = Boolean(document.getElementById('in').value);
  console.log(isNotEmpty)

  if (!QR) {
    document.getElementById('res').innerHTML = 'Press Randomize to get started!';
  }
  else {
    if (isNotEmpty) {
      if (!isAnswered) {
        let answer = Number.parseInt(document.getElementById('in').value);

        console.log(answer)


        switch (diff) {
          case 1:
            if (op == 0) {
              let res = n1 + n2;
              document.getElementById('res').innerHTML = answer == res ? 'You are RIGHT!' : 'You are WRONG!';
              correctGuess += answer == res ? 1 : 0;
              isAnswered = answer == res ? true : false;
              console.log(res)
            }
            else {
              let res = n1 - n2;
              document.getElementById('res').innerHTML = answer == res ? 'You are RIGHT!' : 'You are WRONG!';
              correctGuess += answer == res ? 1 : 0;
              isAnswered = answer == res ? true : false;
              console.log(res)
            }
            break;

          case 2:
            if (op == 0) {
              let res = n1 * n2;
              document.getElementById('res').innerHTML = answer == res ? 'You are RIGHT!' : 'You are WRONG!';
              console.log(res)
              correctGuess += answer == res ? 1 : 0;
              isAnswered = answer == res ? true : false;
            }
            else {
              let res = n1 / n2;
              document.getElementById('res').innerHTML = answer == res ? 'You are RIGHT!' : 'You are WRONG!';
              console.log(res)
              correctGuess += answer == res ? 1 : 0;
              isAnswered = answer == res ? true : false;
            }
            break;

          case 3:

            let res = Math.pow(n1, n2);
            document.getElementById('res').innerHTML = answer == res ? 'You are RIGHT!' : 'You are WRONG!';
            correctGuess += answer == res ? 1 : 0;
            console.log(res)
            isAnswered = answer == res ? true : false;
            break;
        }
        document.getElementById('correctG').innerHTML = `Correct Guesses : ${correctGuess}`;
      }
      else {
        document.getElementById('res').innerHTML = 'Already answered the Question!';
      }
    }
    else{
      document.getElementById('res').innerHTML = 'Umm, put an answer?';
    }
  }
}

document.getElementById('diff').onclick = function() {

  diff =
    diff == 1 ? diff = 2 :
    diff == 2 ? diff = 3 : diff = 1;
  setDiff(diff);
  //console.log(diff);

}

function setDiff(diff) {
  if (diff != currentQ) {
    rand();
  }
  switch (diff) {
    case 2:
      document.getElementById('diff').innerHTML = '× ÷';
      break;
    case 3:
      document.getElementById('diff').innerHTML = '^';
      break;
    case 1:
      document.getElementById('diff').textContent = '+ -';
      break;
    default:
      // Optional: Handle cases where diff is not 1, 2, or 3
      console.log('Invalid difficulty level');
  }
}
