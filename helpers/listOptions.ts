import { newExpensePrompt } from "./expensePrompts";
import { getWithFS, saveWithFS } from "./fsMethods"

export const getAllExpenses = async() => {

    const currentExpenses = await getWithFS("expenses");
    console.log(currentExpenses)
}

export const createNewExpense = async() => {

    const newExpenseData = await newExpensePrompt();
    const currentExpenses = await getWithFS("expenses");

    currentExpenses.push(newExpenseData);
    await saveWithFS("expenses", currentExpenses);
}