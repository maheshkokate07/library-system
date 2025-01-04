const books = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publication_year": 1960,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Classic"
        ],
        "description": "A classic novel depicting racial injustice in the American South.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
    },
    {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "publication_year": 1949,
        "rating": 4.5,
        "categories": [
            "Dystopian",
            "Science Fiction"
        ],
        "description": "A dystopian novel portraying a totalitarian society.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg"
    },
    {
        "id": 3,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "publication_year": 1813,
        "rating": 4.3,
        "categories": [
            "Classic",
            "Romance"
        ],
        "description": "A classic novel exploring themes of love, marriage, and social norms.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 4,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publication_year": 1925,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Classic"
        ],
        "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "id": 5,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "publication_year": 1851,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Adventure"
        ],
        "description": "The epic tale of Captain Ahab's obsession with the white whale.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Moby-Dick_FE_title_page.jpg/220px-Moby-Dick_FE_title_page.jpg"
    },
    {
        "id": 6,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "publication_year": 1954,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Adventure"
        ],
        "description": "An epic fantasy saga about the quest to destroy the One Ring.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 7,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publication_year": 1951,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Coming-of-age"
        ],
        "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"
    },
    {
        "id": 8,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "publication_year": 1937,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Adventure"
        ],
        "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/TheHobbit_FirstEdition.jpg/220px-TheHobbit_FirstEdition.jpg"
    },
    {
        "id": 9,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel Garcia Marquez",
        "publication_year": 1967,
        "rating": 4.3,
        "categories": [
            "Magical Realism",
            "Literary Fiction"
        ],
        "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg"
    },
    {
        "id": 10,
        "title": "War and Peace",
        "author": "Leo Tolstoy",
        "publication_year": 1869,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Epic"
        ],
        "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg/220px-Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg"
    },
    {
        "id": 11,
        "title": "The Odyssey",
        "author": "Homer",
        "publication_year": "8th century BCE",
        "rating": 4.3,
        "categories": [
            "Epic",
            "Mythology"
        ],
        "description": "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Odyssey-crop.jpg/220px-Odyssey-crop.jpg"
    },
    {
        "id": 12,
        "title": "The Divine Comedy",
        "author": "Dante Alighieri",
        "publication_year": "1320",
        "rating": 4.3,
        "categories": [
            "Epic",
            "Poetry"
        ],
        "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Dante_Domenico_di_Michelino.jpg/250px-Dante_Domenico_di_Michelino.jpg"
    },
    {
        "id": 13,
        "title": "The Brothers Karamazov",
        "author": "Fyodor Dostoevsky",
        "publication_year": 1880,
        "rating": 4.3,
        "categories": [
            "Classic",
            "Philosophical Fiction"
        ],
        "description": "A complex novel exploring themes of spirituality, morality, and human nature.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dostoevsky-Brothers_Karamazov.jpg/220px-Dostoevsky-Brothers_Karamazov.jpg"
    },
    {
        "id": 14,
        "title": "Crime and Punishment",
        "author": "Fyodor Dostoevsky",
        "publication_year": 1866,
        "rating": 4.3,
        "categories": [
            "Classic",
            "Psychological Fiction"
        ],
        "description": "A psychological thriller revolving around guilt, conscience, and redemption.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png"
    },
    {
        "id": 15,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "publication_year": 1890,
        "rating": 4.3,
        "categories": [
            "Gothic",
            "Philosophical Fiction"
        ],
        "description": "A novel about a man whose portrait ages while he retains his youth and beauty.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lippincott_doriangray.jpg/220px-Lippincott_doriangray.jpg"
    },
    {
        "id": 16,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "publication_year": 1932,
        "rating": 4.3,
        "categories": [
            "Dystopian",
            "Science Fiction"
        ],
        "description": "A dystopian vision of a future society obsessed with pleasure and conformity.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg"
    },
    {
        "id": 17,
        "title": "The Count of Monte Cristo",
        "author": "Alexandre Dumas",
        "publication_year": 1844,
        "rating": 4.3,
        "categories": [
            "Adventure",
            "Historical Fiction"
        ],
        "description": "An adventure novel of revenge, love, and redemption set in the early 19th century.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/220px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg"
    },
    {
        "id": 18,
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "publication_year": 1877,
        "rating": 4.3,
        "categories": [
            "Classic",
            "Romance"
        ],
        "description": "A tragic love story set against the backdrop of Russian high society.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AnnaKareninaTitle.jpg/220px-AnnaKareninaTitle.jpg"
    },
    {
        "id": 19,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "publication_year": 1988,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Philosophical"
        ],
        "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/220px-TheAlchemist.jpg"
    },
    {
        "id": 20,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "publication_year": 1884,
        "rating": 4.3,
        "categories": [
            "Adventure",
            "Satire"
        ],
        "description": "A satirical novel following Huck Finn's journey down the Mississippi River.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Huckleberry_Finn_book.JPG/220px-Huckleberry_Finn_book.JPG"
    },
    {
        "id": 21,
        "title": "The Iliad",
        "author": "Homer",
        "publication_year": "8th century BCE",
        "rating": 4.3,
        "categories": [
            "Epic",
            "Mythology"
        ],
        "description": "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 22,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "publication_year": 1954,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Adventure"
        ],
        "description": "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 23,
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "publication_year": 1605,
        "rating": 4.3,
        "categories": [
            "Classic",
            "Satire"
        ],
        "description": "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 24,
        "title": "Frankenstein",
        "author": "Mary Shelley",
        "publication_year": 1818,
        "rating": 4.3,
        "categories": [
            "Gothic",
            "Science Fiction"
        ],
        "description": "A novel about the creation of a monster and the consequences of playing god.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/220px-Frankenstein_1818_edition_title_page.jpg"
    },
    {
        "id": 25,
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "publication_year": 1865,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Children's Literature"
        ],
        "description": "A whimsical tale about a girl named Alice who falls into a magical world.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Alice%27s_Adventures_in_Wonderland_cover_%281865%29.jpg/220px-Alice%27s_Adventures_in_Wonderland_cover_%281865%29.jpg"
    },
    {
        "id": 26,
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "publication_year": 1943,
        "rating": 4.3,
        "categories": [
            "Fable",
            "Children's Literature"
        ],
        "description": "A philosophical novella about a young prince's journey through the universe.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 27,
        "title": "The Book Thief",
        "author": "Markus Zusak",
        "publication_year": 2005,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "War"
        ],
        "description": "A story of a girl living in Nazi Germany, narrated by Death.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "id": 28,
        "title": "Slaughterhouse-Five",
        "author": "Kurt Vonnegut",
        "publication_year": 1969,
        "rating": 4.3,
        "categories": [
            "Satire",
            "Science Fiction"
        ],
        "description": "An anti-war novel that mixes science fiction and dark humor.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png"
    },
    {
        "id": 29,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "publication_year": 1939,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Social Commentary"
        ],
        "description": "A novel about the plight of migrant workers during the Great Depression.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 30,
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "publication_year": 1953,
        "rating": 4.3,
        "categories": [
            "Dystopian",
            "Science Fiction"
        ],
        "description": "A dystopian novel depicting a future society where books are banned.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 31,
        "title": "The Lord of the Flies",
        "author": "William Golding",
        "publication_year": 1954,
        "rating": 4.3,
        "categories": [
            "Dystopian",
            "Psychological Fiction"
        ],
        "description": "A novel about a group of British boys stranded on an uninhabited island.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 32,
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "publication_year": 1979,
        "rating": 4.3,
        "categories": [
            "Science Fiction",
            "Comedy"
        ],
        "description": "A comedic science fiction series about the misadventures of Arthur Dent.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 33,
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "publication_year": 1859,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Classic"
        ],
        "description": "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "id": 34,
        "title": "The Chronicles of Narnia",
        "author": "C.S. Lewis",
        "publication_year": 1950,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Children's Literature"
        ],
        "description": "A series of fantasy novels set in the magical land of Narnia.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 35,
        "title": "The Handmaid's Tale",
        "author": "Margaret Atwood",
        "publication_year": 1985,
        "rating": 4.3,
        "categories": [
            "Dystopian",
            "Feminist Fiction"
        ],
        "description": "A dystopian novel set in a totalitarian society where women are subjugated.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 36,
        "title": "The Name of the Rose",
        "author": "Umberto Eco",
        "publication_year": 1980,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Mystery"
        ],
        "description": "A medieval mystery novel set in an Italian monastery.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png"
    },
    {
        "id": 37,
        "title": "The Trial",
        "author": "Franz Kafka",
        "publication_year": 1925,
        "rating": 4.3,
        "categories": [
            "Absurdist Fiction",
            "Existential"
        ],
        "description": "A surreal novel exploring themes of guilt, law, and justice.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 38,
        "title": "The Kite Runner",
        "author": "Khaled Hosseini",
        "publication_year": 2003,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Drama"
        ],
        "description": "A novel about friendship, redemption, and the impact of war in Afghanistan.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 39,
        "title": "The Pillars of the Earth",
        "author": "Ken Follett",
        "publication_year": 1989,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Adventure"
        ],
        "description": "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "id": 40,
        "title": "The Shadow of the Wind",
        "author": "Carlos Ruiz Zafón",
        "publication_year": 2001,
        "rating": 4.3,
        "categories": [
            "Mystery",
            "Gothic"
        ],
        "description": "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 41,
        "title": "The Secret Garden",
        "author": "Frances Hodgson Burnett",
        "publication_year": 1911,
        "rating": 4.3,
        "categories": [
            "Children's Literature",
            "Classic"
        ],
        "description": "A classic children's novel about a young girl who discovers a hidden garden.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 42,
        "title": "The Giver",
        "author": "Lois Lowry",
        "publication_year": 1993,
        "rating": 4.3,
        "categories": [
            "Dystopian",
            "Young Adult"
        ],
        "description": "A dystopian novel about a society with strict control over emotions and memories.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 43,
        "title": "The Metamorphosis",
        "author": "Franz Kafka",
        "publication_year": 1915,
        "rating": 4.3,
        "categories": [
            "Absurdist Fiction",
            "Existential"
        ],
        "description": "A novella about a man who wakes up one morning transformed into a giant insect.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png"
    },
    {
        "id": 44,
        "title": "Gone with the Wind",
        "author": "Margaret Mitchell",
        "publication_year": 1936,
        "rating": 4.3,
        "categories": [
            "Historical Fiction",
            "Romance"
        ],
        "description": "A historical novel set during the American Civil War, centered around Scarlett O'Hara.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 45,
        "title": "The Wind in the Willows",
        "author": "Kenneth Grahame",
        "publication_year": 1908,
        "rating": 4.3,
        "categories": [
            "Children's Literature",
            "Fantasy"
        ],
        "description": "A children's novel about the adventures of anthropomorphic animals.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/220px-Crimeandpunishmentcover.png"
    },
    {
        "id": 46,
        "title": "Dracula",
        "author": "Bram Stoker",
        "publication_year": 1897,
        "rating": 4.3,
        "categories": [
            "Gothic",
            "Horror"
        ],
        "description": "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    },
    {
        "id": 47,
        "title": "The Call of the Wild",
        "author": "Jack London",
        "publication_year": 1903,
        "rating": 4.3,
        "categories": [
            "Adventure",
            "Nature"
        ],
        "description": "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg"
    },
    {
        "id": 48,
        "title": "The Stand",
        "author": "Stephen King",
        "publication_year": 1978,
        "rating": 4.3,
        "categories": [
            "Horror",
            "Post-Apocalyptic"
        ],
        "description": "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/220px-PrideAndPrejudiceTitlePage.jpg"
    },
    {
        "id": 49,
        "title": "The Color Purple",
        "author": "Alice Walker",
        "publication_year": 1982,
        "rating": 4.3,
        "categories": [
            "Fiction",
            "Historical"
        ],
        "description": "A novel about the life of African-American women in the Southern United States.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Littleprince.JPG/220px-Littleprince.JPG"
    },
    {
        "id": 50,
        "title": "The Silmarillion",
        "author": "J.R.R. Tolkien",
        "publication_year": 1977,
        "rating": 4.3,
        "categories": [
            "Fantasy",
            "Mythopoeia"
        ],
        "description": "A collection of mythopoeic stories about the history of Middle-earth.",
        "cover_image": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif/220px-First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif"
    }
]

export default books;