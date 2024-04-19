function result()
{
    let header = document.querySelectorAll("h1");
    header.innerHTML = "my new heading";
    var name = document.getElementById("name").value ;
    var result = Math.random()*100;
    var res = document.getElementById("resultelement");
    //alert(name + "Has passedd with"+result);
    //res= res.innerHTML (name+"pass"+result.toFixed(2));

    if(result==0 || result<=35)
    {
        res.innerHTML = name + " has been failed with 👍👍👍" +result.toFixed(2) +"%";
    }
    else if(result ==36 || result <=50)
    {
        res.innerHTML = name + " has been passed  with first class 😂😂😂" +result.toFixed(2) +"%";
    }
    else if(result ==51 || result <=80)
    {
        res.innerHTML = name + " has been passed  with second class😊😊" +result.toFixed(2) +"%";
    }
    else if(result ==81 || result <=100)
    {
        res.innerHTML = name + " has been passed with distinction👌👌" +result.toFixed(2) +"%";
    }
    }
