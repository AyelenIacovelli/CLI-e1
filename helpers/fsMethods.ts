import fs from "fs"
import { IExpenses } from "../interfaces/interfaces"

export const getWithFS = (file: string) : Promise <IExpenses[]> => {
    return new Promise ((resolve, reject) => {
        fs.readFile(`./${file}.json`, "utf-8", (err, content) => {
            if (err) {
                reject(err)
            }
            resolve(JSON.parse(content))
        })
    })
}

export const saveWithFS = (file: string, content: IExpenses[]): Promise<void> => {
    return new Promise ((resolve, reject) => {
        fs.writeFile (file + ".json", JSON.stringify(content), (err) => {
            if(err) {
                reject(err)
            }
            resolve(console.log("Gasto creado"))
        })
    })
}