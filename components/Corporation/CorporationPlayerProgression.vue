<template>
  <div class="bg-gray-900/70 p-8 rounded-lg shadow-lg shadow-gray-900/50 z-10">
    <h2 class="text-2xl text-gray-100 mb-6">Шлях пілота</h2>
    <div class="flex flex-col md:flex-row justify-between items-start gap-4">
      <div v-for="(step, index) in steps" :key="index" class="flex-1 relative group">
        <!-- Progress line -->
        <div v-if="index < steps.length - 1"
          class="hidden md:block absolute h-1 bg-gray-700 w-[calc(100%-3rem)] top-8 left-[calc(50%+2rem)] z-0">
          <div class="h-full transition-all duration-1000 ease-in-out" :style="{
            backgroundColor: 'rgb(250, 180, 0)',
            width: animatedSteps.includes(index + 1) ? (index < currentStep ? '100%' : '0') : '0'
          }"></div>
        </div>

        <!-- Step circle -->
        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-500 relative z-10"
            :class="[
              animatedSteps.includes(index) ? (
                index < currentStep ? 'scale-100' :
                  index === currentStep ? 'scale-100' :
                    'border-gray-700 bg-gray-800 text-gray-600 scale-100'
              ) : 'scale-0 border-gray-700 bg-gray-800 text-gray-600',
              animatedSteps.includes(index) && index <= currentStep ? 'border-[rgb(250,180,0)]' : '',
              animatedSteps.includes(index) && index < currentStep ? 'bg-[rgba(250,180,0,0.2)] text-[rgb(250,180,0)]' : '',
              animatedSteps.includes(index) && index === currentStep ? 'bg-gray-800 text-[rgb(250,180,0)]' : ''
            ]">
            <img :src="step.icon" class="w-8 h-8 transition-all duration-500" :class="{
              'scale-100 opacity-100': animatedSteps.includes(index),
              'scale-0 opacity-0': !animatedSteps.includes(index)
            }" />
          </div>
          <h3 class="text-lg text-gray-200 font-medium text-center">{{ step.title }}</h3>
          <p class="text-md text-gray-400 text-center mt-2">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentStep = ref(3) // Set to show more progress steps

const animatedSteps = ref<number[]>([])

onMounted(() => {
  // Animate each step with a delay
  steps.forEach((_, index) => {
    setTimeout(() => {
      animatedSteps.value.push(index)
    }, 500 + (index * 1000)) // 500ms initial delay, then 1s between each step
  })
})


const steps = [
  {
    title: 'Новачок',
    description: 'Приєднуйся до корпорації та почни своє навчання',
    icon: 'images/32px-Recruitment.png',
  },
  {
    title: 'Учень',
    description: 'Вивчай основи гри та корпоративні процедури',
    icon: 'images/32px-Memberdelay.png',
  },
  {
    title: 'Пілот',
    description: 'Бери участь у флотах та корпоративних операціях',
    icon: 'images/32px-Member.png',
  },
  {
    title: 'Ветеран',
    description: 'Керуй флотами та навчай новачків',
    icon: 'images/32px-Corporationmembers.png',
  }
]
</script>
