<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- G.T.U UA. Space -->
    <div class="corporation-card-container">
      <div class="corporation-card">
        <div class="card-front bg-gray-800/70 p-6 rounded-lg">
          <div class="flex justify-center gap-4 mb-4">
            <img src="https://images.evetech.net/corporations/98571108/logo?size=128"
              alt="G.T.U EVE Online corporation logo" class="w-24 h-24">
            <img src="https://images.evetech.net/alliances/99010522/logo" alt="UA. Space Eve Online alliance logo"
              class="w-24 h-24">
          </div>
          <h3 class="text-xl text-gray-100 mb-4 text-center">G.T.U</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">✓ Хайсек корпорація для новачків</li>
            <li class="text-gray-300">✓ Відсутні податки та війни</li>
            <li class="text-gray-300">✓ Без обов'язків по активності</li>
            <li class="text-gray-300">✓ Тимчасового не проводимо корпоративних заходів</li>
          </ul>
        </div>
        <div class="card-back bg-gray-800/70 p-6 rounded-lg">
          <h4 class="text-gray-100 font-semibold mb-2">Додаткова інформація:</h4>
          <ul class="space-y-2 text-gray-300">
            <li>✓ Безкоштовні кораблі для новачків</li>
            <li>✓ Допомога з місіями</li>
            <li>✓ Дружня атмосфера</li>
            <li>✓ Щоденні флоти</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Vovkulaki UA. Space -->
    <div class="corporation-card-container">
      <div class="corporation-card">
        <div class="card-front bg-gray-800/70 p-6 rounded-lg">
          <div class="flex justify-center gap-4 mb-4">
            <img src="https://images.evetech.net/corporations/98571607/logo?size=128"
              alt="Vovkulaki EVE Online coporation logo" class="w-24 h-24">
            <img src="https://images.evetech.net/alliances/99010522/logo" alt="UA. Space Eve Online alliance logo"
              class="w-24 h-24">

          </div>
          <h3 class="text-xl text-gray-100 mb-4 text-center">Vovkulaki</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">✓ Корпорація з великою базою в NPC нуляx</li>
            <li class="text-gray-300">✓ Відсутність війн</li>
            <li class="text-gray-300">✓ Майнінг мунматів, руди, льоду</li>
            <li class="text-gray-300">✓ Планетарка, виробництво</li>
            <li class="text-gray-300">✓ Крабінг місій 4-х агентів</li>
            <li class="text-gray-300">✓ Без обов'язків по активності</li>
            <li class="text-gray-300">✓ Тільки базові навчальні вильоти</li>
          </ul>
        </div>
        <div class="card-back bg-gray-800/70 p-6 rounded-lg">
          <h4 class="text-gray-100 font-semibold mb-2">Додаткова інформація:</h4>
          <ul class="space-y-2 text-gray-300">
            <li>✓ Спеціалізація на PvE контенті</li>
            <li>✓ Досвідчені пілоти-наставники</li>
            <li>✓ Регулярні групові активності</li>
            <li>✓ Програма підтримки новачків</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Siromanci INIT. -->
    <div class="corporation-card-container">
      <div class="corporation-card">
        <div class="card-front bg-gray-800/70 p-6 rounded-lg">
          <div class="flex justify-center gap-4 mb-4">
            <img src="https://images.evetech.net/corporations/98612000/logo?size=128"
              alt="EVE Online Siromanci corporation logo" class="w-24 h-24">
            <a href="https://wiki.the-fuel-cartel.space/en/public/INITFAQ" target="_blank" rel="noopener noreferrer"
              title="INIT FAQ">
              <img src="https://images.evetech.net/alliances/1900696668/logo?size=128"
                alt="EVE Online INIT alliance logo" class="w-24 h-24">
            </a>
          </div>
          <h3 class="text-xl text-gray-100 mb-4 text-center">[INIT.] Siromanci</h3>
          <ul class="space-y-2">
            <li class="text-gray-300">✓ Головна корпорація UA Space</li>
            <li class="text-gray-300">✓ Входить до складу альянсу INIT.</li>
            <li class="text-gray-300">✓ Базування в клайм нулях (Fountain)</li>
            <li class="text-gray-300">✓ ПВП спрямування</li>
            <li class="text-gray-300">✓ Багато можливостей для заробітку</li>
            <li class="text-gray-300">✓ Обов'язки по активності</li>
          </ul>
        </div>
        <div class="card-back bg-gray-800/70 p-6 rounded-lg">
          <h4 class="text-gray-100 font-semibold mb-2">Додаткова інформація:</h4>
          <ul class="space-y-2 text-gray-300">
            <li>✓ Доступ до nullsec простору</li>
            <li>✓ Участь у великих альянсових операціях</li>
            <li>✓ Програми компенсації втрат</li>
            <li>✓ Розвинена інфраструктура альянсу</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.corporation-card-container {
  perspective: 1000px;
  height: 445px;
}

.corporation-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s, translate 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
}


.corporation-card-container:hover .corporation-card {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border: 2px solid transparent;
}

.corporation-card-container:hover .card-front,
.corporation-card-container:hover .card-back {
  animation: glowingBorder 0.8s ease-in-out;
}

@keyframes glowingBorder {

  0%,
  100% {
    border-color: transparent;
    box-shadow: none;
  }

  50% {
    border-color: rgba(255, 215, 0, 0.4);
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }
}

.card-front {
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
