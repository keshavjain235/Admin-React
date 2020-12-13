import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/User';
import { PostList } from './components/Post';
import { PostEdit } from './components/EditPost';
import { PostCreate } from './components/CreatePost';
import { Dashboard } from './components/Dashboard';

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={ Dashboard } dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;