const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


function filterList(value,alList){
    return alList.filter((icon)=>{
        if (value ==="all"){
            return true;
        }
         if(value === icon.type){
             return true;
         }
         return false;
    })
    
};



function listIconsToHTML(value) {
  const filteredIcons = listIconsToHTML(value,icons)
   const output = document.querySelector('.icons-content');
    output.innerHTML='';
    
    filteredIcons.forEach((icon)=>{
      const{name,prefix, type, family}=icon;
      
      output.innerHTML +=`
        <div class="icon-box col">
           <div class="icon-card-inner">
              <div class="icon ${type}">
                 <i class="${family}${prefix}${name}"></i>
               </div>
               <div class="name">${name}</div>
          </div>
       </div>
  
      `
   });

};

listIconsToHTML('all');
const select=document.querySelector('.iconlist');
select.addEventListener('change',(event)=>{
    listIconsToHTML(event.target.value);
});

 
  


