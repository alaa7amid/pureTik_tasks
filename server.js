const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());


const readDataFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) {
                reject('Error reading data file');
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

const { getAllStudents, getFirstStudent,getLastStudent,
    getStudentById ,getStudentsByStage,addStudent,removeStudentById,
    updateStudentById,getAverageAge ,getStudentsAboveAge,getStudentsBelowAge,
    getStudentByName,sortStudentsByName,sortStudentsByAge,filterStudentsByAge,
    filterStudentsByStage,countStudents,countStudentsByStage,incrementStudentAgeById,
    decrementStudentAgeById,getStudentsWithIdGreaterThan,getStudentsWithIdLessThan,
    getStudentsInRangeOfIds,getTotalAgeOfStudents,getAverageAgeByStage,getYoungestStudent,
    getOldestStudent,hasStudentWithName,getNamesOfAllStudents,getAllStudentIds,getAllStudentStages,
    getStudentsWithNamesStartingWith,getStudentsWithNamesEndingWith,getStudentsWithNameLengthGreaterThan,
    getStudentsWithNameLengthLessThan,getAllStudentsSortedById,reverseStudentList,getRandomStudent,
    removeStudentsAboveAge,removeStudentsBelowAge,getStudentsBetweenAges,countStudentsAboveAge,
    countStudentsBelowAge,addMultipleStudents,removeMultipleStudentsById,updateMultipleStudentsById,
    isAllStudentsAboveAge,isAllStudentsBelowAge,hasStudentsInStage,getStudentNamesWithIds
    
    
    

    


} = require('./app');
// const getAllStudents = async (req, res) => {
//     try {
//         const students = await readDataFromFile(); 
//         res.json(students); 
//     } catch (error) {
//         res.status(500).send(error.message); 
//     }
// };



// api


app.get('/',async (req,res) =>{
    res.send('is done');
})

app.get('/students', getAllStudents);
app.get('/students/first', getFirstStudent);
app.get('/students/last' ,getLastStudent);
app.get('/student/:id' ,getStudentById); 
app.get('/students/:stage' ,getStudentsByStage);
app.post('/student' ,addStudent);
app.delete('/student/:id' ,removeStudentById);
app.post('/student/:id' ,updateStudentById);
app.get('/average-age', getAverageAge);
app.get('/getStudentsAboveAge/:age',getStudentsAboveAge);
app.get('/getStudentsBelowAge/:age',getStudentsBelowAge);
app.get('/getStudentByName/:name',getStudentByName);
app.get('/sortStudentsByName/:name',sortStudentsByName);
app.get('/sortStudentsByAge/:age',sortStudentsByAge);
app.get('/filterStudentsByAge/:age',filterStudentsByAge);
app.get('/filterStudentsByStage/:stage',filterStudentsByStage);
app.get('/countStudents',countStudents);
app.get('/countStudentsByStage/:stage',countStudentsByStage);
app.get('/incrementStudentAgeById/:id',incrementStudentAgeById);
app.get('/decrementStudentAgeById/:id',decrementStudentAgeById);
app.get('/getStudentsWithIdGreaterThan/:id',getStudentsWithIdGreaterThan);
app.get('/getStudentsWithIdLessThan/:id',getStudentsWithIdLessThan);
app.get('/getStudentsInRangeOfIds/:startId/:endId',getStudentsInRangeOfIds);
app.get('/getTotalAgeOfStudents',getTotalAgeOfStudents);
app.get('/getAverageAgeByStage/:stage',getAverageAgeByStage);
app.get('/getYoungestStudent',getYoungestStudent);
app.get('/getOldestStudent/:age',getOldestStudent);
app.get('/hasStudentWithName/:name',hasStudentWithName);
app.get('/getNamesOfAllStudents',getNamesOfAllStudents);
app.get('/getAllStudentIds',getAllStudentIds);
app.get('/getAllStudentStages',getAllStudentStages);
app.get('/getStudentsWithNamesStartingWith/:letter',getStudentsWithNamesStartingWith);
app.get('/getStudentsWithNamesEndingWith/:letter',getStudentsWithNamesEndingWith);
app.get('/getStudentsWithNameLengthGreaterThan/:length',getStudentsWithNameLengthGreaterThan);
app.get('/getStudentsWithNameLengthLessThan/:length',getStudentsWithNameLengthLessThan);
app.get('/getAllStudentsSortedById',getAllStudentsSortedById);
app.get('/reverseStudentList',reverseStudentList);
app.get('/getRandomStudent',getRandomStudent);
app.get('/removeStudentsAboveAge/:age',removeStudentsAboveAge);
app.get('/removeStudentsBelowAge/:age',removeStudentsBelowAge);
app.get('/getStudentsBetweenAges/:minAge/:maxAge',getStudentsBetweenAges);
app.get('/countStudentsAboveAge/:age',countStudentsAboveAge);
app.get('/countStudentsBelowAge/:age',countStudentsBelowAge);
app.get('/addMultipleStudents',addMultipleStudents);
app.get('/removeMultipleStudentsById/:ids',removeMultipleStudentsById);
app.get('/updateMultipleStudentsById/:ids',updateMultipleStudentsById);
app.get('/isAllStudentsAboveAge/:age',isAllStudentsAboveAge);
app.get('/isAllStudentsBelowAge/:age',isAllStudentsBelowAge);
app.get('/hasStudentsInStage/:stage',hasStudentsInStage);
app.get('/getStudentNamesWithIds/:ids',getStudentNamesWithIds);

























app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
