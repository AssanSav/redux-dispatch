let state = {count: 0}
let action = { type: 'INCREASE_COUNT' }

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispath(action) {
  state = changeState(state, { type: "INCREASE_COUNT" })
  render()
}

let increment = () => dispath({ type: "INCREASE_COUNT" })
increment()
increment()
increment()
increment()


function render() {
  document.body.textContent = state.count
}
