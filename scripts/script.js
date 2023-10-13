const submit=document.querySelector('.submit');
const form=document.querySelector("#inputForm");
const submitButton=document.querySelector('.submit');
let data=[];
let counter=0;

const currentTaskID=document.querySelector(".taskID");
let currentTask=1;
//currentTaskID.placeholder=`TN2023${(currentTask).toString().padStart(5,0)}`;

//currentTaskID.value=`TN2023${(currentTask).toString().padStart(5,0)}`;


function getFormData(event){
  event.preventDefault();

  const taskFormData=new FormData(event.target);

  const formDataObj={};
  taskFormData.forEach((value,key)=>(formDataObj[key]=value))
  currentTaskID.value=`TN2023${(currentTask++).toString().padStart(5,0)}`;
  data.push(formDataObj);

  
  //console.log(data);
  generateDiv(data);

}

function generateDiv(data){

  const taskArray=data[counter];
  const {taskID,taskText,dateStart,dateEnd,taskProgress,taskComment}=taskArray;

  /*
  console.log(taskID);
  console.log(taskText);
  console.log(dateStart);
  console.log(dateEnd);
  console.log(taskProgress);
  console.log(taskComment);
  //console.log(`The ticket is ${taskID}`);
  */

  let mainDiv=document.querySelector('#outputContainer');

//Generate the child elements that will hold the formdata as well as buttons to enable editing, updating, deletion of the tasks.
  let newDiv=document.createElement('div');
  let subDivOne=document.createElement('div');
  let subDivTwo=document.createElement('div');
  let sectionOne=document.createElement('section');
  let sectionTwo=document.createElement('section');
  let sectionThree=document.createElement('section');
  let sectionFour=document.createElement('section');
  let divButtons=document.createElement('div');
  let newTaskID=document.createElement('label');
  let newTask=document.createElement('INPUT');
  let newStartDate=document.createElement('INPUT');
  let newEndDate=document.createElement('INPUT');
  let newComment=document.createElement('INPUT');
  let deleteButton=document.createElement('button');
  let editButton=document.createElement('button');
  let taskCount=document.createElement('INPUT');
  let updateButton=document.createElement('button');
  let ongoingRadio=document.createElement('INPUT');
  let completedRadio=document.createElement('INPUT');
  let taskIDLabel=document.createElement('label');
  let taskTextLabel=document.createElement('label');
  let newStartDateLabel=document.createElement('label');
  let newEndDateLabel=document.createElement('label')
  let taskProgressLabel=document.createElement('label');
  let ongoingLabel=document.createElement('label');
  let completedLabel=document.createElement('label');
  let newCommentLabel=document.createElement('label');

  sectionOne.className='inner-one';
  sectionTwo.className='inner-two';
  sectionThree.className='inner-three';
  sectionFour.className='inner-four';

  newDiv.className='task-div';
  subDivOne.className='subdiv-one';
  subDivTwo.className='subdiv-two';
  divButtons.className='button-holder'

  newTaskID.className='task-id-paragraph';

  taskCount.className='task-count';
  taskCount.setAttribute("type","text");
  taskCount.readOnly=true;

  newTask.className='task-paragraph';
  newTask.setAttribute("type","text")
  newTask.setAttribute("size","45");
  newTask.readOnly=true;
  

  newStartDate.className='startdate';
  newStartDate.setAttribute("type","datetime-local");
  newStartDate.readOnly=true;

  newEndDate.className='enddate';
  newEndDate.setAttribute("type","datetime-local");
  newEndDate.readOnly=true;

  newComment.className='task-comment';
  newComment.setAttribute('type','text');
  newComment.setAttribute('size','70');
  newComment.readOnly=true;

  ongoingRadio.className='ongoingTask';
  ongoingRadio.name=`taskProgress${counter}`;
  ongoingRadio.setAttribute('type','radio');

  completedRadio.className='completedTask';
  completedRadio.name=`taskProgress${counter}`;
  completedRadio.setAttribute('type','radio');
  
  ongoingLabel.htmlFor='ongoingTask';
  ongoingLabel.innerText='Ongoing';

  completedLabel.htmlFor='completedTask';
  completedLabel.innerText='Completed';

  taskCount.className="task-counter";

  newTaskID.innerHTML=`${taskID}`;
  taskCount.value=counter;
  newTask.value=taskText;
  newStartDate.value=dateStart;
  newEndDate.value=dateEnd;
  newComment.value=taskComment;
  
  taskIDLabel.innerText='Task ID';
  taskIDLabel.className='output-formlabel';
  taskIDLabel.name='output-taskid';
  taskIDLabel.htmlFor='output-taskid';

  taskTextLabel.innerText='Task Description';
  taskTextLabel.className='output-formlabel';
  taskTextLabel.name='output-tasktext';
  taskTextLabel.htmlFor='output-tasktext';

  newStartDateLabel.innerText='Start Date: ';
  newStartDateLabel.className='output-formlabel';
  newStartDateLabel.name='output-startdate';
  newStartDateLabel.htmlFor='output-startdate';

  newEndDateLabel.innerText='End Date: ';
  newEndDateLabel.className='output-formlabel';
  newEndDateLabel.name='output-enddate';
  newEndDateLabel.htmlFor='output-enddate';

  taskProgressLabel.innerText='Task Progress';
  taskProgressLabel.className='output-formlabel';
  taskProgressLabel.name='output-taskprogress';
  taskProgressLabel.htmlFor='output-taskprogress';

  newCommentLabel.innerText='Additional Comment';
  taskProgressLabel.className='output-formlabel';
  taskProgressLabel.name='output-comment';
  taskProgressLabel.htmlFor='output-comment';

  if(data[counter].taskProgress=='completed'){
    completedRadio.checked=true;
  }
  else{
    ongoingRadio.checked=true;
  }

  deleteButton.id='deleteButton';
  deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>';
  deleteButton.onclick=()=>{
    let current_count=taskCount.value;
    data[current_count].taskProgress='Deleted';
    mainDiv.removeChild(newDiv);
  }

  updateButton.id='updateButton';
  updateButton.innerHTML='<i class="fa-solid fa-file-arrow-up"></i>';
  updateButton.onclick=()=>{
    let current_count=taskCount.value;
    newTask.readOnly=true;
    newStartDate.readOnly=true;
    newEndDate.readOnly=true;
    newComment.readOnly=true;
    
    data[current_count].
    taskText=newTask.value;
    data[current_count].dateStart=newStartDate.value;
    data[current_count].dateEnd=newEndDate.value;
    data[current_count].taskProgress=taskProgress
    data[current_count].comment=newComment.value;

    if(completedRadio.checked){
      data[current_count].taskProgress='completed';
    }
    else{
      data[current_count].taskProgress='ongoing';
    }

    console.log(data);  
  }

  editButton.id='editButton';
  editButton.innerHTML='<i class="fa-solid fa-pencil"></i>';
  editButton.onclick=()=>{
    if(newStartDate.readOnly){
      newTask.readOnly=false;
      newStartDate.readOnly=false;
      newEndDate.readOnly=false;
      newComment.readOnly=false;
      editButton.innerHTML='<i class="fa-solid fa-floppy-disk"></i>';

    }
    else{
      newTask.readOnly=true;
      newStartDate.readOnly=true;
      newEndDate.readOnly=true;
      newComment.readOnly=true;
      editButton.innerHTML='<i class="fa-solid fa-pencil"></i>';
    }
    
  }

  sectionOne.appendChild(taskIDLabel);
  sectionOne.appendChild(newTaskID);
  sectionOne.appendChild(taskCount);
  sectionOne.appendChild(taskTextLabel);
  sectionOne.appendChild(newTask);
  
  sectionTwo.appendChild(newStartDateLabel);
  sectionTwo.appendChild(newStartDate);
  sectionTwo.appendChild(newEndDateLabel);
  sectionTwo.appendChild(newEndDate);

  sectionThree.appendChild(taskProgressLabel);
  sectionThree.appendChild(ongoingRadio);
  sectionThree.appendChild(ongoingLabel);
  sectionThree.appendChild(completedRadio);
  sectionThree.appendChild(completedLabel);
  
  sectionFour.appendChild(newCommentLabel);
  sectionFour.appendChild(newComment);

  divButtons.appendChild(editButton);
  divButtons.appendChild(deleteButton);
  divButtons.appendChild(updateButton);
  
  subDivOne.appendChild(sectionOne);
  subDivOne.appendChild(sectionTwo);
  subDivOne.appendChild(sectionThree);
  subDivOne.appendChild(sectionFour);
  subDivTwo.appendChild(divButtons);
  newDiv.appendChild(subDivOne);
  newDiv.appendChild(subDivTwo);
  
  mainDiv.prepend(newDiv);
  counter++

}

form.addEventListener('submit',getFormData);
