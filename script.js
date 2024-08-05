function welcome() {
  console.log('სალამი, მშვიდობიან დღეს გისურვებ!');
}

welcome();
welcome();
welcome();







                   //პარამეტრი
function welcome1(userFirstName) { //ფუნქციაში ინფუთს ეწოდება პარამეტრი
  console.log(`სალამი ${userFirstName}, მშვიდობიან დღეს გისურვებ`);   
  
}

welcome1('მიშა')








                      //პარამეტრები  
function welcome2(userFirstName, messages) {

  console.log(`სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი`);
}

welcome2('მიშა', 5); //სალამი მიშა, შენ გაქვს 5 მესიჯი
welcome2('ნინო', 10)//სალამი ნინო, შენ გაქვს 10 მესიჯი
         //არგუმენტები

         //თუ პარამეტრებს არ შევავსებთ არგუმენტების ადგილას დაიწერება undefined






//Default პარამეტრები

function welcome3(userFirstName, messages = 0) {
  console.log(`სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი`);
  
}
welcome3('მიშა'); //სალამი მიშა, შენ გაქვს 0 მესიჯი
welcome3('ნინო', 10); //სალამი ნინო, შენ გაქვს 10 მესიჯი




















function welcome4(userFirstName, messages = 0) {
  return `სალამი ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;
  
}
welcome4('მიშა'); 

console.log(welcome4('მიშა')); //სალამი მიშა შენ გაქვს 0 მესიჯი

