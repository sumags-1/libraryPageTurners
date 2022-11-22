const db = require('./')

const seed_books = [
    {
        title: "The Challenge",
        author: "Danielle Steel",
        published: 2022,
        isbn: 98765432111,
        abstract: "A small community is tested when their children go missing while exploring a dangerous local peak, forcing them to band together during the crisis-- Provided by publisher.",
        language: "English",
        classification: "fiction",
        sub_classification: "adult",
        status: "available",
        copies: 9,
        image: "/images/ds_1.jpeg"
    },
    {
        title: "Blowback",
        author: "James Patterson",
        published: 2022,
        isbn: 98765432112,
        abstract: "Two CIA agents find their loyalties divided between chain of command and the Constitution when their former Director, now the president of the United States, asks them to carry out a clandestine power grab with deadly consequences.",
        language: "English",
        classification: "fiction",
        sub_classification: "adult",
        status: "available",
        copies: 8,
        image: "/images/jp_1.jpeg"
    },
    {
        title: "Desperation in Death",
        author: "J D Robb",
        published: 2022,
        isbn: 98765432156,
        abstract: "The #1 New York Times bestselling author presents a gripping new thriller that pits homicide detective Eve Dallas against a conspiracy of exploitation and evil...-- Provided by publisher.",
        language: "English",
        classification: "fiction",
        sub_classification: "adult",
        status: "available",
        copies: 7,
        image: "/images/jdrobb_1.jpeg"
    },
    {
        title: "The Neuroscience of You: How every brain is different and how to understand yours",
        author: "Chantel Spring Prat",
        published: 2022,
        isbn: 987654321605,
        abstract: "With style and wit, Chantel Prat takes us on a tour of the meaningful ways that our brains are dissimilar from one another. Using real-world examples, along with take-them-yourself tests and quizzes, she shows you how to identify the strengths and weakness of your own brain, while learning what might be going on in the brains of those who are unlike you. With sections like Focus, Navigate, and Connect, The Neuroscience of You helps us see how brains that are engineered differently ultimately take diverse paths when it comes time to prioritize information, use what they've learned from experience, relate to other people, and so much more...-- Provided by publisher.",
        language: "English",
        classification: "non_fiction",
        sub_classification: "adult",
        status: "available",
        copies: 7,
        image: "/images/ns_1.jpeg"
    },
    {
        title: "Like, Comment, Subscribe: Inside Youtube's Chaotic Rise to World Domination",
        author: "Mark Bergen",
        published: 2022,
        isbn: 987654321349,
        abstract: "The definitive, deeply reported account of YouTube, the company that upended media, culture, industry, and democracy-by a leading tech journalist Across the world, people watch over a billion hours of video on YouTube every day. The sheer amount of video produced there is beyond comprehension. Every minute, over five hundred hours of footage are uploaded to the site, the equivalent of eighty-two years of video added a day. That anyone can easily access any minute of this footage-and the trillion minutes more already on YouTube-is a technical feat unmatched in the history of computing. Everyone knows YouTube. And yet virtually no one knows how it works. ...-- Provided by publisher.",
        language: "English",
        classification: "non_fiction",
        sub_classification: "adult",
        status: "available",
        copies: 5,
        image: "/images/yt.jpeg"
    }
]

const seed_magazines = [
    {
        title: "Scout Life",
        author: "Boy Scouts of America",
        publication_information: "BSA, Irving, TX",
        language: "English",
        classification: "monthly",
        general_note: "From BSA since 1911",
        status: "available",
        copies: 40,
        image: "/images/magazine_gen.png"
    },
    {
        title: "Car and Driver",
        author: "",
        publication_information: "Ziff Davis Pub & Co, NY",
        language: "English",
        classification: "monthly",
        general_note: "From BSA since 1911",
        status: "available",
        copies: 90,
        image: "/images/magazine_gen.png"
    }
]

db.Book.deleteMany({}, (err, locations) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all books')

        db.Book.insertMany(seed_books, (err, books) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', books.length, "books")
            }
        })
    }
})

db.Magazine.deleteMany({}, (err, magazines) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all magazines')

        db.Magazine.insertMany(seed_magazines, (err, magazines) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', magazines.length, "magazines")
                process.exit()
            }
        })
    }
})