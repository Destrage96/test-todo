<template>
    <div class="todo-list__container">
        <form v-model="formModel">
            <h3 v-if="readonly || active">{{formModel.title}}:</h3>
            <input type="text"
                   v-else
                   v-model="formModel.title"/>

                <ul class="points">
                    <li v-for="point in formModel.points" :key="point.id">
                        <input type="checkbox"
                               :id="point.id"
                               :disabled="readonly"
                               v-model="point.state" />
                        <label :for="point.id" v-model="point.state"/>

                        <span class="point"
                              :class="point.state === true ? 'point_done' : 'point'"
                              v-if="readonly || active">{{ point.text }}</span>
                        <input type="text"
                               v-else
                               v-model="point.text" />
                    </li>
                </ul>
        </form>
    </div>
</template>

<script>
    import _ from 'lodash';

    function copyModel(m) {
        let model = _.cloneDeep(m);
        return model;
    }

    export default {
        name: "todo-list",
        props: {
            todo: {
                type: Object,
                default: {}
            },

            readonly: {
                type: Boolean,
                default: false
            },

            active: {
                type: Boolean,
                default: false
            }
        },

        mounted() {

            if ('id' in this.todo) {
                // this.stateToReadonly = this.readonly;
                this.formModel = copyModel(this.todo);
            }
        },

        data: function () {
            return {
                formModel: {
                    title: '',
                    points: [
                        {
                            state: false,
                            text: ''
                        }
                    ]
                }
            }
        },

        watch: {
            todo: function(newValue) {
                if (newValue) {
                    this.formModel = copyModel(newValue);

                    if ('id' in newValue) {
                        // this.stateToReadonly = true;
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    .todo-list__container {
        max-width: 450px;
        min-width: 300px;
        padding: 0 30px 30px;

        h3 {
            font-size: 28px;
        }

        .points {
            list-style: none;
            padding-left: 20px;

            li {
                display: flex;
                align-items: center;
                margin-bottom: 15px;

                .point_done {
                    text-decoration: line-through #ae000f;
                }

                .point {
                    font-size: 16px;
                }
            }
        }
    }
</style>