var giphSearch = Vue.component('giph-search', {
    data(){
        return {
            query: null,
            apiKey: 'tZTbkZkpbZhyDnHqQR5zzMAPF9bnQ27x',
            gifs: [],
            selectedGif: '',
            apiUrl:'https://api.giphy.com/v1/gifs/search'
        }
    },
    template:`
    <div>
        <h2 class="title">Search</h2>

       <input type="text" class="input" name="query" v-model="query" @keyup="fetchGifs">

       <div class="columns is-multiline" v-if="searchGifs">
         <div class="column is-one-quarter" v-for="gif in gifs">
           <div class="gif-box">
             <a href="#" @click.prevent="selectGif(gif.images)">
               <img class="gif-image" :src="gif.images.fixed_width.url">
             </a>
             <div v-show="selectedGif" class="card selectedGifPreview">
             <div class="card-body">
             <img src:="selectedGif" />
             <a href="#" class="btn btn-sm btn-danger" @click="selectedGif=''">x</a>
             </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    `,
    methods: {
            fetchGifs: function() {
              const url = `${this.apiUrl}?q=${this.query}&api_key=${this.apiKey}&limit=8`;
              axios.get(url)
                .then((response) => {
                    console.log(response)
                    this.gifs = response.data.data
                })
            },
            searchGifs: function() {
              const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${this.query}&limit=8`;
              fetch(url)

          },
          selectGif(gif) {
                // store the path of the GIF we selected, we'll pass the path to Laravel to create GIF comments
                console.log(gif);
                this.selectedGif = gif.fixed_height.url;

                // we've made a selection, so let's close the dropdown
                this.dropdownOpen = false;
            },
        },
    });














    var vue = new Vue({
        el: '#app'
    });
