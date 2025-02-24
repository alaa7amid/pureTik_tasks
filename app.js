let students = require("./data.json");

// console.log(Array.isArray(students))
let getAllStudents = (req,res) => { 
  res.send(students);
};
// console.log(getAllStudents()); 

let getFirstStudent = (req,res) => {
  res.send(students[0]) ;
};
// console.log(getFirstStudent())

let getLastStudent = (req,res) => {
  res.send(students[students.length - 1]);
};
// console.log(getLastStudent());

let getStudentById = (req,res) => {
  let id = parseInt(req.params.id);
  // return students.find(student => student.id === id); 
  res.send(students.find((student)=>{return student.id === id}));
};
// console.log(getStudentById(1));
// console.log(getStudentById(3));

let getStudentsByStage = (req,res) => {
  
  let stage = req.params.stage.trim();
  res.send(students.filter((student) => student.stage.trim() === stage));
};

// console.log(getStudentsByStage('Grade 11'))

const addStudent = (req ,res) => {
  console.log('ok')
  const newStuden = req.body;
  if(newStuden){
    students.push(newStuden);
    console.log('add after postman' , newStuden)
  }
  else{
    console.log('non')
  }
  
  // console.log(students);
 
};

// addStudent({
//   "id": 33,
//   "name": "ali",
//   "stage": "Grade 11",
//   "age": 30
// });
// console.log(students)


let removeStudentById = (req,res) => {
  // let id = parseInt(req.params.id);
  let id = parseInt(req.params.id);
  let studentIndex = students.findIndex(student => student.id === id);
  if(studentIndex == -1){
    console.log('not found of id ')
  }
  else{
    res.send(students.splice(studentIndex,1))
    // console.log('student remove')
    // res.send(students) ;
  }

};
// console.log(removeStudentById(2))
// console.log(students)




let updateStudentById = (req,res) => {
  let id = parseInt(req.params.id);
  let updatedData = req.body;
  let studentIndex = students.findIndex(student => student.id === id);
  if (studentIndex == -1){
    console.log('id not found')
  }
  else{
    console.log('of')
    
    res.send(students[studentIndex] = updatedData);
  }
  
};
// updateStudentById(1,{ 
//   "id": 111,
//   "name": "1111e",
//   "stage": "1111",
//   "age": 1111
// });
// console.log(students)


let getAverageAge = (req, res) => {
  try {
    console.log(students);
    
    let totalAge = students.reduce((sumAge, student) => sumAge + student.age, 0);
    let averageAge = totalAge / students.length;
    let result = Math.round(averageAge);
    
    console.log(result);
    return res.json({ averageAge: result });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });  
  }
};



// console.log(getAverageAge())


let getStudentsAboveAge = (req,res) => {
  let age = parseInt(req.params.age);
  let studentAge = students.filter(student => student.age >= age);
  res.send(studentAge) ;
};
// console.log(getStudentsAboveAge(17))


let getStudentsBelowAge = (req,res) => {
  let age = parseInt(req.params.age);
  let studentAge = students.filter(student => student.age < age);
  return res.send(studentAge);
};
// console.log(getStudentsBelowAge(15))

let getStudentByName = (req,res) => {
  let name = req.params.name;
  let studentName = students.filter(student => student.name === name)
  return res.send(studentName);
};
// console.log(getStudentByName('ali'))


let sortStudentsByName = (req,res) => {
  let sortedStudents = students.sort((a,b) => {
    if (a.name < b.name){
      return 1;
    }
    if(a.name > b.name){
      return -1;
    }
    return 0;
  })
  return res.send(sortedStudents);
};
// console.log(sortStudentsByName())

let sortStudentsByAge = (req,res) => {
  return res.send(students.sort((a,b)=> a.age - b.age));
    
};
// console.log(sortStudentsByAge());

let filterStudentsByAge = (req,res) => {
  let age = req.params.age;
  let studentAge = students.filter(student => student.age > 15);
  return res.send(studentAge);
};

// console.log(filterStudentsByAge())

let filterStudentsByStage = (req,res) => {
  let stage = req.params.stage;
  let studentStage = students.filter(student => student.stage == stage);
  return res.send(studentStage);
};
// console.log(filterStudentsByStage('Grade 11'));

let countStudents = (req,res) => {
  let studentCount = students.length;
  return res.status(200).json({studentCount :studentCount});
};
// countStudents()

let countStudentsByStage = (req,res) => {
  let stage = req.params.stage;
  let countByStage = students.filter(student => student.stage === stage);
  return res.status(200).json(countByStage.length);
};
// console.log(countStudentsByStage('Grade 11'))

let incrementStudentAgeById = (req,res) => {
  let id = parseInt(req.params.id);
  let studentAge = students.find(student => student.id === id);
  if(studentAge){
    studentAge.age +=1
    return res.status(200).json(studentAge)
  }
  else{
    return res.status(404).json('id not found');
  }
};
// console.log(incrementStudentAgeById(1))

