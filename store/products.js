export const state = () => ({
  products: [
    { id: 1, title: 'lorem 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: 'https://picsum.photos/800/500?random=1', price: 10 },
    { id: 2, title: 'lorem 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: 'https://picsum.photos/800/500?grayscale', price: 20 },
    { id: 3, title: 'lorem 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: 'https://picsum.photos/800/500?blur', price: 30 },
    { id: 4, title: 'lorem 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', image: 'https://picsum.photos/800/500?random=2', price: 40 },
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
  get: (state) => (id) => {
    return state.products.find(product => product.id === id)
  }
}
