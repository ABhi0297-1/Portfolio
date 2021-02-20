const readMoreBtn1 = document.querySelector(".readmore1");
const readMoreBtn2 = document.querySelector(".readmore2");
const readMoreBtn3 = document.querySelector(".readmore3");
const readMoreBtn4 = document.querySelector(".readmore4");
const readMoreBtn5 = document.querySelector(".readmore5");
const text1 = document.querySelector(".paraproj1");
const text2 = document.querySelector(".paraproj2");
const text3 = document.querySelector(".paraproj3");
const text4 = document.querySelector(".paraproj4");
const text5 = document.querySelector(".paraproj5");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".NavbarLink");
const progress = document.querySelector(".progress");
const navbarOffsetTop = navbar.offsetTop;
const percent = [90, 90, 85, 80, 70];
readMoreBtn1.addEventListener("click", (e) => {
	text1.classList.toggle("showmore");
});
readMoreBtn2.addEventListener("click", (e) => {
	text2.classList.toggle("showmore");
	console.log("ds");
});
readMoreBtn3.addEventListener("click", (e) => {
	text3.classList.toggle("showmore");
	console.log("ds");
});
// readMoreBtn4.addEventListener("click", (e) => {
// 	text4.classList.toggle("showmore");
// 	console.log("ds");
// });
// readMoreBtn5.addEventListener("click", (e) => {
// 	text5.classList.toggle("showmore");
// 	console.log("ds");
// });
window.addEventListener("scroll", (e) => {
	if (window.pageYOffset >= 20) {
		navbar.classList.add("sticky");
		console.log("he");
	} else {
		navbar.classList.remove("sticky");
	}
	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 150) {
			navbarLinks.forEach((navbarLink) => {
				navbarLink.classList.remove("change");
			});
			navbarLinks[i].classList.add("change");
			console.log("window", window.pageYOffset);
			console.log("section", section.offsetTop);
		}
	});
	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll(".progresspercent").forEach((el, i) => {
			el.style.width = `${percent[i]}%`;
			el.previousElementSibling.firstElementChild.textContent = percent[i];
		});
	}
});
