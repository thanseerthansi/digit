import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg) => toast.success(msg, {
position: "top-left",
theme: "dark",
});
export const notifyerror = (msg) => toast.error(msg, {
position: "top-left",
theme: "dark",
});


