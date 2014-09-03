define(['angular',
        'angularIonic',
        'homeQuestion/homeQuestionModule',
        'user/userModule'
  ], function (ng) {
      'use strict';
      return ng.module('guwen',[
        'ionic',
        'guwen.homeQuestionModule', // 实质？
        'guwen.userModule'
        ]);
  });
