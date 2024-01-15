// You can use JavaScript to toggle the visibility of the navigation menu for mobile and tablet sizes
const checkbox = document.getElementById("nav_check");
const nav = document.querySelector("nav");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});






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
let currentTab = 0;

function showTab(tabIndex) {
  // Add 'container__inner_hidden' to all containers
  tabContent.forEach((item) => {
    item.classList.add("container__inner_hidden");
  });
  // Remove 'container__item_active' from all links
  tabItem.forEach((item) => {
    item.classList.remove("container__item_active");
  });
  // Show the correct tab content and add 'container__item_active' class
  tabContent[tabIndex].classList.remove("container__inner_hidden");
  tabItem[tabIndex].classList.add("container__item_active");
  // Update the current tab index
  currentTab = tabIndex;
}



// Event listener for next button
document.querySelector(".next-btn").addEventListener("click", () => {
  if (currentTab < tabItem.length - 1) {
    showTab(currentTab + 1);
  }
});

// Event listener for prev button
document.querySelector(".prev-btn").addEventListener("click", () => {
  if (currentTab > 0) {
    showTab(currentTab - 1);
  }
});

// Event listeners for individual tabs
for (let i = 0; i < tabItem.length; i++) {
  tabItem[i].addEventListener("click", () => {
    showTab(i);
  });
}






