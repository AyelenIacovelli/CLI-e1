"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const listOptions_1 = require("./helpers/listOptions");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let run = true;
    while (run) {
        const action = yield inquirer_1.default.prompt([
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
        ]);
        switch (action.chosenItem) {
            case 1:
                yield (0, listOptions_1.createNewExpense)();
                break;
            case 2:
                yield (0, listOptions_1.getAllExpenses)();
                break;
            case 99:
                run = false;
                break;
            default:
                run = false;
                break;
        }
    }
});
main();
