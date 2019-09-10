<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>