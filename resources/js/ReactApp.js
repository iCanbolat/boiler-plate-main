import {useEffect, React} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import actions from './redux/Authenticate/actions';
import {AppRoutes} from './routes/AppRoutes';

function ReactApp() {
  //Getting isAuthenticated store value from Authentication reducer.
  const {isAuthenticated, validateUserLoader} = useSelector(state => state.authenticateReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch({
        type: actions.GET_AUTH_USER,
      });
    }
  }, [])

  return <AppRoutes isAuthenticated={isAuthenticated}/>

}

export default ReactApp;
