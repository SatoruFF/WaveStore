import { makeAutoObservable } from "mobx";

export default class UserStore{

    public _isAuth: boolean;
    public _user: any;

    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }


    setIsAuth(bool: boolean) {
        this._isAuth = bool
    }
    setUser(user: any) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}