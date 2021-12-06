alert("26 year old Katie Johnson, daughter to Joanna and Brad, was just murdered on her daily run around Star Park. There are witnesses, lots of evidence, and several suspects for the case. You have been recruted as the detective of this heartbreaking murder. Can you bring justice to the Johnson family?")

let evidence_or_witness = prompt("At the start of the investigation do you (1) go the crime scene and mark possible pieces of evidence or (2) gather the witnesses and bring them back to the station")

if(evidence_or_witness == 1){
   let snack_or_evidence = prompt("As you are marking evidence you find some valuable information and items that need to be brought back to the station, however you are starving but it's not quite lunch break. Do you (1) take a snack break because you are hungry or (2) take all the evidence back to the station and try to find some suspects?")
   if(snack_or_evidence == 1){
       alert("Your are fired because it wasn't time for a lunch break and parts of the evidence don't make it back to the station in time. Game over...")
   } else{
       let suspects_or_news = prompt("Now that some evidence is brought back to the station do you (1) bring suspects down to the station for witnesses to identify the possible murderer or (2) contact the local news to put out an alert for the suspects so one hopefully turns themself in.")
       if(cliff_or_easy == 2){
           alert("All the suspects ran away from the alert and the murder can never be solved. You are sewed by the Joanna Johnson for dystroying a good case and you loose your job for endagering the community.Game over...")
       } else{
           alert("You solve the case and murder is found. Woohoo!! You are a town hero!!")
       }
   }

} else{
    alert("While you search for witnesses the murderer comes back to the crime scene and dystroys all evidence. The case can never be properly solved. Game over...")
}
