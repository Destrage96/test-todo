<template>
    <div class="todo-list__container">
        <form v-model="formModel">
            <h3 v-if="readonly || active">{{formModel.title}}:</h3>
            <input type="text"
                   v-else
                   v-model="formModel.title"/>

                <ul class="points" :class="$route.name === 'id' ? 'all-points' : 'hide-points'">
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

        <nuxt-link :to="{name: 'id', params: {id: formModel.id}}"
                    v-if="$route.name !== 'id'">
            All points >>
        </nuxt-link>
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
        width: 250px;
        padding: 0 30px 30px;
        border: 2px solid #4196c4a1;
        border-radius: 5px;
        background-color: rgba(65, 196, 195, 0.27);
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        height: 290px;
        margin: 20px;

        h3 {
            font-size: 24px;
        }

        .all-points {
            overflow: inherit;
            height: auto;
        }

        .hide-points {
            height: 150px;
            overflow: hidden;
        }

        .points {
            list-style: none;
            padding: 0 0 20px 20px;
            border-bottom: 1px solid #47494e;

            li {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                line-height: 18px;

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