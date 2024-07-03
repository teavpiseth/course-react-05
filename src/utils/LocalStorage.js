class LocalStorage {
  setUserInfo(data) {
    if (data) {
      this.setUser(data.user);

      this.setAccessToken(data.accessToken);
      this.setExpiredIn(data.expiredIn);
      this.setRefreshToken(data.refreshToken);
    }
  }

  setExpiredIn(value) {
    localStorage.setItem("expiredIn", value);
  }
  setRefreshToken(value) {
    localStorage.setItem("refreshToken", value);
  }
  setAccessToken(value) {
    localStorage.setItem("accessToken", value);
  }

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  getExpiredIn() {
    return localStorage.getItem("expiredIn");
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
