let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];

  function PrintDeveloper() {
    arr
        .filter( emp => emp.profession === "developer")
        .forEach( emp => {console.log(emp)});
  }
  
  function addData() {
    //Write your code here, just console.log
    const newName = prompt("Enter your Name");
    const newAge = prompt("Enter your Age");
    const newProfession = prompt("Enter your Profession");

    if (!newName || !newAge || !newProfession) {
        alert("Enter correct information.");
        return;
    }

    arr.push({
        id: arr.length + 1,
        name: newName.trim(),
        age: Number(newAge),
        profession: newProfession.trim(),
    });

    console.log(arr[arr.length - 1]);
  }
  
  function removeAdmin() {
    arr = arr.filter((e) => e.profession !== "admin");
    console.log("Admin have been removed.");
  }
  
  function concatenateArray() {
    const newArr = [
        {
          id: arr.length + 1,
          name: "Adnan",
          age: 24,
          profession: "MD",
        },
        {
          id: arr.length + 2,
          name: "Ahmad",
          age: 27,
          profession: "student",
        },
        {
          id: arr.length + 3,
          name: "Azmi",
          age: 28,
          profession: "admin",
        },
      ];
    
      arr = arr.concat(newArr);
      console.log(arr);
    
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
  