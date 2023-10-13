
const button=document.querySelector(".increment");
const form=document.querySelector("#inputForm");
let data=[];
//let isDeleteClicked=false;
//let deletedItemCounter=0
let counter=0;


const text=document.querySelector(".taskID");
let taskNumber=0;
text.placeholder=`TN2023${(taskNumber).toString().padStart(5,0)}`
text.addEventListener("click",()=>{
  /*
  if(isDeleteClicked && deletedItemCounter>0){
    text.value=text.value;
    console.log(isDeleteClicked--)
    isDeleteClicked=false;  
  }else{
    text.value=`TN2023${(taskNumber++).toString().padStart(5,0)}`
  }*/
  text.value=`TN2023${(taskNumber++).toString().padStart(5,0)}`;
})

function callbackFunction(event){
  event.preventDefault();
  const myFormData=new FormData(event.target);

  const formDataObj={};
  myFormData.forEach((value,key)=>(formDataObj[key]=value)) 

  data.push(Array.from(myFormData.values()));
  //console.log(data);
  
  generateDiv(data);

  text.value=`TN2023${(taskNumber++).toString().padStart(5,0)}`
  //form.reset();



} 

function generateDiv(data){
  
  let taskID=data[counter][0];
  let taskText=data[counter][1];
  let startDate=data[counter][2];
  let endDate=data[counter][3];

  let mainDiv=document.querySelector('#outputContainer');

  let newDiv=document.createElement('div');
  let newTaskID=document.createElement('p');
  let newTask=document.createElement('INPUT');
  let newStartDate=document.createElement('INPUT');
  let newEndDate=document.createElement('INPUT');
  let deleteButton=document.createElement('button');
  let editButton=document.createElement('button');
  let taskCount=document.createElement('INPUT')
  let updateButton=document.createElement('button');

  newTaskID.className='taskid-paragraph';

  newTask.className='task-paragraph';
  newTask.setAttribute("type","text");
  newTask.readOnly=true;

  newStartDate.setAttribute("type","datetime-local");
  newStartDate.readOnly=true;
  newStartDate.className='startdate-paragraph';

  newEndDate.className='enddate-paragraph';
  newEndDate.setAttribute("type","datetime-local");
  newEndDate.readOnly=true;

  taskCount.className='task-count';
  taskCount.setAttribute("type","text");
  //taskCount.style.display=block;

  newDiv.className="task-container";


  /*let arrayItem=data[counter];
  let taskID=arrayItem[0];
  let taskText=arrayItem[1];
  let startDate=arrayItem[2];
  let endDate=arrayItem[3];
 */
  //let arrayItem=data[counter];

  newTaskID.innerHTML=`${taskID}`;
  taskCount.value=counter;
  newTask.value=taskText;
  newStartDate.value=startDate;
  newEndDate.value=endDate;
  
  deleteButton.id='addButton'
  deleteButton.innerText='Delete';
  deleteButton.onclick=()=>{
    //let current_count=taskCount.value;
    //data.splice(current_count,1);
    //console.log(data);
    //isDeleteClicked=true;
    //deletedItemCounter++;
    mainDiv.removeChild(newDiv);
  }

  updateButton.id='updateButton';
  updateButton.innerText='Update';
  updateButton.onclick=()=>{
    let current_count=taskCount.value;
    newTask.readOnly=true;
    data[current_count][1]=newTask.value;
    console.log(data);
  }

  editButton.id='editButton'
  editButton.innerText='Edit';
  editButton.onclick=()=>{
    if(newStartDate.readOnly){
      newTask.readOnly=false;
      newStartDate.readOnly=false;
      newEndDate.readOnly=false;
      editButton.innerText='Save'
    }
    else{
      newTask.readOnly=true;
      newStartDate.readOnly=true;
      newEndDate.readOnly=true;
      editButton.innerText='Edit'
    }
    
  }

  newDiv.appendChild(newTaskID);
  newDiv.appendChild(taskCount);
  newDiv.appendChild(newTask);
  newDiv.appendChild(newStartDate);
  newDiv.appendChild(newEndDate);
  newDiv.appendChild(editButton);
  newDiv.appendChild(deleteButton);
  newDiv.appendChild(updateButton);
  mainDiv.appendChild(newDiv);


  counter++;
  //return counter;
}

form.addEventListener('submit',callbackFunction);


/*
button.addEventListener("click",()=>{
  text.value="HelloWorld";
})
*/

