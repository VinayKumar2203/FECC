const files = [
    { name: "document1.pdf", size: 500 },
    { name: "document2.pdf", size: 700 },
    { name: "image1.png", size: 200 },
    { name: "image2.png", size: 300 },
    { name: "text1.txt", size: 100 },
    { name: "text2.txt", size: 150 },
    { name: "photo1.jpg", size: 400 },
    { name: "photo2.jpg", size: 350 },
    { name: "program1.exe", size: 1000 },
    { name: "program2.exe", size: 1200 },
    { name: "data1.csv", size: 600 },
    { name: "data2.csv", size: 500 },
    { name: "report1.pdf", size: 800 },
    { name: "report2.pdf", size: 900 },
    { name: "image3.png", size: 250 },
    { name: "text3.txt", size: 175 },
    { name: "photo3.jpg", size: 450 },
    { name: "document3.pdf", size: 750 }
  ];
  
let obj={};
let arr=[];
let getEachFile=files.map((file)=>{
    let size =file.size
    return size
}).reduce((acc,cru)=>{
  return obj.totalFileSize=acc+cru;
},0)
console.log(obj)
let topFIVEvalu= files.map((topFiveFile)=>{
    return topFiveFile
}).sort((a,b)=>{
    return b.size-a.size;
}).slice(0,5)
console.log(topFIVEvalu);

files.reduce((acc,file)=>{
    let ext=file.name.split('.').pop();
    
        
    
},{})


// this is the output..............

//   {
//     totalSize: 9275,
//     largestFiles: [
//       { name: "program2.exe", size: 1200 },
//       { name: "program1.exe", size: 1000 },
//       { name: "report2.pdf", size: 900 },
//       { name: "report1.pdf", size: 800 },
//       { name: "document3.pdf", size: 750 }
//     ],
//     filesByExtension: {
//       pdf: ["document1.pdf", "document2.pdf", "report1.pdf", "report2.pdf", "document3.pdf"],
//       png: ["image1.png", "image2.png", "image3.png"],
//       txt: ["text1.txt", "text2.txt", "text3.txt"],
//       jpg: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
//       exe: ["program1.exe", "program2.exe"],
//       csv: ["data1.csv", "data2.csv"]
//     }
//   }
  