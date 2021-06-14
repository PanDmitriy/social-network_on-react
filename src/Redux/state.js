let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi everyone!', likesCount: 2},
      {id: 2, message: 'I is my first post', likesCount: 13},
      {id: 3, message: 'Subscribe and read my posts.', likesCount: 18}
    ]
  },
  messagePage: {
    dialogs: [
      {id: 1, name: 'Dmitriy'},
      {id: 2, name: 'Ivan'},
      {id: 3, name: 'Vova'},
      {id: 4, name: 'Daniil'},
      {id: 5, name: 'Jula'},
      {id: 6, name: 'Petr'},
    ], 
    messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'Hello!'},
      {id: 3, message: 'How are you?'},
      {id: 4, message: 'I am funny. Are you too?'},
      {id: 5, message: 'Yes.'},
      {id: 6, message: 'Goodbay!'},
    ]
  }
}

export default state;