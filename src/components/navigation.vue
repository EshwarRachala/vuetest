<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                    aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span></button>
                <a class="navbar-brand" href="/">Grocery Mart</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <v-link href="/">Home</v-link>
                    <v-link href="/about">About</v-link>
                    <v-link href="/contact">Contact</v-link>
                </ul>
                <Login/>
            </div>    

        </div>
    </nav>

</template>

<script>

 import VLink from './VLink.vue';
 import Login from './login.vue';

 export default {
   components: {
     VLink, Login,
   },
 };

</script>