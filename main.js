var names_of_people = [];
    
function Submit()
{
    var GuestName = document.getElementById("Enter_name").value;
	names_of_people.push(GuestName);
	document.getElementById("Display_names").innerHTML=names_of_people;
	console.log(names_of_people);    
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
}
function Show_list()
{
	
	var i = names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("Show_names").innerHTML=i.toString();
	}


function sorting()
	{
		names_of_people.sort();
		var i = names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("Sorted_names").innerHTML = i.toString();
		}
		


function Search()
{
	var s = document.getElementById("Search_names").value;
	var found = 0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found = found+1;
			}	
		}
	document.getElementById("Search_names").innerHTML="name found "+found+" Time/s";
	console.log("found name "+found+" time/s");
}
