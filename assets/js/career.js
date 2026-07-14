/* FAQ */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const btn=item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

faqItems.forEach(i=>{

if(i!==item){

i.classList.remove("active");

}

});

item.classList.toggle("active");

});

});



const filterButtons = document.querySelectorAll(".filter-btn");
const jobCards = document.querySelectorAll(".job-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        jobCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});