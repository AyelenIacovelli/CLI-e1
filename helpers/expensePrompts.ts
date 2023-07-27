import inquirer from "inquirer";
import { IExpenses } from "../interfaces/interfaces";

export const newExpensePrompt = async(): Promise<IExpenses> => {
    return await inquirer.prompt([
        {
            type: "input",
            name:"name",
            message: "Ingrese el nombre de su gasto:"
        },
        {
            type: "number",
            name: "expense",
            message: "Ingrese el importe de su gasto:"
        },
    ])
}