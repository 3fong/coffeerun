(function(window){
    'use strict';
    var App = window.App || {};
    var data = {};

    function DataStore(){
       this.data = data;
    }

    DataStore.prototype.add = function(key,val){
        this.data[key]=val;
    }

    DataStore.prototype.get= function(key){
        return this.data[key];
    }

    DataStore.prototype.getAll= function(){
        return this.data;
    }

    DataStore.prototype.remove=function(key){
        return delete this.data[key];
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);