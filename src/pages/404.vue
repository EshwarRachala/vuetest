<template>
  <main-layout>
 <section class="vh-100 bg-washed-blue baskerville">
  <header class="tc ph5 lh-copy">
      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
      <h2 class="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
  </header>
  <p class="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
  <ul class="list tc pl0 w-100 mt5">
    <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">Home</a></li> 
  </ul>
</section>
  </main-layout>
</template>
<script>
    import MainLayout from '../layouts/Main.vue'
    export default {
        components: {
            MainLayout
        }
    }
</script>
<style scoped>
    .db {
        display: block;
    }
    
    .dib {
        display: inline-block;
    }
    
    .code {
        font-family: Consolas, monaco, monospace;
    }
    
    .baskerville {
        font-family: baskerville, serif;
    }
    
    .i {
        font-style: italic;
    }
    
    .fw1 {
        font-weight: 100;
    }
    
    .fw9 {
        font-weight: 900;
    }
    
    .vh-100 {
        height: 100vh;
    }
    
    .tracked-tight {
        letter-spacing: -.05em;
    }
    
    .lh-copy {
        line-height: 1.5;
    }
    
    .link {
        text-decoration: none;
        transition: color .15s ease-in;
    }
    
    .link:link,
    .link:visited {
        transition: color .15s ease-in;
    }
    
    .link:hover {
        transition: color .15s ease-in;
    }
    
    .link:active {
        transition: color .15s ease-in;
    }
    
    .link:focus {
        transition: color .15s ease-in;
        outline: 1px dotted currentColor;
    }
    
    .list {
        list-style-type: none;
    }
    
    .w-100 {
        width: 100%;
    }
    
    .black {
        color: #000;
    }
    
    .light-purple {
        color: #a463f2;
    }
    
    .bg-washed-blue {
        background-color: #f6fffe;
    }
    
    .hover-light-purple:hover {
        color: #a463f2;
    }
    
    .hover-light-purple:focus {
        color: #a463f2;
    }
    
    .pl0 {
        padding-left: 0;
    }
    
    .pv2 {
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
    
    .ph3 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    .ph5 {
        padding-left: 4rem;
        padding-right: 4rem;
    }
    
    .mb3 {
        margin-bottom: 1rem;
    }
    
    .mt4 {
        margin-top: 2rem;
    }
    
    .mt5 {
        margin-top: 4rem;
    }
    
    .tc {
        text-align: center;
    }
    
    .f1 {
        font-size: 3rem;
    }
    
    .f4 {
        font-size: 1.25rem;
    }
    
    .f5 {
        font-size: 1rem;
    }
    
    @media screen and (min-width: 30em) {
        .f4-ns {
            font-size: 1.25rem;
        }
    }
    
    @media screen and (min-width: 60em) {
        .mt5-l {
            margin-top: 4rem;
        }
        .f-headline-l {
            font-size: 6rem;
        }
        .f1-l {
            font-size: 3rem;
        }
        .f3-l {
            font-size: 1.5rem;
        }
    }
</style>