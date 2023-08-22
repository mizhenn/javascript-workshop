const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const rootElement = document.getElementById("root");
  
    // Createing an <h1> element 
    const headerElement = document.createElement("h1");
    headerElement.innerText = "FREELANCERS";
  
    // Createing an <ul> element 
    const userListElement = document.createElement("ul");
  
    //  Createing <li> elements
    users.forEach(user => {
      const listItemElement = document.createElement("li");
      listItemElement.innerText = `${user.name}, ${user.age}, ${user.occupation}`;
      userListElement.appendChild(listItemElement);
    });
  
    // Append the elements to the root element
    rootElement.appendChild(headerElement);
    rootElement.appendChild(userListElement);

}

  window.onload = main;

  