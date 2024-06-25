<template>
  <header>
    <ul>
      <li>Home</li>
      <li>About me</li>
      <li>Skills</li>
      <li>Career</li>
      <li>Capability</li>
    </ul>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: auto;
  background: white;
  font-size: 1.5rem;
  text-align: center;
  opacity: 0.9;
  box-shadow: 0 0 0.5rem hsl(0deg 0% 75% / 80%);
}
ul li {
  display: inline-block;
  padding: 1.5rem 2rem;
}
</style>
