const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ];
  
  // Get an array of all names
  // 1.
  function allNames(Arr){
    return Arr.map(character => character.name)
  }
  console.log(allNames(characters))

  // Get an array of all heights
  // 2.
  function allHeights(Arr){
    return Arr.map(character => character.height)
  }
  console.log(allHeights(characters))

  // Get an array of objects with just name and height properties
  // 3.
  function namesAndHeights(Arr){
    return Arr.map(character => ({
      name: character.name,
      height: character.name
    }) )
  }
  console.log(namesAndHeights(characters))

  // Get an array of all first names
  // 4.
  function getFirstNames(arr){
    return arr.map(character => (
      character.name.split(" ")[0]
    ))
  }
  console.log(getFirstNames(characters))

  // Get the total mass of all characters
  // 5.
  function getTotalMass(arr){
    return arr.map(character => parseInt(character.mass)).reduce((num,curr) => num+curr)
  }
  console.log(getTotalMass(characters))

  // Get the total height of all characters
  // 6.
  function getTotalHeight(arr){
    return arr.map(character => parseInt(character.height)).reduce((num,curr) => num+curr)
  }
  console.log(getTotalHeight(characters))

  // Get the total number of characters in all the character names
  // 7.
  function getTotalNumofCharacters(arr){
    return arr.map(character => character.name.length).reduce((num, curr) => num+curr)
  }
  console.log(getTotalNumofCharacters(characters))

  // Get the total number of characters by eye color (hint. a map of eye color to count)
  // 8.
  function countByEyeColor(arr) {
    return arr.reduce((result, person) => {
        const eyeColor = person.eye_color;

        result[eyeColor] = (result[eyeColor] || 0) + 1;

        return result;
    }, {});
}
  console.log(countByEyeColor(characters))

  // Get characters with mass greater than 100
  // 9.
  function filterByMass(arr){
    return arr.filter(character => character.mass>100)
  }
  console.log(filterByMass(characters))


  // Get characters with height less than 200
  // 10.
  function filterByHeight(arr){
    return arr.filter(character => character.height<200)
  }
  console.log(filterByHeight(characters))

  // Get all male 
  // 11.
  function filterByGender(arr){
    return arr.filter(character => character.gender === "male")
  }
  console.log(filterByGender(characters))

  // Get all female characters
  // 12.
  function filterByGender2(arr){
    return arr.filter(character => character.gender === "female")
  }
  console.log(filterByGender2(characters))

  // Sort by name
  // 13.
  function sortByNames(arr){
     arr.sort((a,b) => {
      let name1 = a.name.toLowerCase()
      let name2 = b.name.toLowerCase()
      if(name1 < name2) return -1;
      else if(name1 > name2) return 1;
      return 0;
    })
    return arr;
  }
  console.log(sortByNames(characters))
  // Sort by mass
  // 14. 
function sortByMass(arr){
  return arr.sort((a,b) => {
    let mass1 = parseInt(a.mass)
    let mass2 = parseInt(b.mass)
    if(mass1 > mass2) return -1;
  })
}
console.log(sortByMass(characters))

  // Sort by height
  // 15.
  function sortByHeight(arr){
    return arr.sort((a,b) => {
      let height1 = parseInt(a.height)
      let height2 = parseInt(b.height)
      if(height1 > height2) return 1;
    })
  }
  console.log(sortByHeight(characters))

  // Sort by gender
// 16. 
 function sortByGender(arr){
  return arr.sort((gen1,gen2) => {
    if(gen1.gender === gen2.gender) return -1;
    return 0;
  })
 }
 console.log(sortByGender(characters))

  // Does every character have blue eyes?
   // 17. 
   function blueEyesOnly(arr){
    return arr.every(character => character.eye === "blue")
   }
   console.log(blueEyesOnly(characters))

  // Does every character have mass more than 40?
  // 18.
   function trueOrFalseMass(arr){
    return arr.every(character => parseInt(character.mass) > 40)
   }
   console.log(trueOrFalseMass(characters))

  // Is every character shorter than 200?
   // 19.
  function trueOrFalseheight(arr){
    return arr.every(character => parseInt(character.height) < 200)
  }
  console.log(trueOrFalseheight(characters))

  // Is every character male?
  // 20. 
  function isEveryMale(arr){
    return arr.every(character => character.gender === "male")
  }
  console.log(isEveryMale(characters))
  // Is there at least one male character?
  // 21.
   function isOneMale(arr){
    return arr.some(character => character.gender === "male")
   }
   console.log(isOneMale(characters))
  // Is there at least one character with blue eyes?
  // 22.
  function hasBlueEyes(arr){
    return arr.some(character => character.eye === "blue")
   }
   console.log(hasBlueEyes(characters))
  // Is there at least one character taller than 200?
  // 23.
  function isTallerthan(arr){
    return arr.some(character => parseInt(character.height) > 200)
   }
   console.log(isTallerthan(characters))
  // Is there at least one character that has mass less than 50?
  24.
  function isSkilletorNot(arr){
    return arr.some(character => parseInt(character.mass) < 40)
   }
   console.log(isSkilletorNot(characters))



  