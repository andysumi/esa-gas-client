/**
 * Esa Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @param {String} team 【任意】チーム名
 * @return {EsaClient} Esa Clientのインスタンス
 */
function create(token, team) {
  return new EsaClient(token, team);
}

/**
 * 特定の記事の情報を取得する
 * @param {Integer} postId 【必須】記事ID
 * @return {Object} 記事のオブジェクト
 */
function getSpecificPost(postId) {
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
