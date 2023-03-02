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
            },
            {
                name: "Hogwarts Legacy",
                dev: "Avalance Software",
                price: "1590",
                img: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png',
                url: "hogwartslegacy.html",
            },
        ]
    },
    methods: {
        goHome() {
            location.replace("index.html")
        },
        goGame(url) {
            location.replace(url)
        },
    }
})