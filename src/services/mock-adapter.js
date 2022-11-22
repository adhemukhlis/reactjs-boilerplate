/**
 * Komponen mocking data axios
 * - onNoMatch : membiarkan akses keluar mock sesuai axios service
 * - timeout :  lama waktu tunggu maksimal
 */
import apiClient from "./clientBlog";
import API_URLS from "../enums/api-urls";
import MockAdapter from "axios-mock-adapter";

console.warn(
  `%c ---------- MOCK ADAPTER ACTIVE ----------`,
  `color:#00ffff; background-color: #0d0d0d; padding:10px; border: 2px dashed #FCD639; border-radius: 0.8em;`
);
const mock = new MockAdapter(apiClient, {
  onNoMatch: "passthrough",
  delayResponse: 1000,
});

//  regex for dynamic subpath ex. product/item/{id}
//  new RegExp(`${urls.PRODUCT_ITEM_DETAIL}/\\S+`)

mock.onPost(API_URLS.AUTH_REGISTER).reply(200, {
  status: true,
  code: 200,
  message: "[mock] registrasi sukses",
});

mock.onPost(API_URLS.AUTH_LOGIN).reply(200, {
  status: true,
  code: 200,
  message: "[mock] login sukses",
  data: {
    token: "mock-user-token",
  },
});

mock.onGet(API_URLS.USERS).reply(200, {
  status: true,
  code: 200,
  message: "[mock] sukses",
  data: {
    id: 2,
    name: "reno agil",
    username: "reno",
    created_at: "2022-11-09T01:50:59.775Z",
    updated_at: null,
  },
});

mock.onGet(API_URLS.USERS_GETALL).reply(200, {
  status: true,
  code: 200,
  message: "[mock] sukses",
  data: [
    {
      id: 3,
      name: "ahmad",
      username: "ucup",
    },
  ],
});
