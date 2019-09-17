if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../components/add-button/add-button?hash=c3b912afc17b2886b09b8ac248356b9854ce403e');
require('../../pages/todos/todos?hash=76a84e403a734aa6e20870fb06cb4a80b9149f55');
require('../../pages/add-todo/add-todo?hash=76a84e403a734aa6e20870fb06cb4a80b9149f55');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}