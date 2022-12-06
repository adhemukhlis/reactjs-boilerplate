# State Management Documentation

## stacks

1. redux
2. redux-persist
3. redux-thunk
4. redux-persist-transform-encrypt
5. remote-redux-devtools

## structure

- store
  - modules
    - `[ModuleName]`
      - `actions.js`
      - `reducers.js`
  - types
    - `action-types.js` (enum penamaan action dengan tujuan menghindari terjadinya konflik pada penamaan)
    - `reducer-types.js` (enum penamaan reducer dengan tujuan menghindari terjadinya konflik pada penamaan)
  - `createReducer.js` (file/module untuk membuat komponen reducer)
  - `index.js` (file store service + konfigurasi redux)
  - `reducers.js` (file konfigurasi untuk menggabungkan reducer di folder modules, juga bertujuan menghindari konflik penamaan module reducer)

## get started

### 1. mambuat module

1. buat folder module berdasarkan entitas/fitur dengan penulisan _PascalCase_
   > untuk menjaga konsistensi, penamaan folder module (`store/modules/[ModuleName]`) diharapkan sesuai dengan nama module yang di import di file `store/reducers.js` (berhubungan dengan poin nomor 4)
2. buat file `reducers.js` dan `actions.js`
3. contoh dasar module dapat dilihat di dalam folder `store/modules/SampleModule`
4. buat enum reducer-types dan action-types pada folder `store/types`, penggunaan types bertujuan untuk menghindari konflik penamaan dari actions dan reducers setiap module
5. buka file `store/reducers.js`, lalu import `store/modules/[ModuleName]/reducers.js` yang ada di dalam folder module yang telah dibuat
   ```js
   import ModuleName from './modules/ModuleName/reducers'
   ```
6. terakhir, export `ModuleName`
   ``` js
    export default { ... , ModuleName }
   ```

### 2. penggunaan (dispatch & selector)

1. dispatch

   1. import file store service (`store/index.js`) pada react component

      ```js
      import configureStore from '[relative path]/store'
      ```

   2. import types actions

      ```js
      import ACTION_TYPES from '[relative path]/store/types/action-types'
      ```
   3. destruktur variabel object `configureStore`

      ```js
      const { store } = configureStore()
      ```

   4. perintah actions dapat dipanggil dalam react component

      ```js
      const handleSomeButtonClick = (anyParam) => {
	      store.dispatch(
		      ModuleName[ACTION_TYPES.YOUR_MODULE_ACTION_TYPE]({ anyValue: 'anyValue' })
	      )
      }
      ```

2. selector
   1. import `useSelector`
      ```js
      import { useSelector } from 'react-redux'
      ```
   6. variabel state dapat digunakan didalam react component
      ```js
      const someValue = useSelector((state) => state.ModuleName.someValue)
      // { anyValue: 'anyValue' }
      ```
