import { useEffect } from "react";
import { toast } from "react-toastify";

export async function dashboardAction({ request }) {
  // await waait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  console.log(_action);

  // new user submission
  if (_action === "login") {
    try {
      const promise = new Promise(async (resolve, reject) => {
        try {

          const data = await fetch('http://127.0.0.1:3000/login', {
            method: 'post',
            mode: 'no-cors',
            headers: {
              "Content-Type": "text/plain"
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password
            })
          })
          resolve(data)
        } catch (e) {
          reject(e)
        }
      });

      promise.then((value) => {
        console.log("Data", value)
      })

      // const data = fetch('http://192.168.29.19:3000/login', {
      //   method: 'post',
      //   body: {
      //     email: values.email,
      //     password: values.password
      //   }
      // })
      // console.log("data ", data);

      return "data";
      // localStorage.setItem("userName", JSON.stringify(values.userName))
      // return toast.success(`Welcome ${values.userName}`)

    } catch (e) {
      throw new Error("There was a problem creating your account");
    }
  }

  // if (_action === "createBudget") {
  //     try {
  //         createBudget({
  //             name: values.newBudget,
  //             amount: values.newBudgetAmount

  //         })
  //         return toast.success("Budget Created")
  //     } catch (e) {
  //         throw new Error("There was problem creating budget")
  //     }
  // }

  // if (_action === "createExpense") {
  //     try {
  //         createExpense({
  //             name: values.newExpense,
  //             amount: values.newExpenseAmount,
  //             budgetId: values.newExpenseBudget
  //         })
  //         return toast.success(`Expense ${values.newExpense} created`)
  //     } catch (e) {
  //         throw new Error("There was problem creating expense")
  //     }
  // }

  // if (_action === "deleteExpense") {
  //     try {
  //         deleteItem({
  //             key: "expenses",
  //             id: values.expenseId
  //         })
  //         return toast.success(`Expense deleted`)
  //     } catch (e) {
  //         throw new Error("There was problem deleting budget")
  //     }
  // }

}