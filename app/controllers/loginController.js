(function () {
    'use strict';

    angular
        .module('appMain')
        .controller('LoginController', LoginController);

    // LoginController.$inject = ['dependency1'];
    
    function LoginController($firebaseAuth) {
        var vm = this;

        console.log($firebaseAuth);
        var ref = new Firebase("https://99fit.firebaseio.com");


        vm.login = login;

        function login(params) {
            console.log('login com o google');

            var auth = $firebaseAuth(ref);

            auth.$authWithOAuthPopup(params).then(function (authData) {
                console.log(authData.google.displayName);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });

        }

    }
})();
