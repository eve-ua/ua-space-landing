<template>
  <div class="video-background">
    <div style="position: relative; padding-bottom: 56.25%; /* 16:9 aspect ratio */ height: 0; overflow: hidden;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"
        src="https://www.youtube.com/embed/dZ5OHK4rYYY?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=dZ5OHK4rYYY"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.video-background {
  pointer-events: none;
  position: absolute;
  top: 465px;
  left: 50%;
  min-width: 1600px;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
}
</style>
