<template>

    <div>

        <el-tabs

            v-model="activeIndex"

            type="card"

            @tab-click="clickTab"

            @tab-remove="removeTab"

            closable

            @contextmenu.native.prevent="openContextmenu"
        >

            <!-- v-if可用v-show代替，也可考虑使用计算属性代替v-for与v-if功能 -->

            <el-tab-pane

                v-for="item of openTab"

                v-if="openTab.length"

                :key="item.name"

                :label="item.name"

                :name="item.route"

            >

            </el-tab-pane>

        </el-tabs>

        <ul v-show="visible">

            <li>选项1</li>

            <li>2</li>

        </ul>


    </div>

</template>

<script>

export default {

    data(){

        return {

            openTab:[],

            activeIndex:'',

            visible:false,

        }

    },

    methods:{

        set_active_index(index){

            this.activeIndex = index

        },

        add_tabs(data){

            this.openTab.push(data)

        },

        delete_tabs(route){

            let index = 0

            for(let gohh of this.openTab){

                if(gohh.route == route){

                    break

                }

                index++

            }

            this.openTab.splice(index,1)

        },
        /*切换标签*/
        clickTab() {

            // 是否是当前标签
            if (this.activeIndex == this.$route.path){

                return

            }

            this.$router.push({path: this.activeIndex})


        },

        removeTab (target) {

            // 是否是首页 标签
            if(target == '/home/to'){

                return

            }

            this.delete_tabs(target)

            if (this.activeIndex === target) {

                if (this.openTab && this.openTab.length >= 1) {

                    console.log('=============', this.openTab[this.openTab.length - 1].route)

                    this.set_active_index(this.openTab[this.openTab.length - 1].route)

                    this.$router.push({path: this.activeIndex})

                }

            }

        },

        openContextmenu(){

        }

    },

    watch: {

        '$route' (to, from) {

            console.log('跳转了')

            let flag = false

            for (let item of this.openTab) {

                if (item.name === to.name) {

                    this.set_active_index(to.path)

                    flag = true

                    break

                }

            }

            if (!flag) {

                this.add_tabs({route: to.path, name: to.name})

                this.set_active_index(to.path)

            }

        }

    },

    mounted () {

        console.log('mounted')

        console.log('mounted1',this.openTab)

        if(this.openTab.length>=1){

        }else{

            if(this.$route.path !== '/home/to') {

                console.log('mounted222222',this.openTab)

                this.add_tabs({route: '/home/to' , name: '首页'})

                this.add_tabs({route: this.$route.path , name: this.$route.name })

                this.set_active_index(this.$route.path)

            }else{

                this.add_tabs({route: '/home/to', name: '首页'})

                this.set_active_index('/home/to')

            }

        }

    }

}

</script>
