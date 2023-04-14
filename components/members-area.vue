<template>
            <!-- members area -->
        <div class="bg-[#ededed] border-[1px] border-[#d8d8d8] p-2.5 mb-2.5 h-[70px]">
            <h4 class="text-[#626a9d] text-[15.4px] mb-[5px] border-[#d8d8d8] border-b-[1px] leading-[15px]">Members Area</h4>
            <div class="text-[13px] red-text flex items-end p-1 pl-0">
                <img class="mr-1 h-[16px] w-[16px]" src="https://images.webs.com/static/global/icons/silk/user.png" alt="">
                <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="/sign-in-page">Sign in</NuxtLink> 
                <p class="text-black px-1"> or </p>
                <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="/sign-up-page">Register</NuxtLink>
            </div>
        </div>
</template>