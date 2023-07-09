document.getElementsByClassName("training-btn")[0].addEventListener("click", ()=>{
    document.getElementById("training-wrap-cont").style.display = "block";
    document.getElementById("theory-wrap-cont").style.display = "none";
    document.getElementsByClassName("training-btn")[0].className = "training-btn training-btn-active";
    document.getElementsByClassName("training-btn")[1].className = "training-btn";
});

document.getElementsByClassName("training-btn")[1].addEventListener("click", ()=>{
    document.getElementById("training-wrap-cont").style.display = "none";
    document.getElementById("one-training-solution").style.display = "none";
    document.getElementById("theory-wrap-cont").style.display = "block";
    document.getElementById("two-training-solution").style.display = "none";
    document.getElementsByClassName("training-btn")[0].className = "training-btn";
    document.getElementsByClassName("training-btn")[1].className = "training-btn training-btn-active";
});

document.getElementsByClassName("training-operation")[0].addEventListener("click", ()=>{
    document.getElementById("one-member-wrap").style.display = "block";
    document.getElementById("two-member-wrap").style.display = "none";
    document.getElementById("two-training-solution").style.display = "none";
});

document.getElementsByClassName("training-operation")[1].addEventListener("click", ()=>{
    document.getElementById("one-member-wrap").style.display = "none";
    document.getElementById("one-training-solution").style.display = "none";
    document.getElementById("two-member-wrap").style.display = "block";
});

document.getElementById("one-member-wrap").addEventListener("submit", (e)=>{
    e.preventDefault();
    const formObj = e.target;
    const result = (parseInt(formObj[0].value)-parseInt(formObj[1].value))*parseFloat(formObj[3].value)+parseFloat(formObj[2].value);
    document.getElementById("one-training-solution-formule").innerHTML = `a<sub>${formObj[0].value}</sub> = ${formObj[2].value} + (${formObj[0].value} - ${formObj[1].value})${formObj[3].value} = ${result}`;
    document.getElementById("one-training-solution").style.display = "block";
});

document.getElementById("two-member-wrap").addEventListener("submit", (e)=>{
    e.preventDefault();
    const formObj = e.target;
    const resultD = (parseFloat(formObj[2].value)-parseFloat(formObj[4].value))/(parseInt(formObj[1].value)-parseInt(formObj[3].value));
    const result = (parseInt(formObj[0].value)-parseInt(formObj[1].value))*resultD+parseFloat(formObj[2].value);
    if(!resultD){
        alert("Ви вели однакові значення ідексів i та j. Змініть їх на різні значення.")
    }else{
        document.getElementById("two-training-solution-formule-d").innerHTML = `d = (${formObj[2].value} - ${formObj[4].value}) / (${formObj[1].value} - ${formObj[3].value}) = ${resultD}`;
        document.getElementById("two-training-solution-formule").innerHTML = `a<sub>${formObj[0].value}</sub> = ${formObj[2].value} + (${formObj[0].value} - ${formObj[1].value})${resultD} = ${result}`;
        document.getElementById("two-training-solution").style.display = "block";
    }
});