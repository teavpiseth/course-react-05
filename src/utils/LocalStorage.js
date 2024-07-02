class LocalStorage {
  setUserInfo(data) {
    console.log(data);
    if (data) {
      this.setUser(data.user);
    }
  }

  setUser(value) {
    localStorage.setItem("userInfo", JSON.stringify(value));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }
  clearUser() {
    localStorage.removeItem("userInfo");
  }
}

export default new LocalStorage();
