class Person { //THIS IS JUST AN OBJECT DECLARATION, NOT AN ARRAY DECLARATION.
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  addAge() {
    this.age += 1;
  }

  setName(newName) {
    this.name = newName;
    //console.log(`name changed`);
  }

}

const familyMembers = []; //ARRAY IS RIGHT HERE.

function submitFamilyMember() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  const familyMember = new Person(name, age, gender);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}


function reloadFamilyMembers() {
  const familyList = document.getElementById("familyMembers").tBodies[0];
  familyList.innerHTML = ""; //this will basically overwrites everything.

  for (const familyMember of familyMembers) {
    const row = document.createElement('tr');
    const index = familyMembers.indexOf(familyMember);
    row.innerHTML = `
      <td>${familyMember.name}</td>
      <td>${familyMember.age}</td>
      <td>${familyMember.gender}</td>
      <td>
        <button onclick="addAge(${index})">Add Age</button>
        <button onclick="newName(${index})">New Name</button>
      </td>
    `;

    familyList.appendChild(row);
  }
}

function addAge(index){
  //console.log('Changing Age.');
  familyMembers[index].addAge();
  reloadFamilyMembers();
}

function newName(index){
  //console.log('Changing Name.');
  const newName = prompt("Enter new name: ");
  familyMembers[index].setName(newName);
  reloadFamilyMembers();
}