import axios from "axios";
import Vue from 'vue'

function createInstance(){
    return axios.create({
        baseURL: proccess.env.BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    });
}

export default {
    install () {
        Vue.prototype.$axios = createInstance()
    }
};