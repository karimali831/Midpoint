import { AppRegistry } from 'react-native';
import { App } from 'shared/src/App';

AppRegistry.registerComponent('myapp', () => App);
AppRegistry.runApplication('myapp', {
    rootTag: document.getElementById('root'),
});
