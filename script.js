const password="jasim1234"

let admin=false

let projects=JSON.parse(localStorage.getItem("projects"))||[]

const container=document.getElementById("projectsContainer")

const panel=document.getElementById("adminPanel")

document.getElementById("adminBtn").onclick=()=>{

if(admin){
panel.style.display="block"
return
}

let pass=prompt("Enter admin password")

if(pass===password){
admin=true
panel.style.display="block"
render()
}
else{
alert("Wrong password")
}

}


/* ADD PROJECT */

function addProject(){

let title=document.getElementById("title").value
let desc=document.getElementById("desc").value
let link=document.getElementById("link").value

if(!title||!desc||!link){
alert("Fill all fields")
return
}

projects.push({
id:Date.now(),
title,
desc,
link
})

localStorage.setItem("projects",JSON.stringify(projects))

render()

}


/* DELETE */

function deleteProject(id){

projects=projects.filter(p=>p.id!==id)

localStorage.setItem("projects",JSON.stringify(projects))

render()

}


/* RENDER */

function render(){

container.innerHTML=""

projects.forEach(p=>{

let card=document.createElement("div")

card.className="project"

card.innerHTML=`

<h3>${p.title}</h3>

<p>${p.desc}</p>

<a href="${p.link}" target="_blank">View Project</a>

${admin?`<button onclick="deleteProject(${p.id})">Delete</button>`:""}

`

container.appendChild(card)

})

}

render()


/* TYPING EFFECT */

const text=[
"Full Stack Developer",
"WordPress Expert",
"UI UX Designer",
"SEO Specialist"
]

let i=0
let j=0
let current=""
let deleting=false

function type(){

current=text[i]

if(!deleting){
document.getElementById("typing").textContent=current.substring(0,j++)
}else{
document.getElementById("typing").textContent=current.substring(0,j--)
}

if(j==current.length){
deleting=true
setTimeout(type,1000)
return
}

if(j==0){
deleting=false
i++
if(i==text.length) i=0
}

setTimeout(type,100)

}

type()