define(function () {
	var homeQuestionService = function($http, $ionicLoading, $q, $stateParams ) {
		// var HOST = 'http://guwen.stuzone.com/index.php/';
		var HOST = 'http://59.68.29.91/guwen/index.php/';
		
		var o = {
			qdata: [],
			qdetailData: {
				'title': '',
				'content': '',
				'score': 0
			},
			qanswerData: [],
			//  {
			// 	'user': '',
			// 	'date': '',
			// 	'best':'',
			// 	'content': ''
			// },
			test: function () {
				alert("dddd");
			},
			pageNum: 1,
			getHomeQuestion: function() {
				$ionicLoading.show({
			      template: 'Loading...'
			    });
				var deferred = $q.defer();
				$http.get(HOST　+'api/index/index/' + o.pageNum)
					 .success(function(data) {
					 	deferred.resolve(data);
					 	$ionicLoading.hide();
					 })
					 .error(function(data, status) {
					 	console.log('err' + status);
					 	deferred.reject(data);
					 });
				return deferred.promise;
			},
			initHome: function () {
				o.getHomeQuestion().then(function(data) {
					for(var i = 0; i < data.length; i++) {
						o.qdata.push(data[i]);
					}
				});
			},
			loadMore: function () {
				o.pageNum ++;
				o.initHome();
			},
			//问题详情
			questionDetail: function () {
				var deferred = $q.defer();
				$http.get(HOST + 'api/question/getQuestionDetail/' + $stateParams.id )
					 .success(function(data) {
					 	deferred.resolve(data);
					 })
					 .error(function(data, status) {
					 	deferred.reject(data);
					 });
				return deferred.promise;
			},
			getQuestionDetail: function () {
				o.questionDetail().then(function(data) {
					o.qdetailData.title = data.question[0].ques_title;
					o.qdetailData.content = data.question[0].ques_content;
					for(var i = 0; i < data.comment.length; i++) {
						o.qanswerData.push({'content': data.comment[i].comment_content,
											'user': data.comment[i].user_name});
					}
				})
			},

			//get cate 
			getCate: function () {

			},
			submit: function () {
				$http.post(HOST + 'api/question/post_message/', o.qdetailData)
				 	.success(function(data) {
				 		console.log(data);
				 	})
				 	.error(function(err) {
				 		console.log('err');
				 	})
				// console.log(o.qdetailData);
			}

		}
		return o;
	}
	return homeQuestionService;
})