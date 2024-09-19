// FindImage---------------;
const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];

  let result=[];
  
  filePaths.filter((item)=>{
    // console.log(item);
    if (!item.endsWith("pdf")) {
        // console.log(item);
        result.push(item);
    }
  })
  console.log(result);