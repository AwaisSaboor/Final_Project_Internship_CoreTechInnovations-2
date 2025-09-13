
// sticky header start from here =======================================================================

document.addEventListener('DOMContentLoaded', () => {
    class HeaderHandler {
      constructor() {
        this.header = document.getElementById('header');
        this.previousScrollTop = 0;
  
       
        this.header.style.position = "fixed";
        this.header.style.width = "100%";
        this.header.style.top = "0";
        this.header.style.zIndex = "1000";
        this.header.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  
      
        window.addEventListener('scroll', this.onScroll.bind(this));
      }
  
      hideHeader() {
       
        this.header.style.transform = "translateY(-100%)";
        this.header.style.opacity = "0";
      }
  
      showHeader() {
       
        this.header.style.transform = "translateY(0)";
        this.header.style.opacity = "1";
      }
  
      onScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (currentScrollTop > this.previousScrollTop && currentScrollTop > 100) {
        
          this.hideHeader();
        } else if (currentScrollTop < this.previousScrollTop) {
       
          this.showHeader();
        }
  
        
        this.previousScrollTop = currentScrollTop;
      }
    }
  
 
    new HeaderHandler();
  });
  


  // contact form js

  (function () {
   
    emailjs.init("kRuNJU84zP0dy9I_K"); // Replace with your EmailJS user ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = "service_ybu64by"; // Replace with your service ID
    const templateID = "template_et0biav"; // Replace with your template ID

    // Send the form using EmailJS
    emailjs.sendForm(serviceID, templateID, event.target)
        .then(() => {
            alert("Your email has been sent successfully!");
            document.getElementById("contactForm").reset(); 
        })
        .catch((error) => {
            alert("There was an error sending your email. Please try again later.");
            console.error("EmailJS Error:", error);
        });
}




// model -------------------

function openModel(){
  document.getElementById("myModel").showModal();
}
function closeModel(){
  document.getElementById("myModel").close();
}


// active function 

function showDiv(divId) {
         

  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(function (box) {
      box.style.display = 'none'; 
  });


  const selectedDiv = document.getElementById(divId);
  selectedDiv.style.display = 'block'; 
}


showDiv('div1');



console.log('awais' - 1);