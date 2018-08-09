let todos=[];
let Formelement=document.querySelector('.form');

Formelement.addEventListener('submit',function(event){
   event.preventDefault();
   let xyz=todos.filter(each=>{
       return each==document.querySelector('.input').value;
   }).length>0;
   if(xyz){
       document.querySelector('.error').style.display='block';
   } else{
       let todoval=document.querySelector('.input').value;
       todos.push(todoval);
       document.querySelector('.error').style.display='none';
       let loc=JSON.stringify(todos);
       localStorage.setItem('todo-item',loc);
       
       
   }
   Formelement.reset();
   document.querySelector('.old').innerHTML=todos.map(each=>{
   return`<li>${each} <input type='checkbox' class='checkbox'></li>`
}).join('');
   
   });
localStorage.setItem('todo-item',todo);
if(localStorage.getItem()){
		document.documentElement.style.setProperty(
			'--MyPadding',
			`${localStorage.getItem('padding')}px`
		);
}

if(localStorage.getItem('color')){
   document.documentElement.style.setProperty(
   '--MyColor',`${localStorage.getItem('color')}`
   );
}