let students = require("./data.json");

// console.log(Array.isArray(students))
let getAllStudents = () => { 
  return students;
};
// console.log(getAllStudents()); 

let getFirstStudent = () => {
  return students[0];
};
// console.log(getFirstStudent())

let getLastStudent = () => {
  return students[students.length - 1];
};
// console.log(getLastStudent());

let getStudentById = (id) => {
  // return students.find(student => student.id === id); 
  return students.find((student)=>{return student.id === id}) 
};
// console.log(getStudentById(1));
// console.log(getStudentById(3));

let getStudentsByStage = (stage) => {
  return students.filter((student) => student.stage === stage)
};

// console.log(getStudentsByStage('Grade 11'))

let addStudent = (newStudent) => {
  students.push(newStudent);
};

addStudent({
  "id": 33,
  "name": "ali",
  "stage": "Grade 11",
  "age": 30
});
// console.log(students)


let removeStudentById = (id) => {
  let studentIndex = students.findIndex(student => student.id == id);
  if(studentIndex == -1){
    console.log('not found of id ')
  }
  else{
    students.splice(studentIndex,1)
    console.log('student remove')
  }

};
// removeStudentById(33)
// console.log(students)




let updateStudentById = (id, updatedData) => {
  let studentIndex = students.findIndex(student => student.id == id);
  if (studentIndex == -1){
    console.log('id not found')
  }
  else{
    students[studentIndex] = updatedData;
  }
  
};
// updateStudentById(1,{ 
//   "id": 111,
//   "name": "1111e",
//   "stage": "1111",
//   "age": 1111
// });
// console.log(students)


let getAverageAge = () => {
  let totalAge = students.reduce((sumAge, student) => sumAge + student.age ,0 )
  let averageAge = totalAge / students.length;
  
  return Math.round(averageAge);
};
// console.log(getAverageAge())


let getStudentsAboveAge = (age) => {
  let studentAge = students.filter(student => student.age >= age);
  return studentAge;
};
// console.log(getStudentsAboveAge(17))


let getStudentsBelowAge = (age) => {
  let studentAge = students.filter(student => student.age < age);
  return studentAge;
};
// console.log(getStudentsBelowAge(15))

let getStudentByName = (name) => {
  let studentName = students.filter(student => student.name == name)
  return studentName;
};
// console.log(getStudentByName('ali'))


let sortStudentsByName = () => {
  let sortedStudents = students.sort((a,b) => {
    if (a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  })
  return sortedStudents;
};
// console.log(sortStudentsByName())

let sortStudentsByAge = () => {
  return students.sort((a,b)=> a.age - b.age)
    
};
// console.log(sortStudentsByAge());

let filterStudentsByAge = (age) => {
  let studentAge = students.filter(student => student.age > 15);
  return studentAge;
};

// console.log(filterStudentsByAge())

let filterStudentsByStage = (stage) => {
  let studentStage = students.filter(student => student.stage == stage);
  return studentStage;
};
// console.log(filterStudentsByStage('Grade 11'));

let countStudents = () => {
  let studentCount = students.length;
  console.log(studentCount);
};
// countStudents()

let countStudentsByStage = (stage) => {
  let countByStage = students.filter(student => student.stage == stage);
  return countByStage.length;
};
// console.log(countStudentsByStage('Grade 11'))

let incrementStudentAgeById = (id) => {
  let studentAge = students.find(student => student.id == id);
  if(studentAge){
    studentAge.age +=1
    return studentAge
  }
  else{
    return 'id not found';

  }
};
// console.log(incrementStudentAgeById(1))

let decrementStudentAgeById = (id) => {
  let studentAge = students.find(student => student.id == id);
  if(studentAge){
    studentAge.age -=1;
    return studentAge;
  }
  else{
    return 'id not found';
  }
};
// console.log(students)
// console.log(decrementStudentAgeById(1))

let getStudentsWithIdGreaterThan = (id) => {
  return students.filter(student => student.id > id);
};
// console.log(getStudentsWithIdGreaterThan(20));

let getStudentsWithIdLessThan = (id) => {
  return students.filter(student => student.id < id);
};
// console.log(getStudentsWithIdLessThan(3));

let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter(student => student.id >= startId && student.id <= endId)
};
// console.log(getStudentsInRangeOfIds(1,5))

let getTotalAgeOfStudents = () => {
  let totalAge = students.reduce((sumAge, student) => sumAge + student.age ,0 )
  return totalAge;
};
// console.log(getTotalAgeOfStudents())

