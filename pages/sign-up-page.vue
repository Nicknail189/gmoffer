<template>
    <div>
        <div>
        <div class="relative bg-[url('https://static.websimages.com/static/motifs/Patriotic/img/usa.gif')] p-5 h-[150px] bg-no-repeat lg:w-[980px]">
           <div class="red-text text-[30px] gray-bg p-[5px] red-border inline-block">
               Government Money Offer
           </div>
           <div class="absolute top-[45%] right-[30%] p-2.5 red-border bg-[url('https://static.websimages.com/static/motifs/Patriotic/img/trans.png')]"></div>
        </div>

        <div class="bg-[#113769] p-2 red-border border-t-0">
            <ul>
                <NuxtLink to="/" @click="activeTab = 'Home'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Home
                </NuxtLink>
                <NuxtLink to="/" @click="activeTab = 'AboutUs'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        About Us
                </NuxtLink>
                <NuxtLink  to="/" @click="activeTab = 'ContactUs'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Contact Us
                </NuxtLink>
                <NuxtLink to="/" @click="activeTab = 'Photos'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Photo Gallery
                </NuxtLink>
                <NuxtLink to="/" @click="activeTab = 'WinnerList'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Winners list
                </NuxtLink>
            </ul>
        </div>

        <div class="red-border border-t-0 gray-bg">
            <div class="lg:grid grid-cols-3 gap-4 px-3 py-1">
                 <register/>
            </div>
            <br>
            <br>
            <br>
            <br>
            <p class="text-[9px] text-[#666] text-center py-2">Copyright&copy;2020</p>
        </div>
        </div>
        
        <div class="font-bold text-[#9e9b9b] p-1 leading-[12px] bg-black border-[2px] border-[#424242] text-[13px] mt-2.5 ml-1 inline-block hover:text-gray-300 cursor-pointer">Create a Free Photo Album at Webs.com</div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.icon {
    margin-right: 3px;
    margin-bottom: 5px;
    font-size: 20px;
}
</style>