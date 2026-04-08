import { formLayout } from "./components/foodListform";
import { createOrderForm } from "./components/orderform";
import { classname } from "./const/app";
import { emptyTable, foods, orderedmenu } from "./data/foods";

const modal = document.createElement("div");
export function getFormOrder(){
    modal.classList.add(classname.show);
}
function removeShow(){
    modal.classList.remove(classname.show);
}

export function loadorder() {
    modal.classList.add(classname.modal);
    const orderForm = document.createElement(classname.div);
    orderForm.classList.add("modal-content");
    
    const openBtn = document.getElementById("openForm");

    openBtn.addEventListener("click", () => {
        getFormOrder();
    });

    modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        removeShow();
    }
    });

    orderForm.innerHTML= createOrderForm(emptyTable,orderedmenu)
    orderForm.querySelector(".close").addEventListener("click",(e)=>{
        removeShow();
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