import { 
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '../api/index.js'

export default {
  async FETCH_NEWS(context){
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data)
    return response;
  },
  async FECTH_JOBS({commit}){
    try {
      const response = await fetchJobsList();
      commit('SET_JOBS',response.data)
      return response;
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_ASK({ commit }){
    const response = await fetchAskList();
    commit('SET_ASK',response.data )
    return response;
  },

  FETCH_USER({ commit }, name){
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error)
      });
  },
  FETCH_ITEM({ commit }, id){
    return fetchCommentItem(id)
      .then(({ data }) => {
        console.log(data)
        commit('SET_ITEM', data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  // FETCH_LIST({ commit }, pageName){
  //   return fetchList(pageName)
  //     .then(({ data }) => commit('SET_LIST', data))
  //     .catch(error => console.log('여긴가:' , error))
  // },

  async FETCH_LIST({ commit }, pageName){
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}