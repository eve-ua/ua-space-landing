<template>
  <div class="flex justify-center">
    <div class="rounded-lg overflow-hidden">
      <iframe :src="`https://discord.com/widget?id=${discordServerId}&theme=dark`" width="350" height="500"
        allowtransparency="true" frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
      </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const discordServerId = config.public.discordServerId
</script>
