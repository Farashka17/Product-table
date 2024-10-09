import React from "react";

const Home = () => {
  let students = [
    {
      id: 1,
      name: "Nurane",
      surname: "Ismayilzade",
      age: 21,
      hobbies: ["music", "walking", "watchingfilm"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "cavid" },
        { id: 4, name: "alisa" },
      ],
      loginDetail: { username: "nurana21", password: "nunu123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 88,
      salaryAZN: 144,
    },
    {
      id: 2,
      name: "Gizilgul",
      surname: "Allahverdiyeva",
      age: 20,
      hobbies: ["book", "writing code"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "babaxan" },
        { id: 4, name: "gulshen" },
      ],
      loginDetail: { username: "allahverdieva1", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 70,
      salaryAZN: 100,
    },
    {
      id: 3,
      name: "Xanim",
      surname: "Nuriyeva",
      age: 21,
      hobbies: ["book", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "hikmet" },
        { id: 4, name: "gulsen" },
      ],
      loginDetail: { username: "xanim123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 145,
    },
    {
      id: 4,
      name: "Minaya",
      surname: "Binnetova",
      age: 21,
      hobbies: ["book", "gaming", "movie", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "anar" },
      ],
      loginDetail: { username: "binnetova", password: "hello123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 90,
      salaryAZN: 142,
    },
    {
      id: 5,
      name: "Sabina",
      surname: "Hatamli",
      age: 21,
      hobbies: ["shopping", "listen to music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Mirvari" },
      ],
      loginDetail: { username: "sebine123", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 81,
      salaryAZN: 146,
    },

    {
      id: 6,
      name: "Ləman",
      surname: "Şamilova",
      age: 20,
      hobbies: [
        "watching movies",
        "reading books",
        "painting",
        " walking",
        " listen to music",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "lemanshamilova", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 85.8,
      salaryAZN: 145,
    },
    {
      id: 7,
      name: "Narmin",
      surname: "Musayeva",
      age: 21,
      hobbies: ["book", "gaming", "painting", "walking"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "fidan" },
        { id: 4, name: "Irada" },
      ],
      loginDetail: {
        username: "narmin0",
        password: "narmin01",
      },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 196,
    },

    {
      id: 8,
      name: "Fatima",
      surname: "Akhundzada",
      age: 20,
      hobbies: ["drawing", "sleeping"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Valida" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 76,
      salaryAZN: 100,
    },
    {
      id: 9,
      name: "Elmir",
      surname: "Huseynov",
      age: 21,
      hobbies: ["book", "ice skating", "Tennis", "Karting"],
      student: true,
      teacher: [
        { id: 1, name: "Gurban" },
        { id: 2, name: "Hajar" },
        { id: 3, name: "Morad" },
        { id: 4, name: "Fikrat" },
      ],
      loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
      gender: "man",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 120,
    },
    {
      id: 10,
      name: "Fidan",
      surname: "Rehimli",
      age: 21,
      hobbies: ["book", "gaming"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Turan" },
      ],
      loginDetail: { username: "fidan123", password: "fidanrahimli" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 75,
      salaryAZN: 98,
    },
    {
      id: 11,
      name: "Aynur",
      surname: "Aynurova",
      age: 20,
      hobbies: ["book", "gaming"],
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 81,
      salaryAZN: 120,
    },

    {
      id: 12,
      name: "Elman",
      surname: "Muradov",
      age: 20,
      hobbies: [
        "book",
        "gaming",
        "sking",
        "wrestling",
        "swiming",
        "arguing about philosophy",
        "solving sudoku",
        "hiking",
        "walking",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "jale" },
        { id: 4, name: "akhmed" },
      ],
      loginDetail: { username: "elman17", password: "elman12345" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 100,
    },
  ];
  // 1
  // students && students.forEach(student =>
  //   console.log(student)
  // )
  // 2
  // students && students.forEach(student =>
  //   console.log("ad:"+student.name)
  // )
  // 3
  // students && students.forEach(student =>
  //     console.log("ad:"+student.name,"soyad:"+student.surname)
  //   )
  // 4
  // const failedStudents = students.filter((student) => student.fail === true);
  // failedStudents && failedStudents.forEach(student => console.log(student.name))
  // 5
  // console.log(students.sort((b,a)=>a.hobbies.length-b.hobbies.length)[0].name)
  // console.log(students.sort((b,a)=>a.hobbies.length-b.hobbies.length)[0].surname)
  // console.log(students.sort((b,a)=>a.hobbies.length-b.hobbies.length)[0].hobbies.forEach(hobby => console.log(hobby)))
  // 6
  // console.log(students.sort((b,a)=>a.avgPoint-b.avgPoint)[0].name)
  // console.log(students.sort((b,a)=>a.avgPoint-b.avgPoint)[0].surname)
  // 7
  // console.log(students.sort((b,a)=>a.loginDetail.password.length-b.loginDetail.password.length)[0].loginDetail.username)
  // console.log(students.sort((b,a)=>a.loginDetail.password.length-b.loginDetail.password.length)[0].surname)
  // 8
  // students.filter((student=> student.boyfriendGirlfriend===true)).forEach((student)=> {console.log(student.name,student.loginDetail.username  )})
  // 9
  // students.filter((student)=> student.age===20).forEach((student)=>
  // student.teacher.forEach(teacher=> {console.log(student.name,teacher.name)})
  // )
  // 10
  // students.forEach((student)=>{console.log( (student.salaryAZN /1.7)),student.name })
  // 11
  // students.forEach((student)=>
  // student.teacher.forEach(teacher=> {console.log(teacher.name[0].toUpperCase()+teacher.name.slice(1))})
  // )
  // 12
  // students.forEach((student)=> {
  //   if( student.loginDetail.password.includes(1,2,3,4,5,6,7,8,9)){
  //     console.log(student.name)}
  //   }
  // )

  // elmirin tasklari
  // 31
  // const maxtomin=students.sort((b,a)=>a.salaryAZN-b.salaryAZN)
  // maxtomin.forEach((item)=>console.log(item.name,item.salaryAZN/1.7))

  // 32
  // const maxtomin=students.sort((b,a)=>a.avgPoint-b.avgPoint)
  // maxtomin.forEach((item)=>console.log(item.name,item.salaryAZN/1.7))

  // 33 yarimchiq
//  const studentsWithoutPassword = students.filter((student) =>
//    !student.loginDetail.password.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)
  // );
  // "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"
  // studentsWithoutPassword.forEach((student)=>console.log(student.name))
  // console.log(studentsWithoutPassword);

  // 34
  // const hobbies = [];
  // students.forEach((student) => {
  //   hobbies.push(student.hobbies);
  // });
  // console.log(hobbies);
  // const mintomax = hobbies.sort((a, b) => a.length - b.length);
  // mintomax.forEach((item) => console.log(item));

// 35
// sport deye hobby yoxdur

 // 36
//  const filteredStudents =[]

//  students.forEach((student) => {
//   filteredStudents.push(student.name,
//     student.loginDetail.username,
//     student.loginDetail.password[0]+
//     student.loginDetail.password[student.loginDetail.password.length-2].replace("*")+

//     student.loginDetail.password[student.loginDetail.password.length-1])
  
//  })
//    console.log(filteredStudents)

// chatgptninki
// const filteredStudents = [];

// students.forEach((student) => {
//   const password = student.loginDetail.password;
//   const maskedPassword = password[0] + '*'.repeat(password.length - 2) + password[password.length - 1];

//   filteredStudents.push({
//     name: student.name,
//     username: student.loginDetail.username,
//     password: maskedPassword
//   });
// });

// console.log(filteredStudents);
// 37



// 38

// 39
// const student =students.filter((student)=>student.avgPoint>80)
// let avgPoint =0
// let studentNames = []
//  student.forEach(item =>{
//   avgPoint =(avgPoint+item.avgPoint)
//  })
//  avgPoint = avgPoint/student.length
//  console.log("orta avgPoint:",avgPoint);
//  const student2 =students.filter((student)=>student.avgPoint<80)
//  console.log(student2)
//  student2.forEach(item =>{
// console.log("ortalamasi 80den asagi:",item.name,item.avgPoint)
// studentNames.push(item.name)
// })
// console.log(studentNames)

// 40
// const student = students.filter((student)=> student.hobbies.includes("gaming"))

// console.log(student);
// let avgAge = 0
// let avgPoint = 0
// student.forEach(item=>{
//   item.age
//   item.avgPoint
//   avgAge+=item.age
//   avgPoint+=item.avgPoint
// })
// avgPoint =avgPoint/student.length
// avgAge = avgAge/student.length
// if(avgAge>22){
//   console.log(avgPoint,"avgPoint bali")
// }
// else{
//   console.log("Orta yash 22den balacadir")
// }
// console.log("Orta yash:"+avgAge);

































// "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"




  return <div>Home</div>;
};

export default Home;
