<template>
    <div class="col-span-2 bg-white rounded-sm border-[0.3px] border-[#d8d8d8] red-text p-[10px]">
        <h2 class="text-[15px] font-medium border-b-[0.3px] border-[#d8d8d8] pt-2">
           Contact Us
        </h2>

        <br>
        <br>

        <p class="text-[12px] text-[#222] font-medium">We look forward to hearing from you!</p>
        <br>
        <br>
        <p class="text-[12px] text-[#222] font-medium">Please fill out the form below and click "Submit." We will get back to you as soon as possible!</p>
        <br>
        <br>
        <form action="" class="text-[12px] text-[#222] font-medium">
            <div>
                <label for=""><sup>*</sup>Name</label><br>
                <input v-model="name" class="h-[21px] w-[233px] outline-none border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="text"/>
            </div>
            <br>
            <div>
                <label for=""><sup>*</sup>Email Address</label><br>
                <input v-model="email" class="h-[21px] w-[233px] outline-none border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="email"/>
            </div>
            <br>
            <div>
                <label for=""><sup>*</sup>Phone Number (optional)</label><br>
                <input v-model.number="number" class="h-[21px] w-[233px] outline-none border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="number"/>
            </div>
            <br>
            <div>
                <label for=""><sup>*</sup>Your Message</label><br>
                <textarea v-model="message" class="mb-2 h-[144px] w-[422px] outline-none border-[#333] border-[.2px] rounded-sm px-[2px] py-[1px]" type="text"/>
            </div>

            <div class="w-full flex justify-center my-4">
            <button class="px-[6px] py-[1px] inline-block gray-bg border-[#333] border-[.2px] rounded-sm">Submit</button>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            email: '',
            number: '',
            message: '',
        }
    }
}
</script>