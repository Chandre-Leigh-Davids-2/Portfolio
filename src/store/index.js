import { createStore } from 'vuex'
// import axios from 'axios'
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    workExp: null,
    skill: null,
    softSkills:null,
    projects: null,
    contact: null
   
  },
  getters: {
  },
  mutations: {
    setjobTitle(state, payload) {
      state.jobTitle = payload
    },
    setabout (state, payload) {
      state.about = payload
    },
    seteducation (state, payload) {
      state.education = payload
    },
    setworkExp (state, payload) {
      state.workExp = payload
    },
    setskill (state, payload) {
      state.skill = payload
    },
    setsoftSkills (state, payload) {
      state.softSkills = payload
    },
    setprojects (state, payload) {
      state.projects = payload
    },
    setcontact (state, payload) {
      state.contact = payload
    },
  },
  actions: {
    async getData({commit}){
      try{
        let fetchInfo = await fetch('https://chandre-leigh-davids-2.github.io/port-api/index.json')
      let data = await fetchInfo.json()
      console.log(data);
      let { jobTitle,about,education,workExp,skill,softSkills,projects,contact} = data

      commit('setjobTitle',jobTitle)
      commit('setabout',about)
      commit('seteducation',education)
      commit('setworkExp',workExp)
      commit('setskill',skill)
      commit('setsoftSkills',softSkills)
      commit('setprojects',projects)
      commit('setcontact',contact)
      }
      catch (error){
        console.log(error);
      }
      
      
    }
  },
  modules: {
  }
})