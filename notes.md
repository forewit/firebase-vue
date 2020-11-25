## Setup
1. Install vue CLI globally: `npm install -g @vue/cli`
    See use `vue` to see options, `vue ui` to start new project
2. run `npm run serve` to start your app
3. Add Bulma.io CSS framework to header

## Firebase
1. run `npm i vuefire firebase`
2. in **main.js** add:
```
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
```
3. Create **firebase.js**:

```
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
    // Add your config here
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
```

## Routing
1. run `npm install vue-router`
2. in **main.js** add:

```
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```
## Vue Composition API
1. Run `npm i @vue/composition-api`
2. in **main.js** add:

```
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
```