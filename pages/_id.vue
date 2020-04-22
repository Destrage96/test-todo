<template>
    <div class="todo-id__container">
        <div>
            <TodoList :todo="todo" :active="active" />
        </div>
        <div class="todo-action">
        </div>
    </div>
</template>

<script>
    import TodoList from "../components/todo-list";
    export default {
        components: {
            TodoList
        },

        async asyncData({app, params}) {
            try {
                let todo = await app.$api.todo.getTodo(params.id);
                return {todo: todo};
            } catch (e) {
                throw e;
            }
        },

        data() {
            return{
                todo: {},
                active: true
            }
        },

    }
</script>

<style scoped>

</style>