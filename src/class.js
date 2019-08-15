(function (global) {
  var EsaClient = (function () {
    function EsaClient(token, team) {
      this.apiUrl = 'https://api.esa.io/v1';
      this.headers = { Authorization: 'Bearer ' + token };
      this.team = team;

      if (!token) throw new Error('"token"は必須です');
      if (!team) throw new Error('"team"は必須です');
    }

    EsaClient.prototype.getPosts = function (params) {
      var query = this.buildUrlParam_(params);
      return this.fetch_(Utilities.formatString('/teams/%s/posts?%s', this.team, query), { method: 'get' });
    };

    EsaClient.prototype.getSpecificPost = function (postId, params) {
      if (!postId) throw new Error('"postId"は必須です');

      var query = this.buildUrlParam_(params);
      return this.fetch_(Utilities.formatString('/teams/%s/posts/%s?%s', this.team, postId, query), { method: 'get' });
    };

    EsaClient.prototype.createPost = function (name, options) {
      if (!name) throw new Error('"name"は必須です');

      var post = { name: name };
      for (var key in options) {
        post[key] = options[key];
      }
      return this.fetch_(Utilities.formatString('/teams/%s/posts', this.team), { method: 'post', payload: { post: post } });
    };

    EsaClient.prototype.createPostFromTemplate = function (templetePostId) {
      if (!templetePostId) throw new Error('"templetePostId"は必須です');

      var post = { template_post_id: templetePostId};
      return this.fetch_(Utilities.formatString('/teams/%s/posts', this.team), { method: 'post', payload: { post: post } });
    };

    EsaClient.prototype.deletePost = function (postId) {
      if (!postId) throw new Error('"postId"は必須です');

      return this.fetch_(Utilities.formatString('/teams/%s/posts/%s', this.team, postId), { method: 'delete' });
    };

    EsaClient.prototype.buildUrlParam_ = function (params) {
      var temp = [];
      for (var key in params) {
        temp.push(Utilities.formatString('%s=%s', key, encodeURIComponent(params[key])));
      }
      return temp.join('&');
    };

    EsaClient.prototype.isJSON_ = function (arg) {
      if (typeof arg !== 'string') {
        return false;
      }

      try {
        arg = JSON.parse(arg);
        return true;
      } catch (err) {
        return false;
      }
    };

    EsaClient.prototype.fetch_ = function (endPoint, options) {
      var url = this.apiUrl + endPoint;
      var contents = UrlFetchApp.fetch(url, {
        method:             options.method,
        muteHttpExceptions: true,
        contentType:        'application/json; charset=utf-8',
        headers:            this.headers,
        payload:            JSON.stringify(options.payload) || {}
      }).getContentText();

      if (!this.isJSON_(contents)) {
        return contents;
      }

      return JSON.parse(contents);
    };

    return EsaClient;
  })();
  return global.EsaClient = EsaClient;
})(this);
