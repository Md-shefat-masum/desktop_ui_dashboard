import moment from "moment";
import axios from "axios";
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common["Authorization"] = `Bearer ${window.localStorage?.token}`;

async function setToken(){
    await window.cookieStore.get('AXRF-TOKEN')
        .then(cookie=>{
            console.log('token set');
            window.axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.value}`;
        })
}
await setToken();

axios.defaults.baseURL = location.origin + '/api/v1';

axios.interceptors.request.use(async function (config) {
    remove_form_action_classes();
    [...document.querySelectorAll('form button')].forEach(e=>e.disabled = true);

    window.count_left_time_sec = 1;

    sessionStorage.setItem('last_time',moment().format("DD/MM/YYYY HH:mm:ss"));
    localStorage.setItem('last_time',new moment());

    return {
        ...config,
        // onUploadProgress,
        // onDownloadProgress,
    };
}, function (error) {
    // Do something with request error
    console.log('request error');
    return Promise.reject(error);
});

window.remove_form_action_classes = function () {
    [...document.querySelectorAll('form button')].forEach(e=>e.disabled = false);
    [...document.querySelectorAll('form .error')].forEach(e=>e.remove());
    [...document.querySelectorAll('form .form_group_error')].forEach(e=>e.classList.remove("form_group_error"));
}

window.render_form_errors = function(object, selector="name") {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            let el = document.querySelector(`input[${selector}="${key}`);
            if (!el) {
                el = document.getElementById(`${key}`);
            }

            /**
             *  if html element found then take action
             */
            if(el){
                el.parentNode.insertAdjacentHTML("afterend",`<div class="error alert_message text-warning"><p>${element[0]}</p></div>`);
                el.parentNode.parentNode.classList.add('form_group_error');
            }
        }
    }
}

window.axios.interceptors.response.use(
    async (response) => {
        remove_form_action_classes();
        await setToken();
        return response;
    },
    (error) => {
        remove_form_action_classes();
        let object = error.response?.data?.errors || error.response?.data?.data;
        render_form_errors(object);

        if (typeof error ?.response ?.data === "string") {
            console.log("error", error?.response?.data ? error?.response?.data : error.response);
        } else {
            console.log(error.response);
        }

        let status = error.response.status;
        window.toaster('error '+status+': '+error.response?.statusText,'error')
        throw error;
    }
);
