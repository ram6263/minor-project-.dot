import {toast} from "react-toastify"
const successMsg = (msg) => {
    toast.success(msg);
}
const errorMsg = (msg) => {
    toast.error(msg);
}

export {
    successMsg,
    errorMsg
}