const string = "Привет, меня зовут Катя!";
const vowels = "АЕЁИОУЫЭЮЯаеёиоуыэюя";
let vowelString = "";

for (let i = 0; i < string.length; i++) {
  const letter = string[i];
  if (vowels.includes(letter)) {
    vowelString += letter;
  }
}

console.log(vowelString);




/////////////////////////////////
const employees = [
  { name: "Иван", salary: 500 },
  { name: "Мария", salary: 2000 },
  { name: "Алексей", salary: 800 },
  { name: "Елена", salary: 1200 },
  { name: "Дмитрий", salary: 2500 },
];

function EmployeesWithHighSalary(employeesArray) {
  const filteredEmployees = employeesArray.filter(
    (employee) => employee.salary > 1000
  );
  const employeeNames = filteredEmployees.map((employee) => employee.name);
  return employeeNames;
}

const highEmployees = EmployeesWithHighSalary(employees);
console.log(highEmployees);


//////////////////////////////////
  
function HtmlExtension(filePath) {
  const fileExtension = filePath.slice(-4);
  return fileExtension === "html";
}

console.log(HtmlExtension("index.html"));
console.log(HtmlExtension("styles.css")); 

/////////////////////


function Even(number) {
  return number % 2 === 0;
}


let numbers = [3, 8, 12, 7, 6, 9, 2, 5];

let evenNumbers = numbers.filter(Even);


console.log(evenNumbers);
