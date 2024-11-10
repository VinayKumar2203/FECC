const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];


let numYoungVotes = 0;
let numYoungPeople = 0;
let numMidVotesPeople = 0;
let numMidsPeople = 0;
let numOldVotesPeople = 0;
let numOldsPeople = 0;


voters.map((voter) => {
    // console.log(voter);
    if (voter.age <= 20) {
        numYoungVotes++;
        numYoungPeople++;
    }
    else if (voter.age > 20 && voter.age <= 45) {
        numMidVotesPeople++;
        numMidsPeople++;
    }
    else if (voter.age >= 45) {
        numOldVotesPeople++;
        numOldsPeople++;
    }
})

  let obj={
    numYoungVotes,
    numYoungPeople,
    numMidVotesPeople,
    numMidsPeople,
    numOldVotesPeople,
    numOldsPeople,
  };
  console.log(obj);

/* output
    {
    numYoungVotes: 0,
    numYoungPeople: 2,
    numMidVotesPeople: 5,
    numMidsPeople: 8,
    numOldVotesPeople: 2,
    numOldsPeople: 2,
  }
*/