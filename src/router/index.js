import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import LearningGsap from '../views/LearningGsap.vue'
import LearningKinesis from '../views/LearningKinesis.vue'
import Kinesis from '../views/Kinesis.vue'
import DetailSkill from '@/views/DetailSkill.vue'
import Email from '@/views/Email.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/:skill',
    name: 'detail-skill',
    component: DetailSkill,
    props: true
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/learningGsap',
    name: 'learningGsap',
    component: LearningGsap
  },
  {
    path: '/learning-kinesis',
    name: 'learning-kinesis',
    component: LearningKinesis
  },
  {
    path: '/kinesis',
    name: 'kinesis',
    component: Kinesis
  },
  {
    path: '/email',
    name: 'email',
    component: Email
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
