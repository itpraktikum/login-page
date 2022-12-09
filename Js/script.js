"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");
    const content = document.querySelector("#content");


    btn.addEventListener("click", () => {
        console.log("click!!!");

        content.classList.toggle("content-hidden");

        if( content.classList.contains("content-hidden")){
            btn.textContent = "Create block";
        }else{
            btn.textContent = "Exit block";
        }

    })
})