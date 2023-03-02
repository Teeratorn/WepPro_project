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
        ],
    },
    methods: {
        goHome() {
            location.replace("index.html")
        },
        goGame(url) {
            this.getJSON()
            location.replace(url)
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
        ],
        name: null,
        reviewText: null,
    },
    methods: {
        goHome() {
            location.replace("index.html")
        },
        goGame(url) {
            this.getJSON()
            location.replace(url)
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
