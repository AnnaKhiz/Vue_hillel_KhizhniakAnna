import {useRouter} from "vue-router";
const router = useRouter()


const useGoHome = () => {
  router.push({name: 'home'})
}
export default useGoHome