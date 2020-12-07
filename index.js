// DOM ELEMENTS

const body = document.querySelector("body")
const divOne = document.querySelector("#divOne")
const divTwo = document.querySelector("#divTwo")
const divThree = document.querySelector("#divThree")
const btnDiv = document.querySelector("#btnDiv")

// EVENT HANDLERS

body.addEventListener("click", ({ target }) => {
	if (target.matches("#btnOne")) {
		[divTwo, divThree].forEach(div => div.classList.add("invisible"))
		divOne.classList.remove("invisible")
	} else if (target.matches("#btnTwo")) {
		[divOne, divThree].forEach(div => div.classList.add("invisible"))
		divTwo.classList.remove("invisible")
	} else if (target.matches("#btnThree")) {
		[divOne, divTwo].forEach(div => div.classList.add("invisible"))
		divThree.classList.remove("invisible")
	} else if (target.matches("#btnAll")) {
		[divOne, divTwo, divThree].forEach(div => div.classList.remove("invisible"))
	}
})