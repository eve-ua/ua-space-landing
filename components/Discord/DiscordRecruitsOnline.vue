<template>
  <div class="bg-gray-800/70 rounded-lg max-w-96 p-4 relative">
    <div class="player-widget-header">
      <h3 class="text-xl font-semibold text-gray-100 mb-4">{{ recruitersOnline.length > 0 ? 'Рекрутери онлайн' :
        'Рекрутери відійшли... 😞' }}</h3>
    </div>
    <div v-if="loading" class="text-gray-400">
      Завантаження...
    </div>
    <div v-else-if="error" class="text-red-400">
      {{ error }}
    </div>
    <div v-else>
      <div v-if="recruitersOnline.length === 0" class="text-gray-400">
        ..... </div>
      <div v-else class="space-y-3">
        <div v-for="player in recruitersOnline" :key="player.id" class="flex items-center space-x-3">
          <img :src="player.avatar_url" :alt="player.username" class="w-8 h-8 rounded-full">
          <div>
            <div class="text-gray-100 flex items-center gap-2">
              {{ player.username }}
              <span v-if="player.game?.name" class="text-sm text-gray-400">({{ player.game.name }})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vindicator-container mt-4 absolute bottom-0 left-32">
      <img src="/images/vindicator.webp" alt="Vindicator" class="vindicator-image">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const loading = ref(true)
const error = ref<string | null>(null)
const recruitersOnline = ref<DiscordMember[]>([])
interface DiscordMember {
  id: string
  username: string
  avatar_url: string
  game?: {
    name: string
  }
  suppress?: boolean
}

const recruites = [
  'Uries Shazih',
  '[SRMN] Alexey Nagaev',
  '[SRMN] lalaversutu',
  '[SRMN] Archeolog Kyivskyi',
  '[SRMN] DonDrakon Wilson',
  '[SRMN] Alex Drako'
]

const fetchDiscordData = async () => {
  try {
    const config = useRuntimeConfig()
    const response = await fetch(`https://discord.com/api/guilds/${config.public.discordServerId}/widget.json`)
    if (!response.ok) throw new Error('Failed to fetch Discord data')

    const data = await response.json()
    // filter only recruiters that are not suppressed (idle, mute, etc.)
    // TODO: use Discord Guild and Users API to include recruiter role in the filter
    recruitersOnline.value = data.members.filter((member: DiscordMember) =>
      recruites.includes(member.username) && member?.suppress !== true
    ).sort((a, b) => a.username.localeCompare(b.username))
  } catch (e) {
    error.value = 'Помилка завантаження даних'
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchDiscordData()
  // Refresh data every minute
  setInterval(fetchDiscordData, 60000)
})
</script>

<style scoped>
.vindicator-image {
  transform: scaleX(-1);
  animation: float 5s ease-in-out infinite;
  max-width: none;
  width: 550px;
  height: auto;
  top: 35px;
  left: 70px;
}

@keyframes float {
  0% {
    transform: scaleX(-1) translateY(0px);
  }

  50% {
    transform: scaleX(-1) translateY(-10px);
  }

  100% {
    transform: scaleX(-1) translateY(0px);
  }
}
</style>
