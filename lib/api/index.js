import todo from '../api/todo';

export default $axios => ({
  todo: todo($axios),
})
