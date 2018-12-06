(function (global) {
  var EsaClient = (function () {
    function EsaClient(token, team) {
      this.apiUrl = 'https://api.esa.io/v1';
      this.headers = {Authorization: 'Bearer ' + token};
      this.team = team;

      if (!token) throw new Error('"token"は必須です');
      if (!team) throw new Error('"team"は必須です');
    }

    EsaClient.prototype.getPosts = function (params) {
      var query = this.buildUrlParam_(params);
      return this.fetch_(Utilities.formatString('/teams/%s/posts?%s', this.team, query), { method: 'get' });
    };

    EsaClient.prototype.getSpecificPost = function (postId, params) {
      var query = this.buildUrlParam_(params);
      return this.fetch_(Utilities.formatString('/teams/%s/posts/%s?%s', this.team, postId, query), {method: 'get'});
    };

    EsaClient.prototype.buildUrlParam_ = function (params) {
      var temp = [];
      for (var key in params) {
        temp.push(Utilities.formatString('%s=%s', key, encodeURIComponent(params[key])));
      }
      return temp.join('&');
    };

    EsaClient.prototype.fetch_ = function (endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        method:             options.method,
        muteHttpExceptions: true,
        contentType:        'application/json; charset=utf-8',
        headers:            this.headers,
        payload:            options.payload || {}
      });
      return JSON.parse(response.getContentText());
    };

    return EsaClient;
  })();
  return global.EsaClient = EsaClient;
})(this);
