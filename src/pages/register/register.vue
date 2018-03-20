<template>
  <div class="register-container" :style="{'background-image': `url('${bgImage}')`}">
    <div class="content">

      <div class="left-content" :style="{'background-image': `url('${leftImage}')`}"></div>

      <div class="right-content">
        <el-card class="box-card">

          <div slot="header" class="clearfix">
            <span>注册</span>
          </div>

          <div  class="item">
            <!-- <el-tabs v-model="login_method" @tab-click="handleClick"> -->
              <!-- 普通登录 -->
              <!-- <el-tab-pane label="普通登录" name="first">-->
                <el-form  :model="registerForm" :label-position="labelPosition" label-width="100px">
                  <el-form-item label="用户名">
                    <el-input type="text" v-model="registerForm.name" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱/手机号">
                    <el-input type="text" v-model="registerForm.email" placeholder="请输入邮箱/手机号码"></el-input>
                  </el-form-item>
                  <el-form-item label="手机验证码">
                    <el-input type="text" v-model="registerForm.email" placeholder="请输入验证码" style="width:230px"></el-input>
                    <el-button type="text">发送验证码</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">立即注册</el-button>
                    <span @click="toLogin" class="toLogin">立即登录</span>
                  </el-form-item>
                </el-form>
                <!-- <div class="loginQuick">
                  <p><span>快速登录</span></p>
                  <div class="quick-content">
                    <ul class="quickList">
                      <li><img :src="QQImage"/></li>
                      <li><img :src="weiXinImage"/></li>
                    </ul>
                  </div>
                </div> -->
              <!-- </el-tab-pane> -->

              <!-- 验证登录 -->
              <!-- <el-tab-pane label="验证登录" name="second">验证登录</el-tab-pane>
            </el-tabs> -->
          </div>

        </el-card>
      </div>
      <!-- <div class="center-content"></div> -->
      <!-- <div class="right-top"></div> -->
      <!-- <div class="left-bottom"></div> -->
    </div>
  </div>
</template>

<style lang="scss">
@import './register.scss'
</style>
<script src="./register.js"></script>
