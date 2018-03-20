<template>
  <div class="login-container" :style="{'background-image': `url('${bgImage}')`}">
    <div class="content">

      <div class="left-content" :style="{'background-image': `url('${leftImage}')`}"></div>

      <div class="right-content">
        <el-card class="box-card">

          <div slot="header" class="clearfix">
            <span>登录</span>
          </div>

          <div  class="item">
            <el-tabs v-model="login_method" @tab-click="handleClick">
              <!-- 普通登录 -->
              <el-tab-pane label="普通登录" name="first">
                <el-form  :model="loginPub" :label-position="labelPosition" label-width="100px">
                  <el-form-item label="用户名">
                    <el-input v-model="loginPub.name" placeholder="邮箱/手机"></el-input>
                  </el-form-item>
                  <p class="forgetPsw">忘记密码?</p>
                  <el-form-item label="密码">
                    <el-input v-model="loginPub.password" placeholder="密码"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">登录</el-button>
                    <span @click="toRegister" class="toLogin">立即注册</span>
                  </el-form-item>
                </el-form>
                <div class="loginQuick">
                  <p><span>快速登录</span></p>
                  <div class="quick-content">
                    <ul class="quickList">
                      <li><img :src="QQImage"/></li>
                      <li><img :src="weiXinImage"/></li>
                    </ul>
                  </div>
                </div>
              </el-tab-pane>

              <!-- 验证登录 -->
              <el-tab-pane label="验证登录" name="second">
                <el-form :label-position="labelPosition" label-width="80px" :model="loginVerify">
                  <el-form-item label="手机号码">
                    <el-input v-model="loginVerify.phone" placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input v-model="loginVerify.verity" placeholder="请输入验证码" style="width:230px">13</el-input>
                    <el-button type="text">获取验证码</el-button>
                  </el-form-item>
                  <el-form-item>
                  <el-button type="primary">登录</el-button>
                  <span @click="toRegister" class="toLogin">立即注册</span>
                </el-form-item>
                </el-form>
                <div class="loginQuick">
                  <p><span>快速登录</span></p>
                  <div class="quick-content">
                    <ul class="quickList">
                      <li><img :src="QQImage"/></li>
                      <li><img :src="weiXinImage"/></li>
                    </ul>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
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
@import './login.scss'
</style>
<script src="./login.js"></script>
