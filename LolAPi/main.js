var version="9.9.1";
var attack,attackPerLevel,attackSpeed, attackSpeedPerLevel,magicResist, magicResistPerLevel;

class championStats{        
    constructor(champName){
        var request = new XMLHttpRequest();
        request.open('GET', 'http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/champion/'+ champName + '.json', true);
        request.onload = function () {
            var info = JSON.parse(this.response);
            console.log(info);                
            attack=info.data[champName].stats.attackdamage;
            attackPerLevel=info.data[champName].stats.attackdamageperlevel;
            attackSpeed=info.data[champName].stats.attackspeed;
            attackSpeedPerLevel=info.data[champName].stats.attackspeedperlevel;
            magicResist=info.data[champName].stats.spellblock;
            magicResistPerLevel=info.data[champName].stats.spellblockperlevel;

            document.getElementById("stats").innerHTML += info.data[champName].name + "<br>";
            document.getElementById("stats").innerHTML += attack + " AD <br>";
            document.getElementById("stats").innerHTML += attackPerLevel + " AD/lvl <br>";
            document.getElementById("stats").innerHTML += attackSpeed + " AS <br>";
            document.getElementById("stats").innerHTML += attackSpeedPerLevel + " AS/lvl <br>";
            document.getElementById("stats").innerHTML += magicResist + " MR<br>";
            document.getElementById("stats").innerHTML += magicResistPerLevel + " MR/lvl<br><br>";                
        };      
        request.send();
    }
}

function validItemsPrintOut(goldVal){
	var request = new XMLHttpRequest();
	document.getElementById("itemList").innerHTML="";
	request.open('GET', 'http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/item.json', true);
	request.onload = function () {
	  	var info = JSON.parse(this.response);
	        console.log(info);
	        Object.keys(info.data).forEach(function(key,index){
	            if(info.data[key].gold.total <= goldVal && info.data[key].maps[11] === true)
	                document.getElementById("itemList").innerHTML += info.data[key].name + "<br>";
	        });
	};      
	request.send();
}

function exactItem(goldVal){
	var request = new XMLHttpRequest();
	document.getElementById("itemList").innerHTML="";
	request.open('GET', 'http://ddragon.leagueoflegends.com/cdn/'+version+'/data/en_US/item.json', true);
	request.onload = function () {
	  	var info = JSON.parse(this.response);
	        console.log(info);
	        Object.keys(info.data).forEach(function(key,index){
	            if(info.data[key].gold.total == goldVal && info.data[key].maps[11] == true)
	                document.getElementById("itemList").innerHTML += info.data[key].name + "<br>";
	        });
	};      
	request.send();
}

function champData(champName,one,two,three,four,five){
    document.getElementById("itemList").innerHTML="";
    document.getElementById("stats").innerHTML="";
//    var you= new championStats(champName);
//    var enemy1= new championStats(one);
//    var enemy2= new championStats(two);
//    var enemy3= new championStats(three);
//    var enemy4= new championStats(four);
//    var enemy5= new championStats(five);
	 avgVals();

}

function avgVals(){
    var summoner = "br0wnb0i";
    var apiKey = "RGAPI-7016d5d4-286a-4183-9820-247e336bc1a0";
    var url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summoner+'?api_key='+apiKey;
    var request = new XMLHttpRequest();
	document.getElementById("summonerStats").innerHTML="";
        request.open('GET', url, true);
	request.onload = function () {
                console.log(this.response);
	  	var info = JSON.parse(this.response);
	        console.log(info);
	};   
	request.send();
}