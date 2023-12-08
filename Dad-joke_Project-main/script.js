const btnEL = document.getElementById("btn")
const jokeEL = document.getElementById("joke")

const apiKey="OBwXFpLSDO73i83u2342zw==zTb2kGXg4GkXmyZO";
const options={
    method: "GET",
    headers:{
        "X-Api-key":apiKey,
    },
};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
try {
    jokeEL.innerText="Updating....mdrtoast"
    btnEL.disabled=true;
    btnEL.innerText="Loading..."
    const response=await fetch(apiURL,options)
    const data=await response.json();
    btnEL.disabled=false;
    btnEL.innerText="TELL ME A Joke"
    jokeEL.innerText = data[0].joke;
    
} catch (error) {
    jokeEL.innerText = "An error happend,Please mdrfkr study for a while"
    console.log(error);
    
}

    
}


btnEL.addEventListener("click",getJoke)