let getAverageAgeByStage = (stage) => {
  let avrageaveByStage = students.filter(student => student.stage == stage);
  let totalAge = avrageaveByStage.reduce((sumAge, student) => sumAge + student.age ,0 )
  let averageAge = totalAge / avrageaveByStage.length;
  return averageAge;
};
// console.log(getAverageAgeByStage('Grade 11'));

let getYoungestStudent = () => {
  let YoungestStudent = students.reduce((youngest, student) => student.age < youngest.age ? student : youngest,
    students[0]);
  console.log(YoungestStudent)
};
// getYoungestStudent()

let getOldestStudent = () => {
  let oldestStudent = students.filter(student => student.age > 50);
  if(oldestStudent.length > 0){
    console.log(oldestStudent);
  }
  else{
    console.log('Not found any students older than 50');
  }
};
// getOldestStudent();

let hasStudentWithName = (name) => {
  return students.some(student => student.name === name);

}; 
// console.log(hasStudentWithName('ali'));

let getNamesOfAllStudents = () => {
  return students.map(student => student.name);

};
// console.log(getNamesOfAllStudents());

let getAllStudentIds = () => {
  return students.map(student => student.id);

};
// console.log(getAllStudentIds());

let getAllStudentStages = () => {
  return students.map(student => student.stage);
};
// console.log(getAllStudentStages());

let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter(student => student.name.startsWith(letter));
};
// console.log(getStudentsWithNamesStartingWith('D'));

let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(student => student.name.endsWith(letter));

};
// console.log(getStudentsWithNamesEndingWith('i'));

let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter(student => student.name.length >= length);
  
};
// console.log(getStudentsWithNameLengthGreaterThan(3));

let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter(student => student.name.length <= length);

};
// console.log(getStudentsWithNameLengthLessThan(4));

let getAllStudentsSortedById = () => {
  return students.sort((a,b) => a.id - b.id);
};
// console.log(getAllStudentsSortedById())

let reverseStudentList = () => {
  return students.reverse()
};
// console.log(reverseStudentList());

let getRandomStudent = () => {
  let randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
};
// console.log(getRandomStudent());




let removeStudentsAboveAge = (age) => {
  return students.filter(student => student.age >= age);
  
};

// console.log(removeStudentsAboveAge(25));

let removeStudentsBelowAge = (age) => {
  return students.filter(student => student.age <= age);
  
};
// console.log(removeStudentsBelowAge(15));

let getStudentsBetweenAges = (minAge, maxAge) => {
  students = students.filter(student => student.age > minAge && student.age < maxAge );
  return students;
};
// console.log(getStudentsBetweenAges(13,15));

let countStudentsAboveAge = (age) => {
  students = students.filter(student => student.age > age);
  return students.length;
};
// console.log(countStudentsAboveAge(15));
let countStudentsBelowAge = (age) => {
  students = students.filter(student => student.age < age);
  return students.length
};
// console.log(countStudentsBelowAge(14));

let addMultipleStudents = (newStudents) => {
  students.push(...newStudents);
  return students
};
newStudent = [{
  "id": 99,
  "name": "alia",
  "stage": "Grade 10",
  "age": 15
},
{
  "id": 76,
  "name": "laula",
  "stage": "Grade 11",
  "age": 50
}];
// console.log(addMultipleStudents(newStudent));



let removeMultipleStudentsById = (ids) => {

  students = students.filter(student => !ids.includes(student.id)); 
  return students;
};

let idsToRemove = [1, 3];
// console.log(removeMultipleStudentsById(idsToRemove));



let updateMultipleStudentsById = (ids, updatedData) => 
  students = students.map(student => ids.includes(student.id) ? { ...student, ...updatedData } : student
  );


let ids = [1, 3];
let updatedData = { age: 25, name: "name after uduate" };

// console.log(updateMultipleStudentsById(ids, updatedData));



let isAllStudentsAboveAge = (age) => {
  return students.every(student => student.age > age);
};
// console.log(isAllStudentsAboveAge(50));

let isAllStudentsBelowAge = (age) => {
  return students.every(student => student.age < age);

};
// console.log(isAllStudentsBelowAge(30));

let hasStudentsInStage = (stage) => {
  return students.some(student => student.stage === stage);
};
// console.log(hasStudentsInStage('Grade 11'));

let getStudentNamesWithIds = (ids) => {
  return students.filter(student =>ids.includes(student.id)).map(student => student.name)
};
// console.log(getStudentNamesWithIds([1, 3]));