var ques=['WELCOME TO THE QUIZ',
		   'Where covid-19 started??',
		   'What are its symptoms??',
		   'How it spreads??',
		   'What other viruses belong to the coronavirus family?'];
var op1=['','India','Fever','From Bird to human','SARS and MERS'];
var op2=['','China','cold and cough','From animal to human','SARS and influenza'];
var op3=['','US','Tiredness','From human to human','SARS and HIV'];
var op4=['','Germany','All of The above','It doesnot spread!!','None of the above'];
var correct=['','China','All of the above','From human to human','SARS and MERS'];
var points=[0,2,3,4,5]
var attempt=[0,0,0,0,0,0,0,0,0,0]
var i=0;
var total=0;
var corr;
var btn=document.getElementByTagName("button");
function start()
{
	document.getElementById('question').innerHTML=ques[i];
	document.getElementById('option1').innerHTML=op1[i];
	document.getElementById('option2').innerHTML=op2[i];
	document.getElementById('option3').innerHTML=op3[i];
	document.getElementById('option4').innerHTML=op4[i];
	document.getElementById('score').innerHTML=points[i];
}
function reset()
{
	document.getElementById('option1').style.backgroundColor="#eee";
	document.getElementById('option2').style.backgroundColor="#eee";
	document.getElementById('option3').style.backgroundColor="#eee";
	document.getElementById('option4').style.backgroundColor="#eee";
}
function check(clicked_id)
{
	switch(i)
	{
		case 1:
			corr=2;
			break;
		case 2:
			corr=3;
			break;
		case 3:
			corr=4;
			break;
		case 4:
			corr=1;
			break;
	}
	if(document.getElementById(clicked_id).innerHTML==correct[i])
	{
		document.getElementById(clicked_id).style.backgroundColor="Lightgreen";
	}
	else
	{
		document.getElementById(clicked_id).style.backgroundColor="red";
		document.getElementById('option'+corr).style.backgroundColor="Lightgreen";

	}
	for(var k=0; k<4; k++)
	{
		btn[k].disabled=true;
	}

	document.getElementById('score').innerHTML=points[i];
}
function next()
{
	i++;
	if(i>10)
	{
		alert("QUIZ ENDS HERE!!!!");
		i--;
	}
	else
	{
		start();
		reset();
	}
	if(attempt[i]==0)
	{
		for(var k=0; k<4; k++)
		{
			btn[k].disabled=false;
		}
	}
	else
	{
		for(var k=0; k<4; k++)
		{
			btn[k].disabled=true;
		}
	}
}
function previous()
{
	i--;
	if(i<1)
	{
		alert("NO QUESTIONS BEFORE THAT!!!!");
		i++;
	}
	else
	{
		start();
		reset();
	}
	if(attempt[i]==0)
	{
		for(var k=0; k<4; k++)
		{
			btn[k].disabled=false;
		}
	}
	else
	{
		for(var k=0; k<4; k++)
		{
			btn[k].disabled=true;
		}
	}
}