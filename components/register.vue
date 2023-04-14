<template>
  <div
    class="col-span-2 bg-white rounded-sm border-[0.3px] border-[#d8d8d8] red-text p-[10px]"
  >
    <h2 class="text-[15px] font-medium border-b-[0.3px] border-[#d8d8d8]">
      Sign Up
    </h2>

    <div class="flex justify-center font-medium">
      <div
        class="my-2 text-[#222] text-[12px] flex flex-col justify-center w-11/12"
      >
        <h2 class="text-left">
          Already a member?
          <NuxtLink to="/sign-in-page" class="red-text hover:text-[#626a9d]"
            >Sign in here</NuxtLink
          >
        </h2>

        <div
          class="border-[.2px] border-[#d8d8d8] rounded-sm flex justify-center gap-2 p-[20px] mt-2.5 w-full"
        >
          <div class="w-full">
            <div class="flex items-center gap-1">
              <label for="email">Email</label><br />
              <input
                v-model="userAuth.email"
                class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                type="email"
              />
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="password">Password</label><br />
              <input
                v-model="userAuth.password"
                class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                type="password"
              />
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="retypepassword">Retype Password</label><br />
              <input
                v-model="userAuth.retypepassword"
                class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                type="password"
              />
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="name">Display Name</label><br />
              <input
                v-model="userAuth.name"
                class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                type="text"
              />
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="name">Birthday</label><br />
              <div>
                <input
                  v-model="userAuth.birthday"
                  class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                  type="text"
                />
                <div class="mt-1 flex items-center gap-1">
                  <input v-model="userAuth.age" type="checkbox" />
                  <p for="age">Don't display my age</p>
                </div>
              </div>
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="location">Location</label><br />
              <input
                v-model="userAuth.location"
                class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
                type="text"
              />
            </div>
            <br />
            <div class="flex items-center gap-1">
              <label for="gender">Gender</label><br />
              <select
                v-model="userAuth.gender"
                name="gender"
                id="gender"
                class="border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]"
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <br />
            <!-- <div class="flex items-center gap-1">
                       <label for="verification">Verification</label><br>
                       <input v-model="location" class="h-[21px] w-[200px] border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="text"/>
                   </div> -->
            <br />
            <br />
            <br />
            <div
              class="flex flex-col items-center justify-center border-t-[.2px] border-[#222] border-dashed w-full"
            >
              <button
                class="mt-2 px-[9px] py-[3px] font-bold cursor-pointer bg-[#6b6b6b] hover:bg-[#494949] border-[2px] border-[#8a8a8a] rounded-sm text-gray-200"
                @click="createUser"
              >
                Create My Account
              </button>
              <h2 class="text-left mt-1">
                <sup>*</sup> By signing up, you agree to the
                <span class="red-text hover:text-[#626a9d]"
                  >Terms of Service</span
                >
              </h2>
            </div>
          </div>
        </div>
        <h2 class="text-right text-[10px] mt-1 mr-20">
          Powered by <span class="red-text hover:text-[#626a9d]">Webs ID</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  width: 40%;
  text-align: right;
  font-weight: bold;
}
</style>

<script setup>
const userAuth = ref({});
const router = useRouter();

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const auth = getAuth();
const db = getFirestore();

const createUser = (e) => {
  createUserWithEmailAndPassword(
    auth,
    userAuth?.value?.email,
    userAuth?.value?.password
  )
    .then(async(userCredential) => {
    await addDoc(collection(db, "signup"), {
        name: userAuth?.value?.name,
        email: userAuth?.value?.email,
        birthday: userAuth?.value?.birthday,
        location: userAuth?.value?.location,
        gender: userAuth?.value?.gender,
    });
      await router.push({ path: "/" });
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>
