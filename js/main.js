	wod();
function wod()
{
    
	var endPoint="http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=1dd56081134dd3cf851209d144b110273fbf7534e0919c705";
	var xmlHttp = new XMLHttpRequest();
    	xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            var response=JSON.parse(xmlHttp.responseText);
			
			
			document.getElementById("word").innerHTML=response.word.charAt(0).toUpperCase()+response.word.substr(1).toLowerCase();
			
			
			
			document.getElementById("meaning").innerHTML=response.definitions[0].text;
			
			
			document.getElementById("desc").innerHTML=response.examples[0].text;
			
			
    }
    xmlHttp.open("GET", endPoint, true); // true for asynchronous 
    xmlHttp.send(null);
}