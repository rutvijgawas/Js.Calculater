let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
	button.addEventListener('click', (e) =>{
	switch(e.target.innerText){
		case 'C':
		display.innerText ='';
		break;

		case'←':
		if(display.innerText){
		 display.innerText = display.innerText.slice(0,-1);
		}
        break;

        case'=':
        try{
        display.innerText = eval(display.innerText);
         }catch(err){
    	display.innerText = 'bhai error!!';
           }

        break;

		default:
		display.innerText += e.target.innerText;
		break;
	}

	});
});