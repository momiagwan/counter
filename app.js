var increase = document.querySelector(".increase")
var rese = document.querySelector(".rese")
var decrease = document.querySelector(".decrease")
var num = document.querySelector(".num")



increase.addEventListener(`click`, function(){num.textContent=+num.textContent + 1} )

decrease.addEventListener(`click`, function(){num.textContent=+num.textContent - 1} )

rese.addEventListener(`click`, function(){location.reload()} )