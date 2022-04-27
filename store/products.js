export const state = () => ({
  products: [
    { id: 1, title: 'lorem', description: 'lorem ipsum', image: 'https://picsum.photos/800/500' },
    { id: 2, title: 'lorem', description: 'lorem ipsum', image: 'https://picsum.photos/800/500' },
    { id: 3, title: 'lorem', description: 'lorem ipsum', image: 'https://picsum.photos/800/500' },
    { id: 4, title: 'lorem', description: 'lorem ipsum', image: 'https://picsum.photos/800/500' },
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
