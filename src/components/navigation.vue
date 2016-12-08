<template>
    <nav class="db dt-l w-100 border-box pa3 ph5-l">
  <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
    <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name">
  </a>
  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" v-bind:class="{ active: isActive }" href="/" title="Home">Home</a>  
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" v-bind:class="{ active: isActive }" href="/" title="Home">Home</a>  
    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" v-bind:class="{ active: isActive }" href="/" title="Home">Home</a>  
  </div>
</nav> 
</template>
<script>
    export default {
        components: {},
        computed: {
            isActive() {
                return this.href === window.location.pathname
            }
        }
    }
</script>

<style scoped>
    .active {
        color: red;
    }
    
    .border-box {
        box-sizing: border-box;
    }
    
    .br-100 {
        border-radius: 100%;
    }
    
    .db {
        display: block;
    }
    
    .dib {
        display: inline-block;
    }
    
    .h2 {
        height: 2rem;
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
    
    .w2 {
        width: 2rem;
    }
    
    .w-100 {
        width: 100%;
    }
    
    .dark-gray {
        color: #333;
    }
    
    .mid-gray {
        color: #555;
    }
    
    .pa3 {
        padding: 1rem;
    }
    
    .mr3 {
        margin-right: 1rem;
    }
    
    .mb2 {
        margin-bottom: .5rem;
    }
    
    .tc {
        text-align: center;
    }
    
    .f6 {
        font-size: .875rem;
    }
    
    .v-mid {
        vertical-align: middle;
    }
    
    .dim {
        opacity: 1;
        transition: opacity .15s ease-in;
    }
    
    .dim:hover,
    .dim:focus {
        opacity: .5;
        transition: opacity .15s ease-in;
    }
    
    .dim:active {
        opacity: .8;
        transition: opacity .15s ease-out;
    }
    
    @media screen and (min-width: 60em) {
        .dt-l {
            display: table;
        }
        .dtc-l {
            display: table-cell;
        }
        .w-25-l {
            width: 25%;
        }
        .w-75-l {
            width: 75%;
        }
        .ph5-l {
            padding-left: 4rem;
            padding-right: 4rem;
        }
        .mr4-l {
            margin-right: 2rem;
        }
        .mb0-l {
            margin-bottom: 0;
        }
        .tl-l {
            text-align: left;
        }
        .tr-l {
            text-align: right;
        }
        .f5-l {
            font-size: 1rem;
        }
    }
</style>