import Cookies from 'js-cookie';


const RQSAUTH = "RQSAUTH"
export default {
    RQSAUTH: RQSAUTH,
    ROLE: () => {
        const RQSAUTH_DATA = Cookies.get(RQSAUTH);
        if (!RQSAUTH_DATA) return {}
        const { token: TOKEN, userInfo: USER } = JSON.parse(decodeURIComponent((RQSAUTH_DATA)))
        return { TOKEN, USER }
    },
    Init: function (user) {
        const user_encode = encodeURIComponent(JSON.stringify(user))
        Cookies.set(RQSAUTH, user_encode, { expires: 1 });
    }
}
