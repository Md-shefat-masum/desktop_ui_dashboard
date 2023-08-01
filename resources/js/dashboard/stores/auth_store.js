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
            this.auth_information = auth_information;

            if(!this.is_admin_or_super_admin()){
                await this.logout(false);
                this.auth_status = false;
                return 0;
            }

            this.auth_status = auth_status;

            console.log(auth_status, auth_information);
        },
        logout: async function(check_confirm = true){
            if(check_confirm){
                let conf = await window.s_confirm("logout");
                if(!conf){
                    return 0;
                }
            }

            await cookieStore.set("AXRF-TOKEN","");
            location.href = "/dashboard/login"
        },
        is_admin: function(){
            return this.auth_information.roles.find(i=>i.name==="admin");
        },
        is_super_admin: function(){
            return this.auth_information.roles.find(i=>i.name==="super_admin");
        },
        is_admin_or_super_admin: function(){
            return this.auth_information.roles.find(i=>["admin","super_admin"].includes(i.name));
        },
    }
})
