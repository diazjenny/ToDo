import { api } from "../../../../utils"

const post = (data) => {

    api.post(data)

}

export const apiTask = { post }