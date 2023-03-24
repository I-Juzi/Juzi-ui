<template>
    <div class="home_background">
        <el-container class="el_container">


            <el-header style="display: flex;  align-items:center; justify-content: flex-end; background-color: #4099ef">
<!--              头像  -->
                <div @click="$router.push('/home/info')">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>


                <el-row class="demo-avatar" style="margin-left: 10px;">
                    <el-col style="text-align: right">
                        <el-dropdown>
              <span class="el-dropdown-link" style="color: #f5f5fd">
                {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
                            <el-dropdown-menu slot="dropdown">
                                <div @click="$router.push('/home/info')">
                                    <el-dropdown-item icon="el-icon-edit">信息修改</el-dropdown-item>
                                </div>
                                <div @click="$router.push('/')">
                                    <el-dropdown-item icon="el-icon-s-operation">退出登录</el-dropdown-item>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-header>
            <p style="float: start;position: absolute;color: #f5f5fd;margin-left: 100px ">天行智能小车管理系统</p>
            <el-image :src="require('@/assets/logo.png')" class="home_log"></el-image>

            <!--      -->
            <el-container>
                <el-aside :width="aside_width">
                    <div class="toggle-button" @click="handleIsCollapse">
                        <i v-if="isCollapse" class="el-icon-s-unfold"></i>
                        <i v-if="!isCollapse" class="el-icon-s-fold"></i>
                    </div>
                    <!--          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                                <el-radio-button :label="false">展开</el-radio-button>
                                <el-radio-button :label="true">收起</el-radio-button>
                              </el-radio-group>-->
                    <el-menu :collapse="isCollapse" :collpase="isCollapse" :default-active="activePath" class="el-menu-vertical-demo"
                             router @close="handleClose" @open="handleOpen">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                                <span slot="title">分组一</span>
                                <el-menu-item
                                    index="/home/test"
                                    @click="saveActiveNav('/test')">选项1
                                </el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item disabled index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>

                <el-container>
                    <!--  标签盒子      -->
                    <el-footer style="margin-left: 11px;display: flex ;justify-content: center;flex-direction: column">
                        <Tabs></Tabs>
                    </el-footer>
                    <!--主体        -->
                    <el-main style="margin-top: -19px">
                        <index>
                            <router-view>
                                {{ $staConf.URL }}
                            </router-view>
                        </index>
                    </el-main>
                </el-container>
            </el-container>
        </el-container>

    </div>


</template>

<script>
import Index from "@/view/index/index.vue";
import Tabs from "@/view/tabs/tabs.vue"
export default {
    name: "Home",
    components: {Index,Tabs},
    data() {
        return {
            background_image: require('@/assets/img/wallhaven-zygeko.jpg'),
            isCollapse: true,
            activePath: '',
            editPasswordDialog: false,
            editPasswordFrom: {},
            editPasswordRole: {},
            aside_width: '',
            circleUrl: require('../../assets/img/wallhaven-zygeko.jpg'),
            username: '管理员',
        }
    },
    mounted() {
    },
    methods: {
        handleIsCollapse() {
            this.isCollapse = !this.isCollapse
            if (this.isCollapse) {
                this.aside_width = '65px'
            } else {
                this.aside_width = '200px'
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        saveActiveNav(activePath) {
            //sessionStorage.setItem("acticePath",activePath);
            this.activePath = activePath
        },
        t_1() {
            alert('11111111')
        }
    },
    created() {
        this.activePath = sessionStorage.getItem("activePath") ? sessionStorage.getItem("activePath") : "/index";
    }
}
</script>

<style lang="scss" scoped>

.toggle-button {
    background-color: #f5f5fd;
    font-size: 18px;
    line-height: 24px;
    color: aliceblue;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    color: black;
}

html, body, #Home, .el_container {
    padding: 0;
    margin: 0;
    height: 100vh;
}

/*.home_background{
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/wallhaven-zygeko.jpg");
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100% 100%;
}*/
.home_log {
    width: 50px;
    height: 50px;
    margin-top: 6px;
    margin-left: 15px;
    float: start;
    position: absolute;
}
</style>
