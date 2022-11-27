<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios';


const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});

// function async login(){
//             this.processing = true
//             await axios.get('/sanctum/csrf-cookie')
//             await axios.post('/login',this.auth).then(({data})=>{
//                 this.signIn()
//             }).catch(({response})=>{
//                 if(response.status===422){
//                     this.validationErrors = response.data.errors
//                 }else{
//                     this.validationErrors = {}
//                     alert(response.data.message)
//                 }
//             }).finally(()=>{
//                 this.processing = false
//             })
//         },
onMounted(async (): Promise<void> => {
    await api.get('/sanctum/csrf-cookie')
    await api.post('/login', {'email':'test@example.com', 'password':'password'})
    return console.log('me')
  });


</script>

