export default {
    install(Vue, options) {
        Vue.prototype.httpRequestAddress = 'http://192.168.1.103:8011/zb/';
        Vue.prototype.showToast = function (showPositionValue, type, text, width = "10em") {
            this.$vux.toast.show({
                showPositionValue: false,
                text: text,
                type: type,
                width: width,
                position: 'middle'
            })
        };
        //公用alert confirm
        const Message = {};
        Message.install = () => {
            const msg = {
                alert: config => {
                    let def = {
                        title: '提示',
                        content: '系统异常，请重新登录后再试！',
                        buttonText: '确定'
                    }
                    if (typeof config === 'string' || typeof config === 'number') {
                        Vue.$vux.alert.show(Object.assign(def, { content: config }));
                    } else {
                        Vue.$vux.alert.show(Object.assign(def, config));
                    }
                },
                confirm: config => {
                    let isConfirm = false;
                    let def = {
                        title: '提示',
                        content: '系统异常，请重新登录后再试！',
                        confirmText: '确定',
                        cancelText: '取消',
                        onConfirm: () => {
                            isConfirm = true;
                        }
                    }
                    if (typeof config === 'string' || typeof config === 'number') {
                        Vue.$vux.confirm.show(Object.assign(def, { content: config }));
                    } else {
                        Vue.$vux.confirm.show(Object.assign(def, config));
                    }
                    /*return new Promise((resolve,reject) => {
                     if(isConfirm){
                     resolve();
                     }
                     })*/
                },
            }
            Object.entries(msg).forEach(([method, fn]) => {
                Vue.prototype[method] = fn;
            })
        }
        Vue.use(Message)
    }
}