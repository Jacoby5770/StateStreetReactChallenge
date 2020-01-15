import { data } from '../config'

class TransactionService {
    constructor(data) {
        this.data = data
    }

    getAllTransactions = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.data)
            }, 200)
        })
    }
}

export default new TransactionService(data)