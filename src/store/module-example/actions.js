import axios from "axios";
export async function GET_PRODUCT({commit}) {
  const products = await axios.get('https://back-4-back.herokuapp.com/dish',{
    headers: {
      'api-key': 'edcf27a66a5453a89e3b84305485a21b6e4ea57c590ff8392ab319801a8158da'
    }
  })
  // console.log(commit)
  commit('PRODUCT_MUTATION', products.data.result.map((el) => ({...el, 'quantity': 1, 'totalPrice': 1})))
}
