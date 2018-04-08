import Cookies from 'js-cookie';

const AUTH = "RQSAUTH"
export default {
    AUTH: AUTH,
    ROLE: () => {
        const AUTH_DATA = Cookies.get(AUTH);
        if (!AUTH_DATA) return {}
        const { token: TOKEN, userInfo: USER } = JSON.parse(decodeURIComponent((AUTH_DATA)))
        return { TOKEN, USER }
    },
    Init: function (user) {
        const user_encode = encodeURIComponent(JSON.stringify(user))
        Cookies.set(AUTH, user_encode, { expires: 1 });
    }
}
