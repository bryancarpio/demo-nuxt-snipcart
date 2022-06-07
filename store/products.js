export const state = () => ({
  products: [
    { id: 1, title: 'lorem 1', description: 'lorem ipsum 1', image: 'https://picsum.photos/800/500', price: 10 },
    { id: 2, title: 'lorem 2', description: 'lorem ipsum 2', image: 'https://picsum.photos/800/500', price: 20 },
    { id: 3, title: 'lorem 3', description: 'lorem ipsum 3', image: 'https://picsum.photos/800/500', price: 30 },
    { id: 4, title: 'lorem 4', description: 'lorem ipsum 4', image: 'https://picsum.photos/800/500', price: 40 },
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, {todo}) {
    state.products.splice(state.products.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  list: state => state.products,
}
