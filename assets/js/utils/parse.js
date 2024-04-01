/**
 * JSONへの変換
 * @param {String} data JSONに変換する文字列
 * @returns {Object} 変換されたデータ
 */
export default (data)=>{
  try{
    return JSON.parse(data);
  }catch{
    return null;
  }
}