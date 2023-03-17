function calculateBmi(){
    let weight= document.getElementById("weight").value
    let height= document.getElementById("height").value
    const underImg = document.getElementById("Underweight");
    const normalImg = document.getElementById("Normalweight");
    const overImg = document.getElementById("Overweight");
    const obeseImg = document.getElementById("obese");
   
    let bmi=(weight/( height * height))

    document.getElementById("heading").innerHTML= "Your BMI is : "
    document.getElementById("bmi-output").innerHTML= bmi.toFixed(2)

    if (!height || !weight) {
      document.getElementById("heading").innerHTML= " "
      document.getElementById("bmi-output").innerHTML= " "
      document.getElementById("message").innerHTML = "Please Enter Both Height And Weight.";
      return;
    };
    
 if (bmi <= 18.5) {
    document.getElementById("message").innerHTML= "You are UnderWeight"
    underImg.style.display = "block";

  } 
  else if (bmi <= 24.9) {
    document.getElementById("message").innerHTML= "You are Normal Weight"
    normalImg.style.display = "block";
  } 
  else if (bmi <= 29.9) {
    document.getElementById("message").innerHTML= "You are Over Weight"
    overImg.style.display = "block";
  } 
  else if (bmi >= 30) {
    document.getElementById("message").innerHTML= "You are Obese"
    obeseImg .style.display = "block";
  }
  
 
};

if (!height || !weight) {
  document.getElementById("message").innerHTML = "Please enter both height and weight.";
  console.log("empty")
};

function reload(){
window.location.reload()
};



