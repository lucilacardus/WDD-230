fetch("https://lucilacardus.github.io/finalproject/data/rentals.json")
.then(res=>{
    res.json().then(
        data=>{
            console.log(data);
            if(data.length > 0){
                let temp ="";

                data.foreach((rentals)=>{
                    temp+= '<tr>';
                    temp+= '<td> ' + rentals[i].name + '</td> ';
                    temp+= '<td> ' + rentals[i].maxpersons; + '</td> ';
                    temp+= '<td> ' + rentals[i].half; + '</td> ';
                    temp+= '<td> ' + rentals[i].full; + '</td> ';
                    temp+= '<td> ' + rentals[i].halfwalkin; + '</td> ';
                    temp+= '<td> ' + rentals[i].fullwalkin; + '</td> </tr>';
                })
                document.getElementById("data").innerHTML = temp;
            }}
    )})