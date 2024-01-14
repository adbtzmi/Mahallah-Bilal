const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil (count + 2) ;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});




let calcScrollValue = () => 
{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#383b43 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


document.getElementById("email-submit").addEventListener("click", function() { 
  // Perform the desired action when the button is clicked 
  var inputValue = document.getElementById("email-input").value; 
  alert("You have submit your email. Thankyou!"); 
}); 



let tabContent = document.querySelectorAll(".container__inner");
let tabItem = document.querySelectorAll(".container__item");

// For each element with class 'container__item'
for (let i = 0; i < tabItem.length; i++) {
  // if the element was hovered
  //you can replace mouseover with click
  tabItem[i].addEventListener("click", () => {
    // Add to all containers class 'container__inner_hidden'
    tabContent.forEach((item) => {
      item.classList.add("container__inner_hidden");
    });
    // Clean all links from class 'container__item_active'
    tabItem.forEach((item) => {
      item.classList.remove("container__item_active");
    });
    // Make visible correct tab content and add class to item
    tabContent[i].classList.remove("container__inner_hidden");
    tabItem[i].classList.add("container__item_active");
  });
}


