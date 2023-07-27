import inquirer from "inquirer";
import { createNewExpense, getAllExpenses } from "./helpers/listOptions";


const main = async() => {

    let run = true;

    while (run) {

        const action = await inquirer.prompt( [
            {
                type: "list",
                name: "chosenItem",
                message: "Seleccione una opción:",
                choices: [
                    {
                        value: 1,
                        name: "Registrar nuevo gasto"
                    },
                    {
                        value: 2,
                        name: "Ver todos los gastos"
                    },
                    {
                        value: 3,
                        name: "SALIR"
                    },
                ]
            }
        ])

        switch(action.chosenItem) {

            case 1: await createNewExpense();
            break;

            case 2: await getAllExpenses();
            break;

            case 99: run = false;
            break;

            default: run = false;
            break;
        }
    }
}

main()