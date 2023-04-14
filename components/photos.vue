<template>
    <div class="col-span-2 bg-white rounded-sm border-[0.3px] border-[#d8d8d8] red-text p-[10px]">
        <div class="text-[15px] font-medium border-b-[0.3px] border-[#d8d8d8] pt-2 flex justify-between">
           Photo Gallery
           <div class="flex text-[11px] text-light mt-1">
               <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="">Sign in</NuxtLink>
               <p class="px-1"> or </p>
               <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="">Register</NuxtLink>
               <p class="px-1"> add photos </p>
           </div>
        </div>

        <div class="mt-2.5 border-y-[.1px] border-dashed border-black">
            <div class="bg-[#424242] text-[12px] placeholder:text-[#666] p-1 rounded-md inline-flex items-center my-[2px] ml-2.5">
                <input class="outline-none text-[#666] w-[210px] pt-[3px] pl-[5px] pb-[1px]" type="text" placeholder="Search photos...">
                <icon class="text-white mx-2 text-[16px]" name="uil:search"/>
            </div>
        </div>

        <div class="text-[12px] mt-2.5 font-medium border-b-[0.3px] border-[#222] pt-2 flex justify-between px-2.5 py-[5px]">
           <p class="text-[#222]">2 albums</p>
           <div class="flex text-[11px] text-light mt-1">
               <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="">Recently Added</NuxtLink>
               <p class="px-1"> | </p>
               <NuxtLink class="cursor-pointer hover:text-[#626a9d]" to="">Most Commented</NuxtLink>
           </div>   
        </div>


        <div class="w-full flex justify-around items-center">
            <div class="inline-block my-2.5">
                <div class="h-[183px] bg-no-repeat bg-[url('https://images.webs.com/Apps/Photos/Images/Frames/Basic/album-frame.png')] inline-flex justify-center items-center overflow-hidden">
                <img class="h-[154px] w-[206px] m-3" src="https://thumbs.webs.com/Members/viewThumb.jsp?fileID=267382816&size=large&siteId=86268056&angle=0">
                </div>

                <div class="text-center mt-2.5">
                    <h2 class="text-[12px] cursor-pointer hover:text-[#626a9d] font-bold">Mike Geaorge</h2>
                    <p class="text-[10px] text-[#222] mt-1">6 Photos | Updated January 8, 2012</p>
                    <p class="text-[10px] text-[#222] mt-1">by <span class="text-[#9c2c2c] hover:text-[#626a9d]">[email protected]</span></p>
                </div>
            </div>

            <div class="inline-block mt-2.5">
                <div class="h-[183px] bg-no-repeat bg-[url('https://images.webs.com/Apps/Photos/Images/Frames/Basic/album-frame.png')] inline-flex justify-center items-center overflow-hidden">
                <img class="h-[154px] w-[206px] m-3" src="https://thumbs.webs.com/Members/viewThumb.jsp?fileID=267382505&size=large&siteId=86268056&angle=0">
                </div>

                <div class="text-center mt-2.5">
                    <h2 class="text-[12px] cursor-pointer hover:text-[#626a9d] font-bold">Mike Geaorge</h2>
                    <p class="text-[10px] text-[#222] mt-1">2 Photos | Updated January 8, 2012</p>
                    <p class="text-[10px] text-[#222] mt-1">by <span class="text-[#9c2c2c] hover:text-[#626a9d]">[email protected]</span></p>
                </div>
            </div>
        </div>

        <p class="text-[12px] text-[#222] text-right mt-2.5">1 - 2 of 2 Albums</p>

    </div>
</template>