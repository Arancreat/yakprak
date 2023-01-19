import axios from "axios";

const apiUrl = "http://localhost:8080/api";

class Api {
  static async getTestJwt() {
    try {
      const response = await axios.get(apiUrl + "/jwt_test");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  static async postSignIn(email, password) {
    try {
      const response = await axios.post(apiUrl + "/auth/sign_in", {
        email: email,
        password: password,
      });
      
      console.log("Success");
      localStorage.setItem("token", response.data.token)
      return true;
    } catch (error) {
      console.error(error);
      return false
    }
  }

  static async postSignUp(email, password) {
    try {
      const response = await axios.post(apiUrl + "/auth/sign_up", {
        email: email,
        password: password,
      });

      console.log("Success");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
export default Api;
