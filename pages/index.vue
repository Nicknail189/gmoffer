<template>
    <div>
        <div class="w-auto">
        <div class="relative bg-[url('https://static.websimages.com/static/motifs/Patriotic/img/usa.gif')] p-5 h-[150px] bg-no-repeat lg:w-[980px]">
           <div class="red-text text-[30px] gray-bg p-[5px] red-border inline-block">
               Government Money Offer
           </div>
           <div class="absolute top-[45%] right-[30%] p-2.5 red-border bg-[url('https://static.websimages.com/static/motifs/Patriotic/img/trans.png')]"></div>
        </div>

        <div class="bg-[#113769] p-2 red-border border-t-0">
            <ul>
                <button @click="activeTab = 'Home'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Home
                </button>
                <button @click="activeTab = 'AboutUs'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        About Us
                </button>
                <button @click="activeTab = 'ContactUs'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Contact Us
                </button>
                <button @click="activeTab = 'Photos'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Photo Gallery
                </button>
                <button @click="activeTab = 'WinnerList'" class="nav-li">
                        <icon name="tabler:star-filled" />
                        Winners list
                </button>
            </ul>
        </div>

        <div class="red-border border-t-0 gray-bg">
            <div class="lg:grid grid-cols-3 gap-4 px-3 py-1">
                 <keep-alive>
                 <component :is="activeTab"/>
                 </keep-alive>
                <members-area/>
            </div>
            <p class="text-[9px] text-[#666] text-center py-2">Copyright&copy;2020</p>
        </div>
        </div>
        
        <div class="font-bold text-[#9e9b9b] p-1 leading-[12px] bg-black border-[2px] border-[#424242] text-[13px] mt-2.5 ml-1 inline-block hover:text-gray-300 cursor-pointer">Create a Free Photo Album at Webs.com</div>
    </div>
</template>

<script>
import Home from '/components/home.vue'
import AboutUs from '/components/about-us.vue'
import ContactUs from '/components/contact-us.vue'
import Photos from '/components/photos.vue'
import WinnerList from '/components/winner-list.vue'

export default {
  components: { Home, AboutUs, ContactUs, Photos, WinnerList, },
    data(){
        return{
            activeTab: 'Home',
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