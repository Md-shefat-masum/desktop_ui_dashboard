import { defineStore } from 'pinia'

export const auth_store = defineStore({
    id: 'auth_store',
    state: () => ({
        auth_status: false,
        auth_information: {},
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        auth_check: async function () {
            let res = await axios.post("/user/check-auth");
            const { auth_status, auth_information } = res.data;
            this.auth_status = auth_status;
            this.auth_information = auth_information;

            // console.log(auth_status, auth_information);
        },
        logout: async function(){
            let conf = await window.s_confirm("logout");
            if(conf){
                await cookieStore.set("AXRF-TOKEN","");
                location.href = "/dashboard/login"
            }
        }
    }
})
