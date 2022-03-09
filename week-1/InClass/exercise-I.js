function getAgeInDays (age) {
    return age * 365;
  }
  
  function createGreeting (name, age) {
    var ageInDays = getAgeInDays (age);
    return `My Name is ${name} and I was born over ${ageInDays} days ago!`;
  }

  let result = createGreeting ("Burçak", 29);

  console.log(result);