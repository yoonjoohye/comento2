<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Tutorial1 from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import Tutorial3 from './components/Tutorial3';
import Tutorial4 from './components/Tutorial4';

export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');
  body{
    margin:0;
    padding:0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size:15pt;
  }
</style>
