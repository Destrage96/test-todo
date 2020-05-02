<template>
    <div class="todo-id__container">
        <a class="todo-id__link" @click="$router.go(-1)">
            <font-awesome-icon style="color: #20bf4f" far icon="arrow-circle-left"/>
            Назад
        </a>

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

<style lang="less">
    .todo-id__container {
        .todo-id__link {
           cursor: pointer;
        }
    }
</style>