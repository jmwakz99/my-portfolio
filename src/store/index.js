import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadProjects: [{
                title: 'Meetup',
                description: 'This is a meetup website that enables the user to create meetups and register for meetups',
                siteLink: 'https://mikutano.netlify.com/',
                githubLink: 'https://github.com/jmwakz99/meetup',
                image: require("@/assets/images/project-one.png")
            },
            {
                title: 'Github Users Finder',
                description: 'This app enables users to find github users easily and find their latest repositories',
                siteLink: 'https://finder-github.netlify.com/',
                githubLink: 'https://github.com/jmwakz99/finder',
                image: require("@/assets/images/project-two.png")
            }

        ],

    },
    getters: {
        loadProjects(state) {
            return state.loadProjects
        }
    }


})