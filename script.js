function calculate(event) {
  event.preventDefault();
  
  let profit = document.getElementById("profit").value;
  let loss = document.getElementById("loss").value;
  let winProb = document.getElementById("otm").value;
  let lossProb = 1 - winProb;

  let result = (profit * winProb) - (loss * lossProb);
  result = result.toFixed(2);

  if (result > 0) {
    document.getElementById("result").style.color = "#00b894";
  } else {
    document.getElementById("result").style.color = "#d63031";
  }
  document.getElementById("result").innerHTML = result;
  
  
}