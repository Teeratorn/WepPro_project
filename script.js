var app = new Vue({
    el: '#app',
    data: {
        games: [
            {
                name: "Elden ring",
                dev: "FromSoftware Inc.",
                price: "1790",
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/np2Eb60bDep9fDWtqNNSzqZI.png',
                url: "eldenring.html",
                reviews: [{ name: 'Bob', text: 'This game is so good. I\'m playing this for 5 hours now.' }],
            },
            {
                name: "Hogwarts Legacy",
                dev: "Avalance Software",
                price: "1590",
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png',
                url: "hogwartslegacy.html",
                reviews: [{ name: 'Gorge', text: 'Haha funny wizard game.' }],
            },
            {
                name: "Cyberpunk 2077",
                dev: "CD PROJEKT RED",
                price: "1799",
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png',
                url: "cyberpunk.html",
                reviews: [{ name: 'Michael', text: 'This game made me feel things.' }],
            },
            {
                name: "Dark soul 3",
                dev: "FromSoftware Inc.",
                price: "1500",
                img: 'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png',
                url: "darksoul3.html",
                reviews: [{ name: 'Gabriel', text: 'Even the stupid mob can oneshot me.' }],
            },
            {
                name: "Atelier Ryza",
                dev: "KOEI TECMO GAMES CO., LTD.",
                price: "1933",
                img: 'https://upload.wikimedia.org/wikipedia/en/1/13/Atelier_Ryza_decalless_cover_art.jpg',
                url: "atelierryza.html",
                reviews: [{ name: 'Sarah', text: 'The alchemy system is so good. I think want to be an alchemist.' }],
            },
            {
                name: "FINAL FANTASY® XIII",
                dev: "Square Enix",
                price: "507",
                img: 'https://upload.wikimedia.org/wikipedia/en/4/47/Final_Fantasy_XIII_EU_box_art.jpg',
                url: "finalfantasyxiii.html",
                reviews: [{ name: 'Helen', text: 'Lightning is so cool. I think I\'m in love.' }],
            },
            {
                name: "hololive ERROR",
                dev: "株式会社Mogura",
                price: "189",
                img: 'https://i.scdn.co/image/ab67616d0000b273ef15617f0f6c074eff4cca94',
                url: "hololiveerror.html",
                reviews: [{ name: 'Aki', text: 'The story is well written. And the asmosphere in the game is so scary.' }],
            },
            {
                name: "Tales of Arise",
                dev: "Bandai Namco Studios Inc.",
                price: "1490",
                img: 'https://i.scdn.co/image/ab67616d0000b2735b532c0d5dae210bfad3b3af',
                url: "talesofarise.html",
                reviews: [{ name: 'Eric', text: 'I love the story so much. And also Rinwell is so cute.' }],
            },
            {
                name: "Va-11 Hall-A",
                dev: "Sukeban Games",
                price: "239",
                img: 'https://e.snmc.io/lk/lv/x/2b3b39f5251d30c6ed64be0c724479a4/6958146',
                url: "va11halla.html",
                reviews: [{ name: 'Jill', text: 'The story is so good. And I love to be a bartender in a cyberpunk world.' }],
            },
        ],
        gameName: null,
    },
    computed: {
        filterGames() {
            return this.games.filter((data) => data.name.includes(this.gameName))
        }
    },
    methods: {
        goHome() {
            this.getJSON()
            location.href = "index.html"
        },
        goGame(url) {
            this.setJSON()
            location.href = url
        },
        setJSON() {
            const myJSON = JSON.stringify(this.games)
            localStorage.setItem("Games", myJSON)
        },
        getJSON() {
            let text = localStorage.getItem("Games")
            this.games = JSON.parse(text)
        }
    },
})
var app1 = new Vue({
    el: '#app1',
    data: {
        games: app.games,

        name: null,
        reviewText: null,
    },
    methods: {
        goHome() {
            app.goHome()
        },
        addReview(game) {
            game.reviews.push({ name: this.name, text: this.reviewText })
            this.name = null
            this.reviewText = null
            this.setJSON()
        },
        removeReview(review, i) {
            review.splice(i, 1)
            this.setJSON()
        },
        setJSON() {
            const myJSON = JSON.stringify(this.games)
            localStorage.setItem("Games", myJSON)
        },
    },
    created() {
        let text = localStorage.getItem("Games")
        this.games = JSON.parse(text)
    }
})
