import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const status = {
  UNLOAD: "UNLOAD",
  LOADING: "LOADING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};

const types = {
  PRODUCT_LOAD_INIT: "PRODUCT_LOAD_INIT",
  PRODUCT_LOAD_COMPLETED: "PRODUCT_LOAD_COMPLETED",
  PRODUCT_LOAD_FAILED: "PRODUCT_LOAD_FAILED",
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
};

const initState = {
  status: status.UNLOAD,
  products: [],
  searchString: "",
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.PRODUCT_LOAD_INIT: {
      return { ...state, status: status.LOADING };
    }
    case types.PRODUCT_LOAD_COMPLETED: {
      return { ...state, products: action.payload, status: status.COMPLETED };
    }
    case types.PRODUCT_LOAD_FAILED: {
      return { ...state, status: status.FAILED };
    }
    case types.SET_SEARCH_STRING: {
      return { ...state, searchString: action.payload };
    }

    default:
      return state;
  }
};

const store = createStore(productReducer, applyMiddleware(thunk));

export { status, types, store };

//          mandar       obtener
// const { useDispatch, useSelector } from "redux"
// const dispatch = useDispatch()
//https://www.digitalocean.com/community/tutorials/redux-redux-thunk-es

//ejemplo: https://www.youtube.com/watch?v=FOWO07pImCg&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=5
//<li>{props.arreglo.join(", ")}</li>
//<li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
