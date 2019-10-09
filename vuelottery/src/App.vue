<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{margin: 0;padding: 0;text-decoration: none;list-style: none;font-style:normal}
body,html{height: 100%;}  
#app{
  height: 100%;
}
 .clearfix::after,
.clearfix::before {
    content: '';
    display: table;
}
.clearfix::after {
    clear: both;
}
.clearfix {
    zoom: 1;
}

</style>
