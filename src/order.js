import { formLayout } from "./components/foodListform";
import { createOrderForm } from "./components/orderform";
import { emptyTable, foods, orderedmenu } from "./data/foods";

export function loadorder() {
    
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const orderForm = document.createElement("div");
    orderForm.classList.add("modal-content");
    
    const openBtn = document.getElementById("openForm");

    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
    });

    orderForm.innerHTML= createOrderForm(emptyTable,orderedmenu)
    orderForm.querySelector(".close").addEventListener("click",(e)=>{
        modal.classList.remove("show");
    });
    orderForm.querySelector("#orderBtn").addEventListener("click",(e)=>{
        ////
    });

    const form = orderForm.querySelector("#orderinfo");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const customer = form.customer.value;
        const phone = form.phone.value;
        const table = form.table.value;
        console.log({
            customer,
            phone,
            table
        });
    });

    modal.appendChild(orderForm);
    return modal;
}