let decrementStudentAgeById = (req,res) => {
  let id = parseInt(req.params.id);
  let studentAge = students.find(student => student.id == id);
  if(studentAge){
    studentAge.age -=1;
    return res.status(200).json(studentAge)
  }
  else{
    return res.status(404).json('id not found');
  }
};
// console.log(students)
// console.log(decrementStudentAgeById(1))

let getStudentsWithIdGreaterThan = (req,res) => {
  let id = parseInt(req.params.id);
  return res.send(students.filter(student => student.id > id));
};
// console.log(getStudentsWithIdGreaterThan(20));

let getStudentsWithIdLessThan = (req,res) => {
  let id = parseInt(req.params.id);

  return res.send(students.filter(student => student.id < id));
};
// console.log(getStudentsWithIdLessThan(3));

let getStudentsInRangeOfIds = (req,res) => {
  let startId = parseInt(req.params.startId);
  let endId = parseInt(req.params.endId);

  return res.send(students.filter(student => student.id >= startId && student.id <= endId));
};
// console.log(getStudentsInRangeOfIds(1,5))

let getTotalAgeOfStudents = (req,res) => {
  let totalAge = students.reduce((sumAge, student) => sumAge + student.age ,0 )
  return res.status(200).json({totalAge});
};
// console.log(getTotalAgeOfStudents())

let getAverageAgeByStage = (req,res) => {
  let stage = req.params.stage;
  let avrageaveByStage = students.filter(student => student.stage == stage);
  let totalAge = avrageaveByStage.reduce((sumAge, student) => sumAge + student.age ,0 )
  let averageAge = totalAge / avrageaveByStage.length;
  return res.status(200).json({averageAge});
};
// console.log(getAverageAgeByStage('Grade 11'));

let getYoungestStudent = (req,res) => {
  let YoungestStudent = students.reduce((youngest, student) => student.age < youngest.age ? student : youngest,
    students[0]);
  return res.status(200).json(YoungestStudent)
};
// getYoungestStudent()

let getOldestStudent = (req,res) => {
  let age = parseInt(req.params.age);
  let oldestStudent = students.filter(student => student.age > age);
  if(oldestStudent.length > 0){
    return res.status(200).json({oldestStudent});
  }
  else{
    return res.status(404).json('Not found any students older than 50');
  }
};
// getOldestStudent();

let hasStudentWithName = (req,res) => {
  let name = req.params.name;
  return res.send(students.some(student => student.name === name));

}; 
// console.log(hasStudentWithName('ali'));

let getNamesOfAllStudents = (req,res) => {
  return res.send(students.map(student => student.name));

};
// console.log(getNamesOfAllStudents());

let getAllStudentIds = (req,res) => {
  return res.send(students.map(student => student.id));

};
// console.log(getAllStudentIds());

let getAllStudentStages = (req,res) => {
  return res.send(students.map(student => student.stage));
};
// console.log(getAllStudentStages());

let getStudentsWithNamesStartingWith = (req,res) => {
  let letter = req.params.letter;
  return res.send(students.filter(student => student.name.startsWith(letter)));
};
// console.log(getStudentsWithNamesStartingWith('D'));

let getStudentsWithNamesEndingWith = (req,res) => {
  try {
    let letter = req.params.letter;

    // التحقق من أن المدخل هو حرف واحد فقط
    if (letter.length !== 1) {
      return res.status(400).json({ error: "plaes enter one letter" });
    }

    // تصفية الطلاب الذين تنتهي أسماؤهم بالحرف المحدد
    let filteredStudents = students.filter(student => student.name.endsWith(letter));

    // إذا لم يتم العثور على أي أسماء، إرسال رسالة فارغة
    if (filteredStudents.length === 0) {
      return res.status(404).json({ message: "not name end with the letter" });
    }

    return res.json(filteredStudents);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "حدث خطأ في السيرفر" });
  }
};


// console.log(getStudentsWithNamesEndingWith('i'));

let getStudentsWithNameLengthGreaterThan = (req,res) => {
  let length = parseInt(req.params.length);
  return res.send(students.filter(student => student.name.length >= length));
  
};
// console.log(getStudentsWithNameLengthGreaterThan(3));

let getStudentsWithNameLengthLessThan = (req,res) => {
  let length = parseInt(req.params.length);
  return res.send(students.filter(student => student.name.length <= length));

};
// console.log(getStudentsWithNameLengthLessThan(4));

let getAllStudentsSortedById = (req,res) => {
  return res.send(students.sort((a,b) => a.id - b.id));
};
// console.log(getAllStudentsSortedById())

let reverseStudentList = (req,res) => {
  return res.send(students.reverse());
};
// console.log(reverseStudentList());

let getRandomStudent = (req,res) => {
  let randomIndex = Math.floor(Math.random() * students.length);
  return res.send(students[randomIndex]);
};
// console.log(getRandomStudent());




