var ques=['WELCOME TO THE QUIZ',
		   'Where covid-19 started??',
		   'What are its symptoms??',
		   'How it spreads??',
		   'What other viruses belong to the coronavirus family?',
		   'How does weather seem to affect the novel coronavirus?',
		   'In a study, which cells are found in COVID-19 patients bode well for long term immunity?',
		   ' In which age group the COVID-19 spreads?',
		   'What is Coronavirus?',
		   'From where coronavirus got its name?',
		   'What are the precautions that need to be taken to protect from the coronavirus?'];
var op1=['','India','Fever','From Bird to human','SARS and MERS','The virus cannot survive in hot, humid climates.','P-cell','COVID-19 occur in all age groups.','It is a large family of viruses.','Due to their crown-like projections.','Cover your nose and mouth when sneezing.'];
var op2=['','China','cold and cough','From animal to human','SARS and influenza','Cold temperatures can kill the virus.','T-cell','Coronavirus infection is mild in children.','It belongs to the family of Nidovirus.','Due to their leaf-like projections.','Add more garlic into your diet.'];
var op3=['','US','Tiredness','From human to human','SARS and HIV','It is not yet known.','D-cell','Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.','Both A and B are correct','Due to their surface stryucture of bricks','Visit your doctor for antibiotics treatment'];
var op4=['','Germany','All of The above','It doesnot spread!!','None of the above','None of the above','Endothelial Cells','All of the above','Only A is correct.','None of the above','Wash your hands after every hour.'];
var correct=['','China','All of the above','From human to human','SARS and MERS','It is not yet known.','T-cell','All of the above','Both A and B are correct','Due to their crown-like projections.','Cover your nose and mouth when sneezing.'];
var points=[0,3,3,4,5,7,3,2,3,5,10]
var num=0;
var total=0;
var corr;
function start()
{
	display();
	document.getElementById("tab1").style.visibility="hidden";
}
function display()
{
	document.getElementById('question').innerHTML=ques[num];
	document.getElementById('option1').innerHTML=op1[num];
	document.getElementById('option2').innerHTML=op2[num];
	document.getElementById('option3').innerHTML=op3[num];
	document.getElementById('option4').innerHTML=op4[num];
	document.getElementById('pt').innerHTML=points[num];
}
function hide()
{
	document.getElementById("tab1").style.visibility="visible";
	document.getElementById('score').innerHTML=total+"    out of 35";
	document.getElementById("tab").style.visibility="hidden";
	document.getElementById("tab2").style.visibility="hidden";
}
function next()
{
	num=num+1;
	if(num>10)
	{
		message();
		hide();
		num=num-1;
	}
	else
	{
		display();
		reset();
	}
	
}
 function message() 
 {
    alert ("NO QUESTIONS!!!!");
 }
function reset()
{
	document.getElementById('option1').style.backgroundColor="#eee";
	document.getElementById('option2').style.backgroundColor="#eee";
	document.getElementById('option3').style.backgroundColor="#eee";
	document.getElementById('option4').style.backgroundColor="#eee";
}
function previous()
{
	num=num-1;
	if(num<1)
	{
		message();
		num=num+1;
	}
	else
	{
		display();
		reset();
	}
}
function color(clicked_id)
{
	switch(num)
	{
		case 1:
			corr=2;
			break;
		case 2:
			corr=4;
			break;
		case 3:
			corr=3;
			break;
		case 4:
			corr=1;
			break;
		case 5:
			corr=3;
			break;
		case 6:
			corr=2;
			break;
		case 7:
			corr=4;
			break;
		case 8:
			corr=3;
			break;
		case 9:
			corr=1;
			break;
		case 10:
			corr=1;
			break;
	}
	if(document.getElementById(clicked_id).innerHTML==correct[num])
	{
		document.getElementById(clicked_id).style.backgroundColor="green";
		total=total+points[num];

	}
	else
	{
		document.getElementById(clicked_id).style.backgroundColor="red";
		document.getElementById('option'+corr).style.backgroundColor="green";

	}
}

