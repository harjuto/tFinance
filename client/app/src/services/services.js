
class QueryService {
  constructor($http, $q){
    this.$http = $http;
    this.$q = $q;
    this.data = [];
  }
  list(){
    return this.$http.get('/api/expenses');
  }
  get(id){
    return this.$http.get('/api/expenses/' + id );
  }
  save(item){
    return this.$http.post('/api/expenses/', item);
  }
  update(item){
    return this.$http.put('/api/expenses/' + item._id , item);
  }
  summary(start, end){
    var start = start || 0;
    var end = end || '';
    return this.$http.get('/api/expenses/summary/'+start+'/'+end);
  }
}

QueryService.$inject = ['$http','$q'];

module.exports = QueryService;
