<template>
    <div class="col-span-2 bg-white rounded-sm border-[0.3px] border-[#d8d8d8] red-text p-[10px]">
        <h2 class="text-[15px] font-medium border-b-[0.3px] border-[#d8d8d8]">
           Sign In
        </h2>

        <div class="flex justify-center">
        <div class="my-2 text-[#222] text-[12px] flex flex-col justify-center lg:w-10/12">
            <h2 class="text-left">Not yet a member? <NuxtLink to="/sign-up-page" class="red-text hover:text-[#626a9d]">Register now for free!</NuxtLink></h2>

            <div class="border-[.2px] border-[#d8d8d8] rounded-sm flex justify-center gap-2 p-[20px] mt-2.5 ">
                <div class="text-right mt-1">
                <label for="email">Email</label><br><br>
                <label for="password">Password</label><br>
                </div>
                <div>
                   <div class="flex items-center gap-1">
                       <input v-model="userAuth.email" class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="email"/>
                   </div>
                   <br>
                   <div class="flex items-center gap-1">
                       <input v-model="userAuth.password" class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="password"/>
                   </div>
                   <br>
                   <div class="flex items-center gap-1">
                       <input type="checkbox" name="" id="">
                       <label for="">Remember me</label><br>
                   </div>
                   <br>
                   <div class="flex items-center justify-center">
                       <button class="px-[9px] py-[3px] font-bold cursor-pointer bg-[#6b6b6b] hover:bg-[#494949] border-[2px] border-[#8a8a8a] rounded-sm text-gray-200" @click="signInUser">Sign in</button>
                       <NuxtLink to="" class="text-[10px] red-text hover:text-[#626a9d] ml-2">Forget your password?</NuxtLink>
                   </div>
                </div>
            </div>


            <h2 class="text-right text-[10px] mt-1 mr-20">Powered by <span class="red-text hover:text-[#626a9d]">Webs ID</span></h2>
        </div>
        </div>
    </div>
</template>

<script setup>
const userAuth = ref({});
const router = useRouter();

 import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const signInUser = () => {
signInWithEmailAndPassword(auth, userAuth?.value?.email, userAuth?.value?.password)
  .then((userCredential) => {
    router.push({path : '/'})
  })
  .catch((error) => {
    alert(error.message)
  });
};
</script>
