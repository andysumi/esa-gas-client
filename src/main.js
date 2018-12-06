/**
 * Esa Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @param {String} team 【任意】チーム名
 * @return {EsaClient} Esa Clientのインスタンス
 */
function create(token, team) { // eslint-disable-line no-unused-vars
  return new EsaClient(token, team);
}

/**
 * 記事の一覧を取得する
 * @param {Object} params 【任意】クエリ文字列(API Document参照)
 * @return {Object} 記事のオブジェクト
 * https://docs.esa.io/posts/102#GET /v1/teams/:team_name/posts
 */
function getPosts(params) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 特定の記事を取得する
 * @param {Integer} postId 【必須】記事ID
 * @param {Object} params 【任意】クエリ文字列(API Document参照)
 * @return {Object} 記事のオブジェクト
 * https://docs.esa.io/posts/102#GET /v1/teams/:team_name/posts/:post_number
 */
function getSpecificPost(postId, params) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 記事を作成する
 * @param {String} name 【必須】記事名
 * @param {Object} options 【任意】その他の項目(API Document参照)
 * @return {Object} 記事のオブジェクト
 * https://docs.esa.io/posts/102#POST /v1/teams/:team_name/posts
 */
function createPost(name, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 記事を削除する
 * @param {Integer} postId 【必須】記事ID
 * @return {String} 処理結果
 * https://docs.esa.io/posts/102#DELETE /v1/teams/:team_name/posts/:post_number
 */
function deletePost(postId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
