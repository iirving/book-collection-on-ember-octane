import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
  model() {
    return [
      {
        id: 1,
        title: "Great Expectations",
        publicationYear: 1861,
        pages: 464,
        author: "Charles Dickens",
        ISBN: "1454901373"
      },
      {
        id: 2,
        title: "Twenty Thousand Leagues Under the Sea",
        publicationYear: 1870,
        pages: 256,
        author: "Jules Verne",
        ISBN: "1853260312"
      },
      {
        id: 3,
        title: "Time Machime",
        publicationYear: 1895,
        pages: 125,
        author: "H. G. Wells",
        ISBN: "9781433205590"
      },
      {
        id: 4,
        title: "From the Earth to the Moon",
        publicationYear: 1870,
        pages: 324,
        author: "Jules Verne",
        ISBN: "1592242421"
      },
      {
        id: 5,
        title: "The Hunchback of Notre-Dame",
        publicationYear: 1831,
        pages: 940,
        author: "Victor Hugo",
        ISBN: "1853260681"
      },
      {
        id: 6,
        title: "Pride and Prejudice",
        publicationYear: 1813,
        pages: 272,
        author: "Jane Austen",
        ISBN: "0486284735"
      }
    ];
  }
}