let removeStudentsAboveAge = (req,res) => {
  let age = parseInt(req.params.age);
  return res.send(students.filter(student => student.age >= age));
  
};

// console.log(removeStudentsAboveAge(25));

let removeStudentsBelowAge = (req,res) => {
  let age = parseInt(req.params.age);
  return res.send(students.filter(student => student.age <= age));
  
};
// console.log(removeStudentsBelowAge(15));

let getStudentsBetweenAges = (req,res) => {
  let minAge = parseInt(req.params.minAge);
  let maxAge = parseInt(req.params.maxAge);

  students = students.filter(student => student.age > minAge && student.age < maxAge );
  return res.send(students);
};
// console.log(getStudentsBetweenAges(13,15));

let countStudentsAboveAge = (req,res) => {
  let age = parseInt(req.params.age);
  students = students.filter(student => student.age > age);
  return res.status(200).json(students.length);
};
// console.log(countStudentsAboveAge(15));
let countStudentsBelowAge = (req,res) => {
  let age = parseInt(req.params.age);
  students = students.filter(student => student.age < age);
  return res.status(200).json(students.length);
};
// console.log(countStudentsBelowAge(14));

let addMultipleStudents = (req,res) => {
  let newStudents = req.body;
  students.push(...newStudents);
  return res.send(students)
};
// newStudent = [{
//   "id": 99,
//   "name": "alia",
//   "stage": "Grade 10",
//   "age": 15
// },
// {
//   "id": 76,
//   "name": "laula",
//   "stage": "Grade 11",
//   "age": 50
// }];
// console.log(addMultipleStudents(newStudent));



let removeMultipleStudentsById = (req,res) => {
  let ids = req.params.ids.split(',').map(id => parseInt(id));
  students = students.filter(student => !ids.includes(student.id)); 
  return res.send(students);
};

// let idsToRemove = [1, 3];
// console.log(removeMultipleStudentsById(idsToRemove));



let updateMultipleStudentsById = (req,res) => 
  {
  let ids = req.params.ids.split(',').map(id => parseInt(id));
  let updatedData = req.body;
  students = students.map(student => ids.includes(student.id) ? { ...student, ...updatedData } : student 
  )
  return res.send(students);
  };


// let ids = [1, 3];
let updatedData = { age: 25, name: "name after uduate" };

// console.log(updateMultipleStudentsById(ids, updatedData));



let isAllStudentsAboveAge = (req,res) => {
  let age = parseInt(req.params.age);
  return res.send(students.every(student => student.age > age));
};
// console.log(isAllStudentsAboveAge(50));

let isAllStudentsBelowAge = (req,res) => {
  let age = parseInt(req.params.age);
  return res.send(students.every(student => student.age < age));

};
// console.log(isAllStudentsBelowAge(30));

let hasStudentsInStage = (req,res) => {
  let stage = req.params.stage;
  return res.send(students.some(student => student.stage === stage));
};
// console.log(hasStudentsInStage('Grade 11'));

let getStudentNamesWithIds = (req,res) => {
  let ids = req.params.ids.split(',').map(id => parseInt(id));
  return res.status(200).json(students.filter(student =>ids.includes(student.id)).map(student => student.name));
};
// console.log(getStudentNamesWithIds([1, 3]));


module.exports = {
  getAllStudents,
  getFirstStudent,
  getLastStudent,
  getStudentById,
  getStudentsByStage,
  addStudent,
  removeStudentById,
  updateStudentById,
  getAverageAge,
  getStudentsAboveAge,
  getStudentsBelowAge,
  getStudentByName,
  sortStudentsByName,
  sortStudentsByAge,
  filterStudentsByAge,
  filterStudentsByStage,
  countStudents,
  countStudentsByStage,
  incrementStudentAgeById,
  decrementStudentAgeById,
  getStudentsWithIdGreaterThan,
  getStudentsWithIdLessThan,
  getStudentsInRangeOfIds,
  getTotalAgeOfStudents,
  getAverageAgeByStage,
  getYoungestStudent,
  getOldestStudent,
  hasStudentWithName,
  getNamesOfAllStudents,
  getAllStudentIds,
  getAllStudentStages,
  getStudentsWithNamesStartingWith,
  getStudentsWithNamesEndingWith,
  getStudentsWithNameLengthGreaterThan,
  getStudentsWithNameLengthLessThan,
  getAllStudentsSortedById,
  reverseStudentList,
  getRandomStudent,
  removeStudentsAboveAge,
  removeStudentsBelowAge,
  getStudentsBetweenAges,
  countStudentsAboveAge,
  countStudentsBelowAge,
  addMultipleStudents,
  removeMultipleStudentsById,
  updateMultipleStudentsById,
  isAllStudentsAboveAge,
  isAllStudentsBelowAge,
  hasStudentsInStage,
  getStudentNamesWithIds
};