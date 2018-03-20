import bgImage from '@/assets/images/login-bg.jpg'
import leftImage from '@/assets/images/bg-1.jpg'
import weiXinImage from '@/assets/images/weixin.png'
import weiBoImage from '@/assets/images/weibo.jpg'
import QQImage from '@/assets/images/QQ.png'
export default {
  data () {
    return {
      bgImage,
      leftImage,
      weiXinImage,
      weiBoImage,
      QQImage,
      labelPosition: 'top',
      login_method: 'first', // 登录方式
      loginPub: { // 普通登录
        name: '',
        password: ''
      },
      loginVerify: { // 普通登录
        phone: '',
        number: ''
      }

    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    toRegister () {
      this.$router.push({ path: '/register' })
    }
  }
}
