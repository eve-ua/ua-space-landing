<template>

  <Head>
    <Title>UA Space - Найбільша українська спільнота EVE Online</Title>
    <Meta name="description"
      content="UA Space - провідна українська спільнота в EVE Online. Приєднуйтесь до найбільшої української корпорації в New Eden для спільних пригод та операцій." />
    <Meta name="keywords"
      content="UA Space, EVE Online, українська спільнота EVE Online, EVE Online Ukraine, EVE Online український альянс" />
    <Meta property="og:title" content="UA Space - Найбільша українська спільнота EVE Online" />
    <Meta property="og:description"
      content="UA Space - провідна українська спільнота в EVE Online. Приєднуйтесь до найбільшої української корпорації в New Eden для спільних пригод та операцій." />
    <Meta property="og:type" content="website" />
    <Link rel="canonical" href="https://eveua.space" />
  </Head>
  <div class="star-bg">
    <template v-if="isWinterPeriod()">
      <Snowflake />
    </template>
    <Header />
    <div class="max-w-7xl mx-auto px-8 pt-24">
      <header class="text-center mb-12" id="about">
        <h1 class="text-4xl text-gray-100 mb-2">UA Space - Найбільша українська спільнота EVE Online</h1>
        <p class="text-xl text-gray-400">Провідна українська корпорація в New Eden | Ukrainian EVE Online Community</p>
      </header>


      <main class="grid grid-cols-1 gap-8 overflow-x-hidden">
        <!-- <YoutubeBackground /> -->
        <div class="bg-gray-900/70 p-8 rounded-lg relative" style="margin-top: 7rem">
          <div class="flex items-center gap-2 mb-4">
            <h2 class="text-2xl text-gray-100">Про нас</h2>
            <a href="https://wiki.eveua.space/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-gray-200" title="EVE University Wiki">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </a>
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">Ми є відданою корпорацією EVE Online, що спеціалізується на
            [основні напрямки діяльності вашої корпорації].
            Приєднуйтесь до нас у New Eden для захоплюючих пригод та прибуткових операцій.</p>

        </div>

        <PlayerProgression class="mt-8" />

        <CorporationInfo class="mt-16" id="corporations" />
        <div class="text-center" id="community">
          <h2 class="text-2xl text-gray-100 mb-4">Приєднуйтесь до нашої спільноти</h2>
          <p class="text-gray-300 mb-6">Спілкуйтеся з нашими учасниками та слідкуйте за діяльністю корпорації</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DiscordWidget />
            <PlayerRecruitsOnline />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Shentox-Regular', sans-serif;
}

.star-bg {
  background-image: url('/images/star-bg.jpg');
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh;
}
</style>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'uk'
  }
})

const isWinterPeriod = (checkDate = new Date()) => {
  const month = checkDate.getMonth();
  return month === 11 || month === 0 || month === 1;
}

import Header from '~/components/Header.vue'
import YoutubeBackground from '~/components/Misc/YoutubeBackground.vue'
import Footer from '~/components/Footer.vue'
import DiscordWidget from '~/components/Discord/DiscordWidget.vue'
import CorporationInfo from '~/components/Corporation/CorporationInfo.vue'
import PlayerRecruitsOnline from '~/components/Discord/DiscordRecruitsOnline.vue'
import PlayerProgression from '~/components/Corporation/CorporationPlayerProgression.vue'
import Snowflake from '~/components/Misc/Snowflake.vue'
</script>
