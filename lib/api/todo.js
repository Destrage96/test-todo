export default $axios => ({
    async fetchList() {
        try {
            const list = await $axios.$get('todo');
            if (typeof (list) === 'object') {
                return {
                    list: list,
                };
            }
            return null;
        } catch (error) {
            throw error;
        }
    },

    async getTodo(id) {
        try {
            let todo = await $axios.$get('todo/' + id);
            return todo;
        } catch (error) {
            throw error;
        }
    },
});