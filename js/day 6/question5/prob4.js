const data = [
    {
      name: "Superman",
      favoriteIceCreams: [
        "Strawberry",
        "Vanilla",
        "Chocolate",
        "Cookies & Cream",
      ],
    },
    {
      name: "Batman",
      favoriteIceCreams: [
        "Cookies & Cream",
        "Mint Chocolate Chip",
        "Chocolate",
        "Vanilla",
      ],
    },
    {
      name: "Flash",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
      name: "Aquaman",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
      name: "Green Lantern",
      favoriteIceCreams: [
        "Vanilla",
        "French Vanilla",
        "Vanilla Bean",
        "Strawberry",
      ],
    },
    {
      name: "Robin",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
  ];

  let Strawberry=0;
  let Vanilla=0;
  let Chocolate=0;
  let CookiesCream=0;
  let MintChocolateChip=0;
  let RockyRoad=0;
  let Pistachio=0;
  let Banana=0
  let FrenchVanilla=0;
  let VanillaBean=0;

  for (const IceCrea of data) {
      let favoriteIce=IceCrea.favoriteIceCreams;
    //   console.log(favoriteIce);
      for (const item of favoriteIce) {
        // console.log(item);
        if (item=="Strawberry") {
            console.log(item);
            Strawberry++;
        }
        else if(item=="Vanilla"){
         console.log(item)
         Vanilla++;
        }
        else if(item=="Chocolate"){
         console.log(item)
         Chocolate++;
        }
        else if(item=="Cookies & Cream"){
         console.log(item)
         CookiesCream++;

        }
        else if(item=="Mint Chocolate Chip"){
         console.log(item)
         MintChocolateChip++;
        }
        else if(item=="Rocky Road"){
         console.log(item)
         RockyRoad++;
        }
        else if(item=="Pistachio"){
         console.log(item)
         Pistachio++;
        }
        else if(item=="Banana"){
         console.log(item)
         Banana++;
        }
        else if(item=="French Vanilla"){
         console.log(item)
         FrenchVanilla++;
        }
        else if(item=="Vanilla Bean"){
         console.log(item)
         VanillaBean++;
        }
      }
    
      
  }
   
   console.log({
    Strawberry,
    Vanilla,
    Chocolate,
    CookiesCream,
    MintChocolateChip,
    RockyRoad,
    Pistachio,
    Banana,
    FrenchVanilla,
    VanillaBean
   })

  /*
  this is the output-------;
  {
      Strawberry: 3,
      Vanilla: 4,
      Chocolate: 5,
      "Cookies & Cream": 2,
      "Mint Chocolate Chip": 3,
      "Rocky Road": 1,
      Pistachio: 1,
      Banana: 1,
      "French Vanilla": 1,
      "Vanilla Bean": 1,
    }

  */