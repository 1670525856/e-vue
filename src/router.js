import Vue from 'vue';
import VueRouter from 'vue-router';


import home from './components/home'

import mima from './components/information/mima';
import uncertified from './components/information/prove-uncertified';
import failed from './components/information/prove-failed';
import certified from './components/information/prove-certified'
import certification from './components/information/prove-certification'
import content from './components/content'
import mydata from './components/information/mydata1'
import mydata2 from './components/information/mydata2'

import content2 from './components/content2'
import upload from './components/course/upload'
import upload2 from './components/course/upload2'
import upload3 from './components/course/upload3'

import manage from './components/course/manage'

import content3 from './components/content3'
import qaanswer from './components/myqa/qa-answer'
import question from './components/myqa/qa-question'

import login1 from './components/login/login1'
import login2 from './components/login/login2'
import login3 from './components/login/login3'


import user from './components/user'
import user2 from './components/user2'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: user,
        children: [
            {
                path: '/',
                component: login1,
            }, {
                path: '/login1',
                component: login1,
            },
            {
                path: '/login2',
                component: login2,
            },
            {
                path: '/login3',
                component: login3,
            },
        ]
    },
    {
        path: '/user2',
        component: user2,
        children: [
            {
                path: '/',
                component: home,
            },
            {
                path: '/home',
                component: home,
            },
            {
                path: '/content',
                component: content,
                children: [
                    {
                        path: '/',
                        component: mydata,
                    },
                    {
                        path: '/mima',
                        component: mima
                    },
                    {
                        path: '/prove',
                        component: failed
                    },
                    {
                        path: '/uncertified',
                        component: uncertified
                    },
                    {
                        path: '/certified',
                        component: certified
                    },
                    {
                        path: '/certification',
                        component: certification
                    },
                    {
                        path: '/mydata',
                        component: mydata
                    },
                    {
                        path: '/mydata2',
                        component: mydata2
                    },

                ],
            },
            {
                path: '/content2',
                component: content2,
                children: [
                    {
                        path: '/',
                        component: manage,
                        children: [
                            {
                                path: '/content2/',
                                component: manage
                            },
                        ]
                    },
                    {
                        path: '/upload',
                        component: upload
                    },
                    {
                        path: '/upload2',
                        component: upload2
                    },
                    {
                        path: '/upload3',
                        component: upload3
                    },


                ],
            },
            {
                path: '/content3',
                component: content3,
                children: [
                    {
                        path: '',
                        component: qaanswer,
                    },

                    {
                        path: 'question',
                        component: question
                    },
                    {
                        path: 'qaanswer',
                        component: qaanswer
                    },
                ],
            },
        ]
    },
]

const router = new VueRouter({
    routes
});

export default router