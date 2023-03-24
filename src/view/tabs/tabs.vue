<template>
    <div>
<!--        <div style="margin-bottom: 20px;">
            <el-button
                size="small"
                @click="addTab(editableTabsValue)"
            >
                add tab
            </el-button>
        </div>-->
        <el-tabs v-model="editableTabsValue" closable type="card" @tab-click="to" @tab-remove="removeTab" @contextmenu.native.prevent="openContextmenu">
            <el-tab-pane
                v-for="(item, index) in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
            </el-tab-pane>
        </el-tabs>
        <!-- 右边菜单 -->
        <ul
            v-show="visible"
            :style="{ left: left + 'px', top: '42px' }"
            class="contextmenu"
        >
            <li @click="closeSelectedTag">关闭当前</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags">关闭所有</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data() {
        return {
            editableTabsValue: '2',
            editableTabs: [{
                title: '首页',
                name: '1',
                path: 'Tab 1 path',
            }, {
                title: 'Tab 2',
                name: '2',
                path: 'Tab 2 path',
            }],
            tabIndex: 2,
            visible:'',
            left:'',
        }
    },
    watch:{
        $route:{
            handler(v){
                console.log(v)
                this.addTab(editableTabsValue)
            }
        }
    },
    methods: {
        openContextmenu(e) {
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right

            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }
            if (this.visible) {
                this.visible = !this.visible
            } else {
                this.visible = true
                this.selectedTag = e.target.innerText
            }
        },
        to(tab,event){
            console.log(tab.title);
            console.log(event.title);
        },
        addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                path: 'New Tab path'
            });
            this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        },
        closeAllTags() {
            if (this.visible) {
                this.$store.commit('tabs/closeAll', [
                    this.openTab[this.openTab.length - 1]
                ])
                this.visible = false
                this.$router.push({ path: this.activeIndexTab })
            }
        },
        closeSelectedTag() {
            if (this.openTab.length === 1) {
                return
            }
            if (this.visible) {
                this.$store.commit('tabs/closeSelected', this.selectedTag)
                this.visible = false
                this.$router.push({ path: this.activeIndexTab })
            }
        },
        closeOthersTags() {
            if (this.visible) {
                this.$store.commit('tabs/closeOthers', this.selectedTag)
                this.visible = false
                this.$router.push({ path: this.activeIndexTab })
            }
        },
    }
}
</script>

<style scoped lang="scss">

.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }
}
</style>
